import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <p>Loading...</p>; // Display a loader while authentication state is being fetched
    }

    if (!user) {
        return <Navigate to="/signin" replace />;
    }

    return children;
};

export default ProtectedRoute;
