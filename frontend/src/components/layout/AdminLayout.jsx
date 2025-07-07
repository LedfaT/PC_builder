import { Outlet, Link, Navigate } from "react-router-dom";
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
];

export default function AdminLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {routes.map(({ text, to }) => (
              <ListItem key={text} disablePadding>
                <ListItemButton component={Link} to={to}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
