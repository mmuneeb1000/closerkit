import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

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

    setLoading(true);
    setError("");

    try {
      await login(formData);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Unable to login.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen bg-surface">
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">
        <div className="hidden bg-green-600 p-16 text-white lg:flex lg:flex-col lg:justify-center">
          <span className="text-sm uppercase tracking-widest text-green-200">
            Welcome to
          </span>

          <h1 className="mt-4 text-6xl font-bold">CloserKit</h1>

          <p className="mt-8 max-w-md text-lg leading-8 text-green-100">
            Generate personalized website proposals, manage prospects, and close
            more clients with AI.
          </p>

          <div className="mt-12 space-y-4">
            <p>✓ AI-powered proposals</p>
            <p>✓ Project management</p>
            <p>✓ Proposal history</p>
            <p>✓ Secure cloud workspace</p>
          </div>
        </div>

        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold">Welcome Back</h2>

            <p className="mt-2 text-muted">Sign in to continue to CloserKit.</p>

            <button
              disabled
              className="mt-8 flex w-full items-center justify-center 
              gap-3 rounded-xl border p-3 opacity-60"
            >
              <FcGoogle size={22} />
              Continue with Google
              <span className="text-xs">(Coming Soon)</span>
            </button>

            <div className="my-8 flex items-center">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="px-4 text-sm text-muted">OR</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <FiMail className="absolute left-4 top-4 text-muted" />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border py-3 pl-12 pr-4"
                  required
                />
              </div>

              <div className="relative">
                <FiLock className="absolute left-4 top-4 text-muted" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full rounded-xl border py-3 pl-12 pr-12"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>

                <Link to="/forgot-password" className="text-primary">
                  Forgot Password?
                </Link>
              </div>

              {error && (
                <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                  {error}
                </p>
              )}

              <button
                disabled={loading}
                className="w-full rounded-xl bg-green-600 py-3 font-medium text-white"
              >
                {loading ? "Signing In..." : "Login"}
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-muted">
              Don't have an account?{" "}
              <Link to="/register" className="font-medium text-primary">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
