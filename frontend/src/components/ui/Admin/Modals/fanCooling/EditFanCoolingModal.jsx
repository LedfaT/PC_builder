// components/ui/Admin/Modals/SSD/AddSsdModal.jsx

import { useState, useEffect } from "react";
import {
  TextField,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

import ModalWrapper from "@/components/ui/ModalWrapper";

export default function EditFanCoolingModal({
  open,
  onClose,
  onSubmit,
  isLoading,
  data,
}) {
  if (!data) return;

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
    type_size: "",
    heat_removal: "",
    cost: "",
  });

  useEffect(() => {
    setFormData({
      id: data.id || "",
      title: data.title || "",
      description: data.description || "",
      image: data.image || "",
      type_size: data.type_size || "",
      heat_removal: data.heat_removal || "",
      cost: data.cost || "",
    });
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <ModalWrapper
      open={open}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      title="Add SSD"
      submitText="Save"
    >
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="flex flex-col gap-2"
      >
        {["title", "description", "image", "heat_removal", "cost"].map(
          (key) => (
            <TextField
              key={key}
              label={key[0].toUpperCase() + key.slice(1)}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              type={
                ["memory_quantity", "write_speed", "cost"].includes(key)
                  ? "number"
                  : "text"
              }
            />
          )
        )}

        <FormControl fullWidth>
          <InputLabel id="type-size-label">Radiator Type</InputLabel>
          <Select
            labelId="type-size-label"
            name="type_size"
            value={formData.type_size}
            onChange={handleChange}
            label="Type size"
          >
            <MenuItem value="mm280">280mm</MenuItem>
            <MenuItem value="mm360">360mm</MenuItem>
            <MenuItem value="mm240">240mm</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </ModalWrapper>
  );
}
