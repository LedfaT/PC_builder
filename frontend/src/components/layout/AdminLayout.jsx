import { Outlet, Link, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  AppBar,
  Typography,
  CssBaseline,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MemoryIcon from "@mui/icons-material/Memory";
import StorageIcon from "@mui/icons-material/Storage";
import PowerIcon from "@mui/icons-material/Power";
import WifiIcon from "@mui/icons-material/Wifi";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import LanIcon from "@mui/icons-material/Lan";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const drawerWidth = 240;

const routes = [
  { text: "Dashboard", to: "/admin", icon: <DashboardIcon /> },
  { text: "CPU", to: "/admin/cpus", icon: <MemoryIcon /> },
  { text: "GPU", to: "/admin/gpus", icon: <LanIcon /> },
  { text: "Motherboard", to: "/admin/motherboads", icon: <StorageIcon /> },
  { text: "Water cooling", to: "/admin/water-coolings", icon: <StorageIcon /> },
  { text: "Fan cooling", to: "/admin/fan-coolnigs", icon: <StorageIcon /> },
  { text: "RAM", to: "/admin/rams", icon: <MemoryIcon /> },
  { text: "SSD", to: "/admin/ssds", icon: <StorageIcon /> },
  { text: "HDD", to: "/admin/hdds", icon: <StorageIcon /> },
  { text: "Wifi module", to: "/admin/wifi-modules", icon: <WifiIcon /> },
  {
    text: "Bluetooth module",
    to: "/admin/Bluetooth-modules",
    icon: <BluetoothIcon />,
  },
  { text: "Power supply", to: "/admin/power-supplies", icon: <PowerIcon /> },
  { text: "Tower", to: "/admin/tower", icon: <StorageIcon /> },
];

export default function AdminLayout() {
  const location = useLocation();
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (t) => t.zIndex.drawer + 1, backgroundColor: "#1e1e2f" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setOpen(!open)}
            sx={{ mr: 2 }}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>

      <ToastContainer
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        draggable
        pauseOnHover
      />

      {open && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#121212",
              color: "#ffffff",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {routes.map(({ text, to, icon }) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={to}
                    selected={location.pathname === to}
                    sx={{
                      color: "inherit",
                      "&.Mui-selected": {
                        backgroundColor: "#333",
                        "&:hover": { backgroundColor: "#444" },
                      },
                      "&:hover": { backgroundColor: "#222" },
                    }}
                  >
                    {icon}
                    <ListItemText primary={text} sx={{ ml: 2 }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#f9f9f9",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
