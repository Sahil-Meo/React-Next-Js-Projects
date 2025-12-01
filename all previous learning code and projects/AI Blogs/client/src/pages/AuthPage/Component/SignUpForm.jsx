import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { set } from "mongoose";

const SignUpForm = () => {
     const [showPassword, setShowPassword] = useState(false);
     const [formData, setFormData] = useState({
          fullname: "",
          email: "",
          password: "",
          confirmPassword: "",
          termsAccepted: false,
     });

     const [errors, setErrors] = useState({});

     const { setIsLogin } = useContext(AuthContext);

     const handleChange = (e) => {
          const { name, value, type, checked } = e.target;
          setFormData((prev) => ({
               ...prev,
               [name]: type === "checkbox" ? checked : value,
          }));
          setErrors((prev) => ({ ...prev, [name]: "" })); 
     };

     const formValidation = () => {
          const newErrors = {};
          if (!formData.fullname) newErrors.fullname = "Full name is required";
          if (!formData.email) newErrors.email = "Email is required";
          if (!formData.password || formData.password !== ""
          ) newErrors.password = "Password is required";
          if (!formData.confirmPassword || formData.password !== formData.confirmPassword)
               newErrors.confirmPassword = "Confirm Password is required";
          if (!formData.termsAccepted)
               newErrors.termsAccepted = "You must accept the terms and conditions";
          setErrors(newErrors);
          console.log(errors);

          return Object.keys(newErrors).length === 0;
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          const checkform = formValidation();

          if (!checkform) return;

          try {
               const response = await axios.post("/api/auth/signup", formData);
               console.log("User Registered:", response.data);
               setIsLogin(true);
          } catch (error) {
               console.error("Error registering user:", error);
               alert("Error registering user");
          }
          console.log("Error registering user:", errors);

          console.log("User Registered:", formData);
     };

     const inputClasses =
          "bg-[rgb(var(--surface))] border border-[rgb(var(--border))] text-[rgb(var(--fg))] text-sm rounded-lg " +
          "focus:ring-[rgb(var(--ring))] focus:border-[rgb(var(--primary-300))] " +
          "block w-full p-2.5 placeholder-[rgb(var(--muted-foreground))] outline-none";

     return (
          <div className=" w-full sm:max-w-md mx-auto p-6 space-y-4 md:space-y-6 sm:p-8 bg-[rgb(var(--bg))] rounded-2xl shadow-md">
               <h1 className="text-xl font-bold leading-tight tracking-tight text-[rgb(var(--fg))] md:text-2xl">
                    Create an account
               </h1>
               <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div>
                         <label
                              htmlFor="fullname"
                              className="block mb-2 text-sm font-medium text-[rgb(var(--fg))]"
                         >
                              Full name
                         </label>
                         <input
                              type="text"
                              name="fullname"
                              id="fullname"
                              value={formData.fullname}
                              onChange={handleChange}
                              placeholder="John Doe"
                              required
                              className={inputClasses}
                         />
                         <span className="text-red-500 text-sm">{errors?.fullname}</span>
                    </div>

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
                         <span className="text-red-500 text-sm">{errors?.email}</span>
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
                         <span className="text-red-500 text-sm">{errors?.password}</span>
                    </div>

                    {/* Confirm Password */}
                    <div>
                         <label
                              htmlFor="confirmPassword"
                              className="block mb-2 text-sm font-medium text-[rgb(var(--fg))]"
                         >
                              Confirm password
                         </label>
                         <input
                              type="password"
                              name="confirmPassword"
                              id="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              placeholder="••••••••"

                              className={inputClasses}
                         />
                         <span className="text-red-500 text-sm">{errors?.confirmPassword}</span>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start">
                         <div className="flex items-center h-5">
                              <input
                                   id="terms"
                                   name="termsAccepted"
                                   type="checkbox"
                                   checked={formData.termsAccepted}
                                   onChange={handleChange}
                                   required
                                   className="w-4 h-4 border border-[rgb(var(--border))] rounded bg-[rgb(var(--surface))] 
                         focus:ring-3 focus:ring-[rgb(var(--primary-300))]"
                              />
                         </div>
                         <div className="ml-3 text-sm">
                              <label
                                   htmlFor="terms"
                                   className="font-light text-[rgb(var(--muted-foreground))]"
                              >
                                   I accept the{" "}
                                   <a
                                        className="font-medium text-[rgb(var(--primary-600))] hover:underline"
                                        href="#"
                                   >
                                        Terms and Conditions
                                   </a>
                              </label>
                         </div>
                    </div>

                    {/* Submit */}
                    <button
                         type="submit"
                         className="w-full text-[rgb(var(--primary-foreground))] bg-[rgb(var(--primary-500))] 
                     hover:bg-[rgb(var(--primary-600))] focus:ring-4 focus:outline-none 
                     focus:ring-[rgb(var(--ring))] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                         Create an account
                    </button>

                    {/* Footer link */}
                    <p className="text-sm font-light text-[rgb(var(--muted-foreground))]">
                         Already have an account?{" "}
                         <Link
                              to="#"
                              onClick={() => setIsLogin(true)}
                              className="font-medium text-[rgb(var(--primary-600))] hover:underline"
                         >
                              Login here
                         </Link>
                    </p>
               </form>
          </div>
     );
};

export default SignUpForm;
