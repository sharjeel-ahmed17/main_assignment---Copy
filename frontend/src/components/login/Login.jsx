import React, { useState } from 'react';
import { login } from '../../services/auth/auth.service';
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {
        try {
            const response = await login(form);
            localStorage.setItem('token', response.data.token);
            // Redirect to dashboard
            navigate("/dashboard");

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">

                <div className="card p-4 shadow-sm">
                    <h3 className="mb-4 text-center">Login</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter your email"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter your password"
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary w-100"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;
