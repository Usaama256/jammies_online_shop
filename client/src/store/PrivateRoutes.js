import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoutesAdmin = ({ children }) => {
  const [IsAdmin, setIsAdmin] = useState(false);

  return IsAdmin ? children : <Navigate to="/home" />;
};

export const PrivateRoutesLogin = ({ children }) => {
  const user = useSelector((state) => state.user.currentUser);

  return user ? <Navigate to="/home" /> : children;
};
