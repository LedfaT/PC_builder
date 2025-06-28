import { styles } from "./AuthSection.styles";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "@/contextProvider";
import { Button, TextField, Box, Typography } from "@mui/material";
import notify from "@/components/notify";

const AuthSection = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { store } = useContext(Context);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onChangeForm = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = async function () {
    setLoading(true);
    try {
      const res = await store.login(form);

      if (res.status === 200) {
        navigate("/profile");
      }
    } catch (e) {
      notify("Invalid creditals", "error");
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box sx={styles.section}>
      <Box>
        <Typography variant="h5" fontWeight="bold">
          Sign In
        </Typography>
        <Typography sx={{ color: "#6b7280", mt: 0.5 }}>
          Enter your credentials to access your account
        </Typography>
      </Box>

      <TextField
        label="Email"
        name="email"
        placeholder="example@email.com"
        fullWidth
        variant="outlined"
        onChange={onChangeForm}
        sx={styles.textField}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        fullWidth
        onChange={onChangeForm}
        variant="outlined"
        sx={styles.textField}
      />
      <Button
        loading={loading}
        disabled={loading}
        variant="contained"
        onClick={submitForm}
        sx={styles.button}
      >
        Sign In
      </Button>

      <Typography sx={styles.footerText}>
        Don't have an account?{" "}
        <Box component="span" sx={styles.link}>
          Sign up
        </Box>
      </Typography>
    </Box>
  );
};

export default AuthSection;
