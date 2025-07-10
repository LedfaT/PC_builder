import { useState, useEffect } from "react";
import { styles } from "./SavedBuildsSection.styles";
import { Link } from "react-router-dom";
import computerService from "@services/computerService";

const SavedBuildsSection = () => {
  const [builds, setBuilds] = useState([]);
  const [block, setBlock] = useState(true);

  const transformBuildData = (computerData) => {
    // Собираем компоненты
    const components = [];

    if (computerData.bluetooth_module) {
      components.push({
        type: "BluetoothModule",
        name: computerData.bluetooth_module.title,
        price: `$${computerData.bluetooth_module.cost.toFixed(2)}`,
      });
    }

    if (computerData.cooling_system) {
      components.push({
        type: "Cooling System",
        name: computerData.cooling_system.title,
        price: `$${computerData.cooling_system.cost.toFixed(2)}`,
      });
    }

    if (computerData.cpu) {
      components.push({
        type: "CPU",
        name: computerData.cpu.title,
        price: `$${computerData.cpu.cost.toFixed(2)}`,
      });
    }

    if (computerData.gpu) {
      components.push({
        type: "GPU",
        name: computerData.gpu.title,
        price: `$${computerData.gpu.cost.toFixed(2)}`,
      });
    }

    if (computerData.wifi_module) {
      components.push({
        type: "Wifi",
        name: computerData.wifi_module.title,
        price: `$${computerData.wifi_module.cost.toFixed(2)}`,
      });
    }

    if (computerData.ram) {
      components.push({
        type: "RAM",
        name: computerData.ram.title,
        price: `$${computerData.ram.cost.toFixed(2)}`,
      });
    }

    if (computerData.power_supply) {
      components.push({
        type: "Power Supply",
        name: computerData.power_supply.title,
        price: `$${computerData.power_supply.cost.toFixed(2)}`,
      });
    }

    if (computerData.ssd) {
      components.push({
        type: "SSD",
        name: computerData.ssd.title,
        price: `$${computerData.ssd.cost.toFixed(2)}`,
      });
    }

    if (computerData.tower) {
      components.push({
        type: "Tower",
        name: computerData.tower.title,
        price: `$${computerData.tower.cost.toFixed(2)}`,
      });
    }

    if (computerData.water_cooling_system) {
      components.push({
        type: "Water cooling system",
        name: computerData.water_cooling_system.title,
        price: `$${computerData.water_cooling_system.cost.toFixed(2)}`,
      });
    }

    if (computerData.motherboard) {
      components.push({
        type: "Motherboard",
        name: computerData.motherboard.title,
        price: `$${computerData.motherboard.cost.toFixed(2)}`,
      });
    }

    return {
      title: computerData.title || "Unnamed Build",
      cost: `$${computerData.cost.toFixed(2)}`,
      createdAt: computerData.createdAt,
      components,
      summary: {
        totalPrice: `$${computerData.cost.toFixed(2)}`,
        componentsCount: components.length,
        created: computerData.createdAt.split("T")[0],
        type: computerData.type || "Custom",
      },
    };
  };

  const fetchUserBuilds = async function () {
    try {
      const res = await computerService.getAllUserComputers();

      if (res.status === 200) {
        const transformed = res.data.data.map(transformBuildData);

        setBuilds(transformed);
      }
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  useEffect(() => {
    if (!block) return;

    fetchUserBuilds();

    setBlock(false);
  }, []);

  const [selectedBuild, setSelectedBuild] = useState(null);

  return (
    <div className={styles.section}>
      {/* LEFT PANEL */}
      <div className={styles.leftPanel}>
        <div className={styles.header}>
          <h1 className={styles.title}>Your Builds</h1>
          <div className={styles.subtitle}>
            {builds.length} builds saved to your profile
          </div>
        </div>

        <div className={styles.buildsList}>
          {builds.map((build, index) => (
            <div
              key={index}
              className={`${styles.buildItem} ${
                selectedBuild?.id === build.id ? styles.buildItemSelected : ""
              }`}
              onClick={() => setSelectedBuild(build)}
            >
              <div className={styles.buildInfo}>
                <div className={styles.buildName}>{build.title}</div>
                <div className={styles.buildMeta}>
                  {build.cost} • {build.createdAt}
                </div>
              </div>
              <div className="text-gray-400">⋮</div>
            </div>
          ))}
        </div>

        <div className={styles.createButtonWrapper}>
          <Link to="/configurator">
            <button className={styles.createButton}>
              <span>＋</span> Create New Build
            </button>
          </Link>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className={styles.rightPanel}>
        {selectedBuild ? (
          <>
            <h2 className={styles.buildTitle}>{selectedBuild.title}</h2>

            <div className={styles.summary}>
              <p>
                <strong>Total Price:</strong> {selectedBuild.summary.totalPrice}
              </p>
              <p>
                <strong>Components:</strong>{" "}
                {selectedBuild.summary.componentsCount}
              </p>
              <p>
                <strong>Created:</strong> {selectedBuild.summary.created}
              </p>
              <p>
                <strong>Type:</strong> {selectedBuild.summary.type}
              </p>
            </div>

            <div className={styles.componentList}>
              {selectedBuild.components.map((component, i) => (
                <div key={i} className={styles.componentItem}>
                  <span>{component.type}</span>
                  <span>{component.name}</span>
                  <span>{component.price}</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-gray-400 text-center mt-32">
            Select a build to see details
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedBuildsSection;
