import React from 'react';
import useAdmin from '../Hooks/useAdmin';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminPending] = useAdmin();
  const location = useLocation();
  if (loading || isAdminPending) {
    // console.log(loading);
    return <span className="loading loading-ring loading-lg"></span>;
  }
  if (!user && !isAdmin) {
    return <Navigate to="/login" state={location?.pathname || '/'}></Navigate>;
  }
  return <div>{children}</div>;
};

export default AdminRoute;
