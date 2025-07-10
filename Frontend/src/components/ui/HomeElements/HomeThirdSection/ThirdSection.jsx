import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightAlt } from "@mui/icons-material";
import { thirdSectionStyles } from "./ThirdSection.styles";
import Button from "@mui/material/Button";

const HomeThirdSection = () => {
  return (
    <section className={thirdSectionStyles.section}>
      <div className={thirdSectionStyles.container}>
        <h2 className={thirdSectionStyles.heading}>
          Ready to Build Your Dream PC?
        </h2>

        <p className={thirdSectionStyles.description}>
          Join thousands of PC enthusiasts who are creating their perfect
          builds. Start your journey today.
        </p>

        <div className={thirdSectionStyles.buttonsContainer}>
          <Link to={"/configurator"}>
            {" "}
            <Button
              variant="contained"
              size="medium"
              endIcon={<ArrowRightAlt />}
              sx={thirdSectionStyles.primaryButton}
            >
              Start Building
            </Button>
          </Link>
          <Link to={"/profile"}>
            <Button
              variant="outlined"
              size="medium"
              sx={thirdSectionStyles.secondaryButton}
            >
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeThirdSection;
