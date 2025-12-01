import React, { useState } from "react";
import BreadCrumbs from "../../../components/BreadCrumbs";
import BorderLine from "../../../components/BorderLine";

const Profile = () => {
  // Initial user data
  const [user, setUser] = useState({
    name: "Sahil Meo",
    username: "sahil_meo",
    email: "sahil@example.com",
    phone: "+92 300 1234567",
    location: "Lahore, Pakistan",
    badge: "Pro Member",
    avatar: "/user-avatar.png",
    joined: "March 2023",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  // Handle avatar upload (preview)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setEditedUser({ ...editedUser, avatar: imageUrl });
    }
  };

  // Save profile
  const handleSave = () => {
    console.log("Updated User Data:", editedUser); // Later send to backend
    setUser(editedUser);
    setIsEditing(false);
  };

  // Cancel editing
  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
  };

  return (
    <div className="">
      <BreadCrumbs />

      <div className="max-w-5xl mx-auto mt-4">
        {/* Profile Header */}
        <div className="bg-white shadow rounded-2xl p-6 flex items-center gap-6">
          {/* Avatar + Select Image */}
          <div className="relative flex flex-col items-center">
            <img
              src={isEditing ? editedUser.avatar : user.avatar}
              alt="User Avatar"
              className="w-24 h-24 rounded-full border-2 border-gray-200 object-cover"
            />

            {isEditing && (
              <>
                {/* Hidden file input */}
                <input
                  type="file"
                  accept="image/*"
                  id="avatarInput"
                  onChange={handleImageChange}
                  className="hidden"
                />
                {/* Label as button */}
                <label
                  htmlFor="avatarInput"
                  className="mt-2 text-xs text-blue-600 cursor-pointer hover:underline"
                >
                  Select Image
                </label>
              </>
            )}
          </div>

          {/* User Info */}
          <div>
            <span className="text-sm text-blue-500 font-medium">{user.badge}</span>

            {isEditing ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={editedUser.name}
                  onChange={handleChange}
                  className="block mt-1 text-xl font-semibold border rounded px-2 py-1"
                />
                <input
                  type="text"
                  name="username"
                  value={editedUser.username}
                  onChange={handleChange}
                  className="block mt-1 text-gray-500 border rounded px-2 py-1"
                />
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
                <p className="text-gray-500">@{user.username}</p>
              </>
            )}
            <p className="text-sm text-gray-400">Joined {user.joined}</p>
          </div>

          {/* Edit / Save Buttons */}
          <div className="ml-auto flex gap-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>

        <BorderLine className="my-6" />

        {/* Personal Info Section */}
        <div className="bg-white shadow rounded-2xl p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            {["email", "phone", "location"].map((field) => (
              <div key={field}>
                <p className="text-sm font-medium capitalize">{field}</p>
                {isEditing ? (
                  <input
                    type="text"
                    name={field}
                    value={editedUser[field]}
                    onChange={handleChange}
                    className="w-full border rounded px-2 py-1"
                  />
                ) : (
                  <p>{user[field]}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Account Settings Section */}
        <div className="bg-white shadow rounded-2xl p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Account Settings</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex justify-between items-center">
              <span>Password</span>
              <button className="text-blue-500 hover:underline">Change</button>
            </li>
            <li className="flex justify-between items-center">
              <span>Privacy</span>
              <button className="text-blue-500 hover:underline">Manage</button>
            </li>
            <li className="flex justify-between items-center">
              <span>Notifications</span>
              <button className="text-blue-500 hover:underline">Edit</button>
            </li>
          </ul>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white shadow rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Recent Activity</h3>
          <ul className="space-y-3 text-gray-600">
            <li>
              📌 Posted a new blog:{" "}
              <span className="font-medium">"React Best Practices"</span>
            </li>
            <li>⭐ Upgraded to Pro Member</li>
            <li>💬 Commented on "JavaScript Tips"</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
