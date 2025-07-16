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

export default function AddCpuModal({ open, onClose, onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    cores: "",
    threads: "",
    Architecture: "",
    socket: "",
    cache: "",
    clock: "",
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
      title="Add CPU"
      submitText="Save"
    >
      <Box component="form" className="flex flex-col gap-2">
        {[
          "title",
          "description",
          "image",
          "cores",
          "threads",
          "Architecture",
          "cache",
          "clock",
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
            type={
              ["cores", "threads", "cost"].includes(key) ? "number" : "text"
            }
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
      </Box>
    </ModalWrapper>
  );
}
