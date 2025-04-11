import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await fetch("http://localhost/static-sites/undiapersempre/php/login.php", {
        method: "POST",
        body: formData,
        credentials: 'include',
      });

      const data = await response.json();

      if (data.status === "success") {
        navigate("/admin");
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error("Error durant el login:", err);
      setError("An error occurred while trying to log in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[73vh] flex items-center justify-center bg-gatsby-night-800">
      <div className="bg-gatsby-night-700 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl sm:text-4xl font-serif text-gatsby-gold-600 tracking-[0.1em] mb-6 sm:mb-8 text-center">Sign In</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-xl sm:text-2xl font-serif text-gatsby-gold-600 tracking-[0.1em] mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded bg-white text-black"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xl sm:text-2xl font-serif text-gatsby-gold-600 tracking-[0.1em] mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded bg-white text-black"
            />
          </div>

          {error && <div className="text-red-500 text-center">{error}</div>}

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="mt-6 bg-gatsby-gold-600 hover:bg-gatsby-gold-400 text-white px-6 py-2 rounded transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
