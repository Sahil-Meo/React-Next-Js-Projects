import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const LoginForm = () => {
     const [formData, setFormData] = useState({
          email: "",
          password: "",
     });
     const [showPassword, setShowPassword] = useState(false);
     const [error, setError] = useState("");
     const { setIsLogin } = useContext(AuthContext);

     const inputClasses =
          "bg-[rgb(var(--surface))] border border-[rgb(var(--border))] text-[rgb(var(--fg))] text-sm rounded-lg " +
          "focus:ring-[rgb(var(--ring))] focus:border-[rgb(var(--primary-300))] block w-full p-2.5 " +
          "placeholder-[rgb(var(--muted-foreground))] outline-none";

     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prev) => ({
               ...prev,
               [name]: value,
          }));
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          setError("");

          if (!formData.email || !formData.password) {
               setError("Both fields are required!");
               return;
          }

          try {
               // Replace with your API call
               console.log("Login Attempt:", formData);
               alert("Login successful! 🚀");
          } catch (err) {
               setError("Invalid email or password!");
          }
     };

     return (
          <div className=" w-full sm:max-w-md mx-auto  shadow-md p-6 space-y-4 md:space-y-6 sm:p-8 bg-[rgb(var(--bg))] rounded-2xl">
               <h1 className="text-xl font-bold leading-tight tracking-tight text-[rgb(var(--fg))] md:text-2xl">
                    Login to your account
               </h1>

               <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    {/* Email */}
                    <div>
                         <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-[rgb(var(--fg))]"
                         >
                              Your email
                         </label>
                         <input
                              type="email"
                              name="email"
                              id="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="name@company.com"
                              required
                              className={inputClasses}
                         />
                    </div>

                    {/* Password */}
                    <div>
                         <label
                              htmlFor="password"
                              className="block mb-2 text-sm font-medium text-[rgb(var(--fg))]"
                         >
                              Password
                         </label>
                         <div className="relative">
                              <input
                                   type={showPassword ? "text" : "password"}
                                   name="password"
                                   id="password"
                                   value={formData.password}
                                   onChange={handleChange}
                                   placeholder="••••••••"
                                   required
                                   className={inputClasses}
                              />
                              <button
                                   type="button"
                                   onClick={() => setShowPassword((prev) => !prev)}
                                   className="absolute inset-y-0 right-3 text-sm text-[rgb(var(--muted-foreground))]"
                              >
                                   {showPassword ? "Hide" : "Show"}
                              </button>
                         </div>
                    </div>

                    {/* Error Message */}
                    {error && <p className="text-sm text-red-500 font-medium">{error}</p>}

                    {/* Submit */}
                    <button
                         type="submit"
                         className="w-full text-[rgb(var(--primary-foreground))] bg-[rgb(var(--primary-500))] 
                     hover:bg-[rgb(var(--primary-600))] focus:ring-4 focus:outline-none 
                     focus:ring-[rgb(var(--ring))] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                         Login
                    </button>

                    {/* Footer link */}
                    <p className="text-sm font-light text-[rgb(var(--muted-foreground))]">
                         Don’t have an account?{" "}
                         <Link
                              href="#"
                              onClick={() => setIsLogin(false)}
                              className="font-medium text-[rgb(var(--primary-600))] hover:underline"
                         >
                              Sign up here
                         </Link>
                    </p>
               </form>
          </div>
     );
};

export default LoginForm;
