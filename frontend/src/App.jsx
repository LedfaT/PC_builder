import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./test.scss";
import Home from "./pages/Home/Home.jsx";
import Components from "./pages/Components/Components.jsx";
import Builds from "./pages/Builds/Builds.jsx";
import Configurator from "./pages/Configurator/Configurator.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import MainLayout from "./components/layout/MainLyaout.jsx";
import AdminLayout from "./components/layout/AdminLayout.jsx";
import NotFound from "./pages/Exceptions/NotFound.jsx";
import Forbidden from "./pages/Exceptions/Forbidden.jsx";
import ProtectedRoute from "./components/routes/ProtectedRoute.jsx";
import CPUPage from "./pages/Admin/Cpu/Cpu.jsx";
import GPUPage from "./pages/Admin/Gpu/Gpu.jsx";
import MotherboardPage from "./pages/Admin/Motherboard/Motherboard.jsx";
import WaterCoolingPage from "./pages/Admin/WaterCoolings/WaterCoolings.jsx";
import FanCoolingPage from "./pages/Admin/FanCooling/FanCooling.jsx";
import RAMPage from "./pages/Admin/Ram/Ram.jsx";
import SSDPage from "./pages/Admin/Ssd/Ssd.jsx";
import HDDPage from "./pages/Admin/Hdd/hdd.jsx";
import WifiModulePage from "./pages/Admin/WifiModule/WifiModule.jsx";
import BluetoothModulePage from "./pages/Admin/BluetoothModule/BluetoothModule.jsx";
import PowerSupplyPage from "./pages/Admin/PowerSupply/PowerSupply.jsx";
import TowerPage from "./pages/Admin/Tower/Tower.jsx";
import DashboardPage from "./pages/Admin/Dashboard/DashboardPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="components" element={<Components />} />
          <Route path="builds" element={<Builds />} />
          <Route path="configurator" element={<Configurator />} />
          <Route path="profile" element={<Profile />} />
          <Route path="signin" element={<SignIn />} />
        </Route>

        <Route
          path="/admin/"
          element={
            <ProtectedRoute redirectTo="/forbidden">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="cpus" element={<CPUPage />} />
          <Route path="gpus" element={<GPUPage />} />
          <Route path="motherboads" element={<MotherboardPage />} />
          <Route path="water-coolings" element={<WaterCoolingPage />} />
          <Route path="fan-coolnigs" element={<FanCoolingPage />} />
          <Route path="rams" element={<RAMPage />} />
          <Route path="ssds" element={<SSDPage />} />
          <Route path="hdds" element={<HDDPage />} />
          <Route path="wifi-modules" element={<WifiModulePage />} />
          <Route path="Bluetooth-modules" element={<BluetoothModulePage />} />
          <Route path="power-supplies" element={<PowerSupplyPage />} />
          <Route path="tower" element={<TowerPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/forbidden" element={<Forbidden />} />
      </Routes>
    </Router>
  );
}

export default App;
