// src/components/layout/SaveBuildDialog/SaveBuildDialog.js
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  FormControlLabel,
  Checkbox,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import notify from "@/components/notify";

import computerService from "@/services/computerService";

const SaveBuildDialog = ({ open, onClose, build, totalPrice }) => {
  const computerTypes = [
    "Gaming",
    "Content Creation",
    "Office",
    "Streaming",
    "3D modeling",
    "Designer",
  ];

  const [form, setForm] = useState({ isPublished: true, type: "" });
  const onChangeForm = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const parseBuild = function () {
    const result = {
      cpu: { connect: { id: build.CPU.id } },
      gpu: { connect: { id: build.GPU.id } },
      ram: { connect: { id: build.RAM.id } },
      motherboard: { connect: { id: build.Motherboard.id } },
      powersupply: { connect: { id: build["Power Supply"].id } },
      tower: { connect: { id: build.Case.id } },
      wifiModule: { connect: { id: build.Wifi.id } },
    };

    if (build.SSD) result.ssd = { connect: { id: build.SSD.id } };
    if (build.HDD) result.hdd = { connect: { id: build.HDD.id } };
    if (build.WCS)
      result.waterCoolingSystem = { connect: { id: build.WCS.id } };
    if (build.FCS) result.coolingSystem = { connect: { id: build.FCS.id } };
    if (build.Bluetooth)
      result.bluetoothModule = { connect: { id: build.Bluetooth.id } };

    return result;
  };

  const handleSave = async () => {
    try {
      const fullForm = { ...form, ...parseBuild(), cost: totalPrice };
      const res = await computerService.createComputer(fullForm);
      if (res.status === 200) {
        notify("Build was saved successfully");
      }
    } catch (e) {
      notify("Error creating build", "error");
      console.log(e);
    } finally {
      onClose();
    }
  };

  const componentsList = Object.entries(build).filter(([_, comp]) => {
    return comp;
  });

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Save Your Build</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          name="title"
          type="text"
          fullWidth
          variant="outlined"
          value={form.title}
          onChange={onChangeForm}
        />

        <TextField
          autoFocus
          margin="dense"
          label="Build description"
          name="description"
          type="text"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          value={form.description}
          onChange={onChangeForm}
        />

        <InputLabel id="computerType">Type</InputLabel>
        <Select
          labelId="computerType"
          id="computerType"
          value={form.type}
          fullWidth
          label="Type"
          name="type"
          onChange={onChangeForm}
        >
          {computerTypes.map((type) => {
            return (
              <MenuItem value={type} key={type}>
                {type}
              </MenuItem>
            );
          })}
        </Select>

        <TextField
          autoFocus
          margin="dense"
          label="Image link"
          name="image"
          type="text"
          fullWidth
          variant="outlined"
          value={form.image}
          onChange={onChangeForm}
        />
        <Typography variant="subtitle1" className="mt-4">
          Components:
        </Typography>
        <List dense>
          {componentsList.map(([category, component]) => (
            <ListItem key={category}>
              <ListItemText
                primary={`${category}: ${component.title}`}
                secondary={`$${component.cost?.toFixed(2)}`}
              />
            </ListItem>
          ))}
        </List>
        <Typography variant="subtitle1" className="mt-2">
          Total Price: <strong>${totalPrice.toFixed(2)}</strong>
        </Typography>
      </DialogContent>
      <DialogActions>
        <FormControlLabel
          control={
            <Checkbox
              name="isPublished"
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.checked,
                }))
              }
              defaultChecked
            />
          }
          label="Do you want to Public Export?"
        />
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSave}>
          Accept
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SaveBuildDialog;
