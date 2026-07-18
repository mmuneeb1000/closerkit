import { useAuth } from "../context/AuthContext";
import AuthRequired from "../components/common/AuthRequired";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!user) {
    return <AuthRequired />;
  }

  return children;
}
