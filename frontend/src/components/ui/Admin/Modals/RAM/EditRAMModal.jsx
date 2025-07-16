import { useEffect, useState } from "react";
import {
  TextField,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import ModalWrapper from "@/components/ui/ModalWrapper";
export default function EditRAMModal({
  open,
  onClose,
  isLoading,
  onSubmit,
  data = null,
}) {
  if (!data) {
    return null;
  }
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
    memory_type: "",
    memory_quantity: "",
    radiator_type: "",
    cost: "",
  });

  useEffect(() => {
    setFormData({
      id: data.id || "",
      title: data.title || "",
      description: data.description || "",
      image: data.image || "",
      memory_quantity: data.memory_quantity || "",
      radiator_type: data.radiator_type || "",
      memory_type: data.memory_type || "",
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
      title="Edit RAM"
      submitText="Save"
    >
      <Box component="form" className="flex flex-col gap-2">
        {["title", "description", "image", "memory_quantity", "cost"].map(
          (key) => (
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
          )
        )}

        <FormControl fullWidth>
          <InputLabel id="radiator-type-label">Radiator type</InputLabel>
          <Select
            labelId="radiator-type-label"
            name="radiator_type"
            value={formData.radiator_type}
            onChange={handleChange}
            label="Radiator type"
          >
            <MenuItem value="Water">Water</MenuItem>
            <MenuItem value="Fan">Fan</MenuItem>
            <MenuItem value="Aluminium">Aluminium</MenuItem>
            <MenuItem value={null}>None</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="mem-type-label">Memory type</InputLabel>
          <Select
            labelId="mem-type-label"
            name="memory_type"
            value={formData.memory_type}
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
