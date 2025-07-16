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

export default function AddSsdModal({ open, onClose, onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
    memory_quantity: "",
    radiator_type: "",
    reading_speed: "",
    write_speed: "",
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
      title="Add SSD"
      submitText="Save"
    >
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="flex flex-col gap-2"
      >
        {[
          "title",
          "description",
          "image",
          "memory_quantity",
          "reading_speed",
          "write_speed",
          "cost",
        ].map((key) => (
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
          <InputLabel id="radiator-type-label">Radiator Type</InputLabel>
          <Select
            labelId="radiator-type-label"
            name="radiator_type"
            value={formData.radiator_type}
            onChange={handleChange}
            label="Radiator Type"
          >
            <MenuItem value="Aluminium">Aluminium</MenuItem>
            <MenuItem value="Fan">Fan</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </ModalWrapper>
  );
}
