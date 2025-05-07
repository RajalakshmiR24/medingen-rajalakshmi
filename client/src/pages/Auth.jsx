import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postData } from "../redux/commonSlice";
import FormComponent from "../components/FormComponent";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, success, error } = useSelector((state) => state.common);

  // State for form data
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = async (data) => {
    try {
      const resultAction = await dispatch(postData({ endpoint: "/login", data }));
      const responseData = resultAction.payload;

      if (responseData?.access_token) {
        localStorage.setItem("access_token", responseData.access_token);
        navigate("/products");
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const fields = [
    { name: "username", label: "Username", type: "text", placeholder: "Enter username", required: true },
    { name: "password", label: "Password", type: "password", placeholder: "Enter password", required: true },
  ];

  return (
    <div className="max-w-md mx-auto p-4">
      <FormComponent
        title="Admin Login"
        fields={fields}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        buttonText="Login"
      />
      {loading && <p className="text-blue-500">Authenticating...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Auth;
