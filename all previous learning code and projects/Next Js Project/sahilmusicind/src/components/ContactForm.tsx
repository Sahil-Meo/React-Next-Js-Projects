export default function ContactForm() {
    return (
        <section className="bg-transparent px-4">
            <div className="max-w-2xl md:mx-auto">
               
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Have questions about learning music, booking lessons, or collaborating? Feel free to reach out—we'd love to hear from you!
                </p>

                <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            className="px-3 py-2 text-white rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-1 bg-neutral-950 placeholder:text-neutral-700"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            required
                            placeholder="Type your message here..."
                            className="px-2 py-3 text-white rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-1 bg-neutral-950 placeholder:text-neutral-700 resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-600 cursor-pointer transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
