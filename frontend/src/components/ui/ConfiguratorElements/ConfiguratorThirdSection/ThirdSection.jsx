import { useState } from "react";
import { styles } from "./ThirdSection.styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import SaveBuildDialog from "../SaveBuildDialog/SaveBuildDialog";
import buildsData from "../../../../data/buildsData";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import notify from "@/components/notify";

const partsOrder = [
  "CPU",
  "Motherboard",
  "GPU",
  "RAM",
  "SSD",
  "HDD",
  "Case",
  "Power Supply",
  "FCS",
  "WCS",
  "Bluetooth",
  "Wifi",
];

const ConfiguratorThirdSection = ({ build, totalPrice, selectedCount }) => {
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  const handleSaveClick = () => {
    if (selectedCount === partsOrder.length) {
      setSaveDialogOpen(true);
    } else {
      notify("Add at least 8 components", "warning");
    }
  };

  const handleSaveBuild = (buildName) => {
    console.log(buildName);
    const buildData = {
      name: buildName,
      components: build,
      totalPrice,
    };
    buildsData.push(buildData);
    setSaveDialogOpen(false);
    setSuccessDialogOpen(true);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Build</h2>
      <p className={styles.subtitle}>
        Select components from each category to complete your build
      </p>

      <div className={styles.partsList}>
        {partsOrder.map((part, idx) => (
          <div key={idx} className={styles.partItem}>
            <div className="text-sm font-medium">{part}</div>
            <div className="text-xs text-gray-500">
              {build[part]
                ? build[part].title
                : `Select a ${part.toLowerCase()}`}
            </div>
            {build[part] && (
              <div className="text-xs text-green-600">
                ${build[part].cost.toFixed(2)}
              </div>
            )}
            <ArrowForwardIosIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <div className="flex justify-between text-sm">
          <span>Total Price:</span>
          <span className="font-bold">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          {selectedCount} of {partsOrder.length} components selected{" "}
          <span
            className={`ml-1 px-2 rounded-full ${
              selectedCount === partsOrder.length
                ? "bg-green-200 text-green-800"
                : "bg-gray-200"
            }`}
          >
            {selectedCount === partsOrder.length ? "Complete" : "Incomplete"}
          </span>
        </div>

        <Button fullWidth sx={styles.saveButton} onClick={handleSaveClick}>
          💾 Save Build
        </Button>

        <Button fullWidth sx={styles.exportButton}>
          Export Parts List
        </Button>
      </div>

      {/* Save Dialog */}
      <SaveBuildDialog
        open={saveDialogOpen}
        onClose={() => setSaveDialogOpen(false)}
        onSave={handleSaveBuild}
        build={build}
        totalPrice={totalPrice}
      />

      {/* Success Message Dialog */}
      <Dialog
        open={successDialogOpen}
        onClose={() => setSuccessDialogOpen(false)}
      >
        <DialogTitle>Success</DialogTitle>
        <DialogContent>Your build has been successfully saved!</DialogContent>
        <DialogActions>
          <Button onClick={() => setSuccessDialogOpen(false)}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfiguratorThirdSection;
