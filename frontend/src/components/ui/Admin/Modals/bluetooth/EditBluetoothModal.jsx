import { useState, useEffect } from "react";
import { TextField, Box } from "@mui/material";
import ModalWrapper from "@/components/ui/ModalWrapper";

export default function EditBluetoothModal({
  open,
  onClose,
  onSubmit,
  isLoading,
  data = null,
}) {
  if (!data) {
    return null;
  }
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    generation: "",
    cost: "",
  });

  useEffect(() => {
    setFormData({
      id: data.id || "",
      title: data.title || "",
      description: data.description || "",
      image: data.image || "",
      generation: data.generation || "",
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
      title="Edit bluetooth"
      submitText="Save"
    >
      <Box component="form" className="flex flex-col gap-2">
        {["title", "description", "image", "generation", "cost"].map((key) => (
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
      </Box>
    </ModalWrapper>
  );
}
