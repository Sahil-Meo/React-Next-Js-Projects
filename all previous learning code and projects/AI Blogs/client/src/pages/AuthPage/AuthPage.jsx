import React, { useContext } from "react";
import SignUpForm from "./Component/SignUpForm";
import LoginForm from "./Component/LoginForm";
import { AuthContext } from "../../context/AuthContext";
import { X } from "lucide-react";

const AuthPage = () => {
  const { isLogin, isAuthModalOpen, closeModal } = useContext(AuthContext);

  if (!isAuthModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Auth Forms */}
        {isLogin ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default AuthPage;
