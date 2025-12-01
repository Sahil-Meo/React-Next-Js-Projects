import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [result, setResult] = useState("")
    const [error, setError] = useState('')

    const handleLoginFrom = (e) => {
        e.preventDefault()

        getUser()

        // if (email === "sahil@gmail.com" && password === "sahil") {
        //     setResult("login Succesfullt!")
        //     setError("")
        //     navigate("/main")
        // } else {
        //     setError("Enter your Correct details!")
        // }

    }

    const fetchData = async () => {
        const response = await fetch("http://localhost:4000/api/create-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password: password }),
        }).then((res) => console.log(res)).catch((error) => console.log(error))
    }

    const getUser = async (email, password) => {
        try {
            const response = await fetch("http://localhost:4000/api/get-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }), // Pass data in the request body
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${await response.text()}`);
            }

            const message = await response.text();
            console.log(message); // "User authenticated"
        } catch (error) {
            console.error("Get User Error:", error.message);
        }
    };



    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
            <div className="card shadow-lg p-4" style={{ width: "400px" }}>
                <h3 className="text-center mb-4">Login</h3>
                <form onSubmit={handleLoginFrom}>
                    <p className=" text-center text-danger">{error}</p>
                    <p className=" text-center text-success">{result}</p>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter your email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter your password"
                            required
                            onChange={(e) => setPassword(e.target.value)}

                        />
                    </div>

                    <div className="form-check mb-3">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            className="form-check-input"
                        />
                        <label htmlFor="rememberMe" className="form-check-label">
                            Remember Me
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>

                    <div className="text-center mt-3">
                        <a href="#" className="text-decoration-none">
                            Forgot Password?
                        </a>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Login;
