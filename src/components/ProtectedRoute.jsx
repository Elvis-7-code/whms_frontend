import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthConnect";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return null; // or <Loader />
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
