import React, { useEffect, useMemo, useRef, useState } from "react";
import { 
  FileImage,
  Heading,
  Images,
  Italic,
  ListPlus,
  Save,
  Send,
  Trash2,
  MoveUp,
  MoveDown,
  Link as LinkIcon,
  AlignLeft,
  LayoutTemplate,
  Upload,
  Eye,
  EyeOff
} from "lucide-react";

/**
 * DashboardPostEditor.jsx
 * A clean, production-ready post editor UI for a dashboard.
 * - TailwindCSS for styling
 * - lucide-react for icons
 * - No external state libs; simple React state with a content blocks model
 * - Supports: title, slug, excerpt, status, cover image, categories, tags
 * - Content blocks: Heading, Paragraph, Image (add/move/delete)
 * - Outline panel generated from Heading blocks
 * - Compile payload for API (JSON + separate image uploads)
 */

const uid = () => Math.random().toString(36).slice(2, 9);

const emptyParagraph = () => ({ id: uid(), type: "paragraph", text: "" });

const initialState = {
  title: "",
  slug: "",
  excerpt: "",
  status: "draft", // draft | published
  categories: [], // array of strings
  tags: [], // array of strings
  cover: /** @type {null | {file?: File, url?: string, alt?: string}} */ (null),
  blocks: [emptyParagraph()],
};

export default function DashboardPostEditor() {
  const [post, setPost] = useState(initialState);
  const [showOutline, setShowOutline] = useState(true);

  // Auto-generate slug from title
  useEffect(() => {
    if (!post.title) return;
    const s = post.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
    setPost((p) => ({ ...p, slug: s }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post.title]);

  const headings = useMemo(
    () => post.blocks.filter((b) => b.type === "heading"),
    [post.blocks]
  );

  const coverPreview = useMemo(() => {
    if (!post.cover) return null;
    if (post.cover.url) return post.cover.url;
    if (post.cover.file) return URL.createObjectURL(post.cover.file);
    return null;
  }, [post.cover]);

  const addBlock = (type) => {
    const id = uid();
    if (type === "heading") {
      setPost((p) => ({
        ...p,
        blocks: [...p.blocks, { id, type: "heading", level: 2, text: "" }],
      }));
    } else if (type === "paragraph") {
      setPost((p) => ({ ...p, blocks: [...p.blocks, emptyParagraph()] }));
    } else if (type === "image") {
      setPost((p) => ({
        ...p,
        blocks: [
          ...p.blocks,
          { id, type: "image", file: null, url: "", alt: "", caption: "" },
        ],
      }));
    }
  };

  const updateBlock = (id, patch) => {
    setPost((p) => ({
      ...p,
      blocks: p.blocks.map((b) => (b.id === id ? { ...b, ...patch } : b)),
    }));
  };

  const removeBlock = (id) => {
    setPost((p) => ({ ...p, blocks: p.blocks.filter((b) => b.id !== id) }));
  };

  const moveBlock = (id, dir) => {
    setPost((p) => {
      const idx = p.blocks.findIndex((b) => b.id === id);
      if (idx < 0) return p;
      const next = [...p.blocks];
      const swapWith = dir === "up" ? idx - 1 : idx + 1;
      if (swapWith < 0 || swapWith >= next.length) return p;
      [next[idx], next[swapWith]] = [next[swapWith], next[idx]];
      return { ...p, blocks: next };
    });
  };

  const addFromCommaString = (value) =>
    value
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

  const onChooseCover = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setPost((p) => ({ ...p, cover: { file: f, alt: p.cover?.alt || "" } }));
  };

  const compilePayload = () => {
    // Convert internal state to a backend-friendly JSON payload.
    // Strategy: upload images separately -> send URLs here.
    const content = post.blocks.map((b) => {
      if (b.type === "image") {
        return {
          type: "image",
          url: b.url || null, // to be filled after upload
          alt: b.alt || "",
          caption: b.caption || "",
        };
      }
      if (b.type === "heading") {
        return { type: "heading", level: b.level || 2, text: b.text || "" };
      }
      return { type: "paragraph", text: b.text || "" };
    });

    return {
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      status: post.status,
      categories: post.categories,
      tags: post.tags,
      cover: post.cover?.url || null, // to be filled after upload
      blocks: content,
    };
  };

  const onSaveDraft = () => {
    const payload = compilePayload();
    console.log("[Save Draft] payload (upload images first, then send JSON):", payload);
    alert("Draft prepared (see console). Implement upload + API call as described in the guide below.");
  };

  const onPublish = () => {
    const payload = compilePayload();
    console.log("[Publish] payload (upload images first, then send JSON):", payload);
    alert("Publish prepared (see console). Implement upload + API call as described in the guide below.");
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-full px-4 py-3 flex items-center gap-3">
          <LayoutTemplate className="h-5 w-5" />
          <input
            value={post.title}
            onChange={(e) => setPost((p) => ({ ...p, title: e.target.value }))}
            placeholder="Post title..."
            className="flex-1 text-lg md:text-xl font-semibold bg-transparent outline-none placeholder:text-gray-400"
          />
          <button onClick={onSaveDraft} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border shadow-sm hover:shadow transition">
            <Save className="h-4 w-4" /> Save draft
          </button>
          <button onClick={onPublish} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-black text-white shadow hover:opacity-90 transition">
            <Send className="h-4 w-4" /> Publish
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-full  py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Editor */}
        <section className="lg:col-span-8 space-y-4">
          {/* Slug + Excerpt */}
          <div className="bg-white rounded-2xl shadow p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-500">Slug</label>
                <div className="flex items-center gap-2 rounded-xl border px-3 py-2">
                  <LinkIcon className="h-4 w-4" />
                  <input
                    value={post.slug}
                    onChange={(e) => setPost((p) => ({ ...p, slug: e.target.value }))}
                    className="w-full outline-none"
                    placeholder="my-post-slug"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-500">Status</label>
                <select
                  value={post.status}
                  onChange={(e) => setPost((p) => ({ ...p, status: e.target.value }))}
                  className="w-full rounded-xl border px-3 py-2"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-gray-500">Excerpt</label>
              <textarea
                rows={3}
                className="w-full rounded-xl border px-3 py-2"
                placeholder="One-liner summary for cards and SEO…"
                value={post.excerpt}
                onChange={(e) => setPost((p) => ({ ...p, excerpt: e.target.value }))}
              />
            </div>
          </div>

          {/* Content Blocks */}
          <div className="bg-white rounded-2xl shadow p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Content</h3>
              <div className="flex items-center gap-2">
                <button onClick={() => addBlock("heading")} className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5">
                  <Heading className="h-4 w-4" /> Heading
                </button>
                <button onClick={() => addBlock("paragraph")} className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5">
                  <AlignLeft className="h-4 w-4" /> Paragraph
                </button>
                <button onClick={() => addBlock("image")} className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5">
                  <Images className="h-4 w-4" /> Image
                </button>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              {post.blocks.map((b, i) => (
                <BlockEditor
                  key={b.id}
                  block={b}
                  onChange={(patch) => updateBlock(b.id, patch)}
                  onRemove={() => removeBlock(b.id)}
                  onMoveUp={() => moveBlock(b.id, "up")}
                  onMoveDown={() => moveBlock(b.id, "down")}
                  canMoveUp={i > 0}
                  canMoveDown={i < post.blocks.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Side Panels */}
        <aside className="lg:col-span-4 space-y-4">
          {/* Cover image */}
          <div className="bg-white rounded-2xl shadow p-4">
            <h3 className="font-semibold mb-3">Cover image</h3>
            {coverPreview ? (
              <div className="relative overflow-hidden rounded-xl border">
                <img src={coverPreview} alt={post.cover?.alt || "Cover preview"} className="w-full h-48 object-cover" />
                <div className="p-3">
                  <input
                    className="w-full rounded-xl border px-3 py-2 mt-2"
                    placeholder="Alt text (accessibility)"
                    value={post.cover?.alt || ""}
                    onChange={(e) => setPost((p) => ({ ...p, cover: { ...(p.cover || {}), alt: e.target.value } }))}
                  />
                </div>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-xl p-6 cursor-pointer">
                <Upload className="h-6 w-6" />
                <span className="text-sm">Drop or click to upload</span>
                <input type="file" accept="image/*" className="hidden" onChange={onChooseCover} />
              </label>
            )}
          </div>

          {/* Taxonomy */}
          <div className="bg-white rounded-2xl shadow p-4">
            <h3 className="font-semibold">Categories & Tags</h3>
            <p className="text-xs text-gray-500 mb-2">Separate multiple using commas.</p>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600">Categories</label>
                <input
                  className="w-full rounded-xl border px-3 py-2"
                  placeholder="e.g., AI, Design"
                  onBlur={(e) => setPost((p) => ({ ...p, categories: addFromCommaString(e.target.value) }))}
                />
                {post.categories?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {post.categories.map((c) => (
                      <span key={c} className="text-xs px-2 py-1 rounded-full bg-gray-100 border">{c}</span>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <label className="text-sm text-gray-600">Tags</label>
                <input
                  className="w-full rounded-xl border px-3 py-2"
                  placeholder="e.g., LLMs, React, UX"
                  onBlur={(e) => setPost((p) => ({ ...p, tags: addFromCommaString(e.target.value) }))}
                />
                {post.tags?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 border">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Outline */}
          <div className="bg-white rounded-2xl shadow p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Outline</h3>
              <button onClick={() => setShowOutline((s) => !s)} className="p-2 rounded-xl border">
                {showOutline ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              </button>
            </div>
            {showOutline && (
              <ol className="mt-3 space-y-2 text-sm">
                {headings.length === 0 && <li className="text-gray-500">No headings yet.</li>}
                {headings.map((h) => (
                  <li key={h.id} className="flex items-start gap-2">
                    <Heading className="h-4 w-4 mt-0.5" />
                    <span className="truncate">{h.text || "(empty heading)"}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

function BlockEditor({ block, onChange, onRemove, onMoveUp, onMoveDown, canMoveUp, canMoveDown }) {
  if (block.type === "heading") {
    return (
      <div className="rounded-xl border p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heading className="h-4 w-4" />
            <span className="text-sm text-gray-600">Heading</span>
          </div>
          <div className="flex items-center gap-1">
            <button disabled={!canMoveUp} onClick={onMoveUp} className="p-2 rounded-lg border disabled:opacity-40"><MoveUp className="h-4 w-4" /></button>
            <button disabled={!canMoveDown} onClick={onMoveDown} className="p-2 rounded-lg border disabled:opacity-40"><MoveDown className="h-4 w-4" /></button>
            <button onClick={onRemove} className="p-2 rounded-lg border hover:bg-red-50"><Trash2 className="h-4 w-4" /></button>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-6 gap-3">
          <select
            value={block.level}
            onChange={(e) => onChange({ level: Number(e.target.value) })}
            className="md:col-span-1 rounded-xl border px-3 py-2"
          >
            <option value={1}>H1</option>
            <option value={2}>H2</option>
            <option value={3}>H3</option>
            <option value={4}>H4</option>
          </select>
          <input
            value={block.text}
            onChange={(e) => onChange({ text: e.target.value })}
            className="md:col-span-5 rounded-xl border px-3 py-2"
            placeholder="Heading text"
          />
        </div>
      </div>
    );
  }

  if (block.type === "image") {
    const preview = block.url || (block.file ? URL.createObjectURL(block.file) : "");
    return (
      <div className="rounded-xl border p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileImage className="h-4 w-4" />
            <span className="text-sm text-gray-600">Image</span>
          </div>
          <div className="flex items-center gap-1">
            <button disabled={!canMoveUp} onClick={onMoveUp} className="p-2 rounded-lg border disabled:opacity-40"><MoveUp className="h-4 w-4" /></button>
            <button disabled={!canMoveDown} onClick={onMoveDown} className="p-2 rounded-lg border disabled:opacity-40"><MoveDown className="h-4 w-4" /></button>
            <button onClick={onRemove} className="p-2 rounded-lg border hover:bg-red-50"><Trash2 className="h-4 w-4" /></button>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-1 md:grid-cols-12 gap-3">
          <label className="md:col-span-4 flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-xl p-6 cursor-pointer">
            <Upload className="h-6 w-6" />
            <span className="text-sm">Upload image</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (!f) return;
                onChange({ file: f, url: "" });
              }}
            />
          </label>
          <div className="md:col-span-8">
            {preview ? (
              <img src={preview} alt={block.alt || "Preview"} className="w-full h-56 object-cover rounded-xl border" />
            ) : (
              <div className="h-56 rounded-xl border flex items-center justify-center text-sm text-gray-500">No image</div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              <input
                className="rounded-xl border px-3 py-2"
                placeholder="Alt text"
                value={block.alt}
                onChange={(e) => onChange({ alt: e.target.value })}
              />
              <input
                className="rounded-xl border px-3 py-2"
                placeholder="Caption (optional)"
                value={block.caption}
                onChange={(e) => onChange({ caption: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // paragraph
  return (
    <div className="rounded-xl border p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlignLeft className="h-4 w-4" />
          <span className="text-sm text-gray-600">Paragraph</span>
        </div>
        <div className="flex items-center gap-1">
          <button disabled={!canMoveUp} onClick={onMoveUp} className="p-2 rounded-lg border disabled:opacity-40"><MoveUp className="h-4 w-4" /></button>
          <button disabled={!canMoveDown} onClick={onMoveDown} className="p-2 rounded-lg border disabled:opacity-40"><MoveDown className="h-4 w-4" /></button>
          <button onClick={onRemove} className="p-2 rounded-lg border hover:bg-red-50"><Trash2 className="h-4 w-4" /></button>
        </div>
      </div>
      <textarea
        rows={5}
        className="mt-3 w-full rounded-xl border px-3 py-2"
        placeholder="Write your paragraph..."
        value={block.text}
        onChange={(e) => onChange({ text: e.target.value })}
      />
    </div>
  );
}
