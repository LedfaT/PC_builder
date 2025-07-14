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
} from "@mui/material";

const drawerWidth = 240;

const routes = [
  { text: "Dashboard", to: "/admin" },
  { text: "CPU", to: "/admin/cpus" },
  { text: "GPU", to: "/admin/gpus" },
  { text: "Motherboard", to: "/admin/motherboads" },
  { text: "Water cooling", to: "/admin/water-coolings" },
  { text: "Fan cooling", to: "/admin/fan-coolnigs" },
  { text: "RAM", to: "/admin/rams" },
  { text: "SSD", to: "/admin/ssds" },
  { text: "HDD", to: "/admin/hdds" },
  { text: "Wifi module", to: "/admin/wifi-modules" },
  { text: "Bluetooth module", to: "/admin/Bluetooth-modules" },
  { text: "Power supply", to: "/admin/power-supplies" },
  { text: "Tower", to: "/admin/tower" },
];

export default function AdminLayout() {
  const location = useLocation();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Тёмная шапка */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#1e1e2f", // глубокий тёмный
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" color="white">
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

      {/* Тёмное меню */}
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
            {routes.map(({ text, to }) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={to}
                  selected={location.pathname === to}
                  sx={{
                    color: "inherit",
                    "&.Mui-selected": {
                      backgroundColor: "#333",
                      "&:hover": {
                        backgroundColor: "#444",
                      },
                    },
                    "&:hover": {
                      backgroundColor: "#222",
                    },
                  }}
                >
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{ sx: { color: "white" } }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Светлый основной контент */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#f9f9f9", // светлый фон
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
