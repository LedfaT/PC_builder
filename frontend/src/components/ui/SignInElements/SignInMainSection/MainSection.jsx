import { useState } from "react";
import { styles } from "./MainSection.styles";
import { Button } from "@mui/material";
import AuthSection from "../AuthSection/AuthSection";
import RegSection from "../RegSection/RegSection";
import MemoryIcon from "@mui/icons-material/Memory";

const MainSection = () => {
  const [activeForm, setActiveForm] = useState("signin");

  return (
    <section className={styles.section}>
      <div>
        <div className={styles.logo}>
          <MemoryIcon fontSize="large" />
          <span>PCBuilder</span>
        </div>
        <h2 className={styles.welcome}>Welcome back</h2>
        <div className={styles.subtext}>Sign in to access your account</div>
      </div>

      <div className={styles.buttons}>
        <Button
          variant="text"
          onClick={() => setActiveForm("signin")}
          sx={{
            ...styles.switchButtons,
            ...(activeForm === "signin" && styles.activeButton),
          }}
        >
          Sign In
        </Button>
        <Button
          variant="text"
          onClick={() => setActiveForm("signup")}
          sx={{
            ...styles.switchButtons,
            ...(activeForm === "signup" && styles.activeButton),
          }}
        >
          Sign Up
        </Button>
      </div>

      {activeForm === "signin" && <AuthSection />}
      {activeForm === "signup" && <RegSection setActiveForm={setActiveForm} />}
    </section>
  );
};

export default MainSection;
