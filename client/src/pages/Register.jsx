import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!acceptTerms) {
      return setError("Please accept the Terms & Privacy Policy.");
    }

    setLoading(true);
    setError("");

    try {
      await register(formData);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Unable to create your account.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen bg-surface">
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">
        <div className="hidden bg-green-600 p-16 text-white lg:flex lg:flex-col lg:justify-center">
          <span className="text-sm uppercase tracking-widest text-green-200">
            Join CloserKit
          </span>

          <h1 className="mt-4 text-6xl font-bold">
            Build Better Client Outreach
          </h1>

          <p className="mt-8 max-w-md text-lg leading-8 text-green-100">
            Organize projects, generate AI-powered website proposals, and keep
            every conversation in one place.
          </p>

          <div className="mt-12 space-y-4">
            <p>✓ Unlimited client projects</p>
            <p>✓ AI-generated proposals</p>
            <p>✓ Proposal history</p>
            <p>✓ Secure cloud workspace</p>
          </div>
        </div>

        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold">Create Account</h2>

            <p className="mt-2 text-muted">Start using CloserKit in minutes.</p>

            <button
              disabled
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl border p-3 opacity-60"
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
                <FiUser className="absolute left-4 top-4 text-muted" />

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border py-3 pl-12 pr-4"
                  required
                />
              </div>

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

              <div className="rounded-lg bg-gray-50 p-4 text-sm text-muted">
                <p className="font-medium text-text">
                  Password should include:
                </p>

                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>At least 8 characters</li>
                  <li>One uppercase letter</li>
                  <li>One number</li>
                </ul>
              </div>

              <label className="flex items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-1"
                />

                <span className="text-muted">
                  I agree to the{" "}
                  <Link to="/terms" className="text-primary">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-primary">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {error && (
                <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                  {error}
                </p>
              )}

              <button
                disabled={loading}
                className="w-full rounded-xl bg-green-600 py-3 font-medium text-white transition hover:bg-green-800 disabled:opacity-60"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-muted">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-primary">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
