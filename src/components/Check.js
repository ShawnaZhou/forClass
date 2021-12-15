import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Check = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (sessionStorage.getItem("userInfo")) navigate("/home");
    else navigate("login");
  }, [location]);
  return <div></div>;
};

export default Check;
