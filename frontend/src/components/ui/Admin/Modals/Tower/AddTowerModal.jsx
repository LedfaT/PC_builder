// components/ui/Admin/Modals/SSD/AddSsdModal.jsx

import { useState } from "react";
import {
  TextField,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

import ModalWrapper from "@/components/ui/ModalWrapper";

export default function AddTowerModal({ open, onClose, onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
    type_size: "",
    fan_type: "",
    cost: "",
  });

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
      title="Add tower"
      submitText="Save"
    >
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="flex flex-col gap-2"
      >
        {["title", "description", "image", "cost"].map((key) => (
          <TextField
            key={key}
            label={key[0].toUpperCase() + key.slice(1)}
            name={key}
            value={formData[key]}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            type={["cost"].includes(key) ? "number" : "text"}
          />
        ))}

        <FormControl fullWidth>
          <InputLabel id="size-label">Tower size</InputLabel>
          <Select
            labelId="size-label"
            name="type_size"
            value={formData.type_size}
            onChange={handleChange}
            label="type_size"
          >
            <MenuItem value="Full_Tower">Full tower</MenuItem>
            <MenuItem value="Mid_Tower">Mid tower</MenuItem>
            <MenuItem value="Mini_Tower">Mini tower</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="fan-type-label">Fan type</InputLabel>
          <Select
            labelId="fan-type-label"
            name="fan_type"
            value={formData.fan_type}
            onChange={handleChange}
            label="fan_type"
          >
            <MenuItem value="mm120">120mm</MenuItem>
            <MenuItem value="mm200">200mm</MenuItem>
            <MenuItem value="mm92">92mm</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </ModalWrapper>
  );
}
