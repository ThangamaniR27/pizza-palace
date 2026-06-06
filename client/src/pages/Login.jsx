import API from "../api";
import { useState } from "react";

function Login({ setIsLoggedIn }) {

    const [isLogin, setIsLogin] = useState(true);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {

        try {

            // =========================
            // LOGIN
            // =========================
            if (isLogin) {

                const res = await API.post("/login", {
                    email,
                    password
                });

                if (res.data.success) {

                    alert("Login Successful 🎉");

                    setIsLoggedIn(true);

                } else {

                    alert(res.data.message);

                    // Automatically open Register page
                    if (res.data.message === "Please register first") {
                        setIsLogin(false);
                    }
                }
            }

            // =========================
            // REGISTER
            // =========================
            else {

                const res = await API.post("/register", {
                    name,
                    email,
                    password
                });

                if (res.data.success) {

                    alert("Registration Successful 🎉");

                    setName("");
                    setEmail("");
                    setPassword("");

                    // Return to Login page
                    setIsLogin(true);

                } else {

                    alert(res.data.message);
                }
            }

        } catch (err) {

            console.log(err);

            alert(
                err.response?.data?.message ||
                "Server not responding"
            );
        }
    };

    return (
        <div
            className="flex justify-center items-center min-h-screen bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600')"
            }}
        >
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">

                <h1 className="text-4xl font-bold text-center text-red-500 mb-6">
                    Pizza Palace 🍕
                </h1>

                <h2 className="text-2xl text-center mb-4">
                    {isLogin ? "Login" : "Register"}
                </h2>

                {!isLogin && (
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border rounded-lg mb-4"
                    />
                )}

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border rounded-lg mb-4"
                />

                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border rounded-lg mb-4"
                />

                <button
                    onClick={handleSubmit}
                    className="w-full bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg"
                >
                    {isLogin ? "Login" : "Register"}
                </button>

                <p className="text-center mt-4 text-gray-600">
                    {isLogin
                        ? "First time user?"
                        : "Already have an account?"}
                </p>

                <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-blue-500 w-full mt-2"
                >
                    {isLogin ? "Register Here" : "Back To Login"}
                </button>

            </div>
        </div>
    );
}

export default Login;