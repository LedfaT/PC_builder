import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <input
        name="email"
        onChange={handleChange}
        value={formData.email}
        type="text"
        placeholder="Email"
      />
      <input
        name="password"
        onChange={handleChange}
        value={formData.password}
        type="password"
        placeholder="Password"
      />
      <button>Login</button>
      <button>Registration</button>
    </div>
  );
};

export default LoginForm;
