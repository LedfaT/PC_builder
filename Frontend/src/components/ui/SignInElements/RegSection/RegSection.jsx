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
      await store.registration(form);
      navigate("/profile");
    } catch (e) {
      notify("Invalid creditals", "error");
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
        onChange={onChangeForm}
      />

      <TextField
        label="Email"
        placeholder="example@email.com"
        fullWidth
        variant="outlined"
        name="email"
        onChange={onChangeForm}
        sx={styles.textField}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        variant="outlined"
        name="password"
        onChange={onChangeForm}
        sx={styles.textField}
      />
      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        variant="outlined"
        sx={styles.textField}
      />

      <Button
        loading={loading}
        disabled={loading}
        onClick={submitForm}
        variant="contained"
        sx={styles.button}
      >
        Create Account
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
