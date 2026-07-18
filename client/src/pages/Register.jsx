import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
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
      await register(formData);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Unable to register.");
    }
  }

  return (
    <section className="mx-auto mt-16 max-w-md rounded-xl bg-white p-8 shadow">
      <h1 className="mb-6 text-3xl font-bold">Create Account</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
          required
        />

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

        <button className="w-full rounded-lg bg-primary py-3 font-medium text-white hover:bg-primary-dark">
          Create Account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        Already have an account?{" "}
        <Link to="/login" className="font-medium text-primary">
          Login
        </Link>
      </p>
    </section>
  );
}
