import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "@/contextProvider";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { headerStyles } from "./Header.styles";
import HomeIcon from "@mui/icons-material/Home";
import MemoryIcon from "@mui/icons-material/Memory";
import ComputerIcon from "@mui/icons-material/Computer";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";

const Header = () => {
  const { store } = useContext(Context);
  const auth = store.getData()?.isAuth;
  const navigate = useNavigate();

  const handleLogout = async function () {
    try {
      const res = await store.logout();
      navigate("/");
    } catch (e) {}
  };

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.container}>
        <div className={headerStyles.logoContainer}>
          <Link to="/" className={headerStyles.btnMainPage}>
            <MemoryIcon sx={{ fontSize: 30 }} />
            <span className={headerStyles.logoText}>PCBuilder</span>
          </Link>
        </div>

        <nav className={headerStyles.nav}>
          <Link to="/" className={headerStyles.navLink}>
            <HomeIcon sx={{ fontSize: 20 }} />
            Home
          </Link>
          <Link to="/components" className={headerStyles.navLink}>
            <MemoryIcon sx={{ fontSize: 20 }} />
            Components
          </Link>
          <Link to="/builds" className={headerStyles.navLink}>
            <ComputerIcon sx={{ fontSize: 20 }} />
            Builds
          </Link>
          <Link to="/configurator" className={headerStyles.navLink}>
            <SettingsIcon sx={{ fontSize: 20 }} />
            Configurator
          </Link>
          <Link
            to={auth ? "/profile" : "/signin"}
            className={headerStyles.navLink}
          >
            <AccountCircleIcon sx={{ fontSize: 20 }} />
            Profile
          </Link>
        </nav>

        <div className="hidden md:block">
          {auth ? (
            <Button
              variant="contained"
              sx={{ backgroundColor: "black" }}
              className={headerStyles.authButton}
              onClick={handleLogout}
            >
              <AccountCircleIcon sx={{ fontSize: 20 }} className="mr-1" />
              logout
            </Button>
          ) : (
            <Link to="/signin" className={headerStyles.authButton}>
              <AccountCircleIcon sx={{ fontSize: 20 }} className="mr-1" />
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
