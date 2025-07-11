import React, { useState, useEffect } from "react";
import { configuratorPageStyles } from "./Configurator.styles";
import ConfiguratorFirstSection from "../../components/ui/ConfiguratorElements/ConfiguratorFirstSection/FirstSection";
import ConfiguratorSecondSection from "../../components/ui/ConfiguratorElements/ConfiguratorSecondSection/SecondSection";
import ConfiguratorThirdSection from "../../components/ui/ConfiguratorElements/ConfiguratorThirdSection/ThirdSection";
import ConfiguratorFourthSection from "../../components/ui/ConfiguratorElements/ConfiguratorFourthSection/FourthSection";
import ConfirmationDialog from "../../components/ui/ConfiguratorElements/ConfirmationDialog/ConfirmationDialog";
import cpuService from "@services/cpuService";
import motherboardService from "@services/motherboardService";
import gpuService from "@services/gpuService";
import ramService from "@services/ramService";
import ssdService from "@services/ssdService";
import hddService from "@services/hddService";
import towerService from "@services/towerService";
import powerSupplyService from "@services/powerSupplyService";
import coolingSystem from "@services/coolingSystem";
import waterCoolingSystemService from "@services/waterCoolingSystemService";
import bluetoothModuleService from "@services/bluetoothModuleService";
import wifiModule from "@services/wifiModule";
import { ToastContainer } from "react-toastify";
import notify from "@/components/notify";

const Configurator = () => {
  const [activeCategory, setActiveCategory] = useState("CPU");
  const [build, setBuild] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pendingPart, setPendingPart] = useState(null);
  const [pendingCategory, setPendingCategory] = useState(null);

  const [fetchedComponents, setFetchedComponents] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [block, setBlock] = useState(false);

  useEffect(() => {
    setPage(1);
    setSearch("");
    fetchComponents(activeCategory);
    setBlock(true);
  }, [activeCategory]);

  useEffect(() => {
    if (!block) return;
    fetchComponents(activeCategory);
  }, [page]);

  useEffect(() => {
    if (!block) return;

    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      setPage(1);
      fetchComponents(activeCategory);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [search]);

  const fetchComponents = async function (component) {
    setIsLoading(true);
    try {
      let res;
      switch (component) {
        case "CPU":
          res = await cpuService.getAllCpus(page, limit, search);
          break;
        case "Motherboard":
          res = await motherboardService.getAllMotherboards(
            page,
            limit,
            search
          );
          break;
        case "GPU":
          res = await gpuService.getAllGpus(page, limit, search);
          break;
        case "RAM":
          res = await ramService.getAllRams(page, limit, search);
          break;
        case "SSD":
          res = await ssdService.getAllSsds(page, limit, search);
          break;
        case "HDD":
          res = await hddService.getAllHdds(page, limit, search);
          break;
        case "Case":
          res = await towerService.getAllTowers(page, limit, search);
          break;
        case "Power Supply":
          res = await powerSupplyService.getAllSupplies(page, limit, search);
          break;
        case "FCS":
          res = await coolingSystem.getAllCollingSystems(page, limit, search);
          break;
        case "WCS":
          res = await waterCoolingSystemService.getAllSystems(
            page,
            limit,
            search
          );
          break;

        case "Bluetooth":
          res = await bluetoothModuleService.getAllBluetoothModules(
            page,
            limit,
            search
          );
          break;

        case "Wifi":
          res = await wifiModule.getAllWifiModules(page, limit, search);
          break;
      }
      if (res.status === 200) {
        setFetchedComponents(res.data.data);
        setTotalPages(res.data.meta.totalPages);
      }
    } catch (e) {
      notify("Error collecting components", "error");
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToBuild = (component, category) => {
    if (build[category]) {
      console.log(build);
      setPendingPart(component);
      setPendingCategory(category);
      setDialogOpen(true);
    } else {
      setBuild((prev) => ({
        ...prev,
        [category]: component,
      }));
    }
  };

  const handleConfirmReplace = () => {
    setBuild((prev) => ({
      ...prev,
      [pendingCategory]: pendingPart,
    }));
    setDialogOpen(false);
  };

  const calculateTotalPrice = () => {
    return Object.values(build).reduce(
      (total, component) => total + component.cost,
      0
    );
  };

  const selectedCount = Object.keys(build).length;

  return (
    <div className={configuratorPageStyles.configuratorPage}>
      <ToastContainer
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        draggable
        pauseOnHover
      />
      <ConfiguratorFirstSection />
      <div className={configuratorPageStyles.mainGrid}>
        <div className={configuratorPageStyles.leftColumn}>
          <ConfiguratorSecondSection
            page={page}
            totalPages={totalPages}
            setPage={setPage}
            setSearch={setSearch}
            setActiveCategory={setActiveCategory}
          />
          <ConfiguratorFourthSection
            activeCategory={activeCategory}
            onAddToBuild={handleAddToBuild}
            components={fetchedComponents}
          />
        </div>
        <div className={configuratorPageStyles.rightColumn}>
          <ConfiguratorThirdSection
            build={build}
            totalPrice={calculateTotalPrice()}
            selectedCount={selectedCount}
          />
        </div>
      </div>
      <ConfirmationDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onConfirm={handleConfirmReplace}
        currentPart={build[pendingCategory]}
        newPart={pendingPart}
      />
    </div>
  );
};

export default Configurator;
