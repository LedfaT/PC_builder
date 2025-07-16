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

export default function AddMotherboardModal({
  open,
  onClose,
  onSubmit,
  isLoading,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    chipset: "",
    supported_memory_type: "",
    socket: "",
    type_size: "",
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
      title="Add motherboard"
      submitText="Save"
    >
      <Box component="form" className="flex flex-col gap-2">
        {["title", "description", "image", "chipset", "cost"].map((key) => (
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
          <InputLabel id="radiator-type-label">Socket</InputLabel>
          <Select
            labelId="radiator-type-label"
            name="socket"
            value={formData.socket}
            onChange={handleChange}
            label="Socket"
          >
            <MenuItem value="AM4">AM4</MenuItem>
            <MenuItem value="LGA1200">LGA1200</MenuItem>
            <MenuItem value="LGA1700">LGA1700</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="type-size-type-label">Type size</InputLabel>
          <Select
            labelId="type-size-type-label"
            name="type_size"
            value={formData.type_size}
            onChange={handleChange}
            label="Type size"
          >
            <MenuItem value="ATX">ATX</MenuItem>
            <MenuItem value="MicroATX">MicroATX</MenuItem>
            <MenuItem value="MiniITX">MiniITX</MenuItem>
            <MenuItem value="None">None</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="mem-type-label">Supported Memory Type</InputLabel>
          <Select
            labelId="mem-type-label"
            name="supported_memory_type"
            value={formData.supported_memory_type}
            onChange={handleChange}
            label="Supported Memory Type"
          >
            <MenuItem value="DDR3">DDR3</MenuItem>
            <MenuItem value="DDR4">DDR4</MenuItem>
            <MenuItem value="DDR5">DDR5</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </ModalWrapper>
  );
}
