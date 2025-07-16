import { useContext, useState } from "react";
import { styles } from "./RegSection.styles";
import { Button, TextField, Box, Typography } from "@mui/material";
import { Context } from "@/contextProvider";
import { useNavigate } from "react-router-dom";
import notify from "@/components/notify";

const RegSection = ({ setActiveForm }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errors, setErrors] = useState({});
  const { store } = useContext(Context);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.username.trim()) newErrors.username = "Username is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(form.email)) newErrors.email = "Invalid email";
    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 8)
      newErrors.password = "Minimum 8 characters";
    if (!form.passwordConfirm)
      newErrors.passwordConfirm = "Please confirm password";
    else if (form.password !== form.passwordConfirm)
      newErrors.passwordConfirm = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onChangeForm = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Удаляем ошибку при вводе
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const submitForm = async function () {
    if (!validate()) return;

    setLoading(true);
    try {
      await store.registration(form);
      navigate("/profile");
    } catch (e) {
      notify("Invalid credentials", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={styles.section}>
      <Box>
        <Typography variant="h5" fontWeight="bold">
          Create Account
        </Typography>
        <Typography sx={{ color: "#6b7280", mt: 0.5 }}>
          Enter your details to create a new account
        </Typography>
      </Box>

      <TextField
        label="Username"
        placeholder="John"
        fullWidth
        variant="outlined"
        name="username"
        sx={styles.textField}
        value={form.username}
        onChange={onChangeForm}
        error={!!errors.username}
        helperText={errors.username}
      />

      <TextField
        label="Email"
        placeholder="example@email.com"
        fullWidth
        variant="outlined"
        name="email"
        value={form.email}
        onChange={onChangeForm}
        sx={styles.textField}
        error={!!errors.email}
        helperText={errors.email}
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
        variant="outlined"
        name="password"
        value={form.password}
        onChange={onChangeForm}
        sx={styles.textField}
        error={!!errors.password}
        helperText={errors.password}
      />

      <TextField
        label="Confirm Password"
        type="password"
        name="passwordConfirm"
        fullWidth
        variant="outlined"
        sx={styles.textField}
        value={form.passwordConfirm}
        onChange={onChangeForm}
        error={!!errors.passwordConfirm}
        helperText={errors.passwordConfirm}
      />

      <Button
        disabled={loading}
        onClick={submitForm}
        variant="contained"
        sx={styles.button}
      >
        {loading ? "Creating..." : "Create Account"}
      </Button>

      <Typography sx={styles.footerText}>
        Already have an account?{" "}
        <Box
          onClick={() => setActiveForm("signin")}
          component="span"
          sx={styles.link}
        >
          Sign in
        </Box>
      </Typography>
    </Box>
  );
};

export default RegSection;
