import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");

    try {
      await login(formData);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Unable to login.");
    }
  }

  return (
    <section className="mx-auto mt-16 max-w-md rounded-xl bg-white p-8 shadow">
      <h1 className="mb-6 text-3xl font-bold">Login</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
          required
        />

        {error && <p className="text-sm text-danger">{error}</p>}

        <button className="w-full rounded-lg bg-green-600 py-3 font-medium text-white hover:bg-green-700">
          Login
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        Don't have an account?{" "}
        <Link to="/register" className="font-medium text-primary">
          Register
        </Link>
      </p>
    </section>
  );
}
