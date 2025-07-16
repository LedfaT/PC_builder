// components/ui/Admin/Modals/SSD/AddSsdModal.jsx

import { useState, useEffect } from "react";
import { TextField, Box } from "@mui/material";

import ModalWrapper from "@/components/ui/ModalWrapper";

export default function EditHDDModal({
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
    memory_quantity: "",
    reading_speed: "",
    write_speed: "",
    cost: "",
  });

  useEffect(() => {
    setFormData({
      id: data.id || "",
      title: data.title || "",
      description: data.description || "",
      image: data.image || "",
      memory_quantity: data.memory_quantity || "",
      reading_speed: data.reading_speed || "",
      write_speed: data.write_speed || "",
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
      title="Edit HDD"
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
      </Box>
    </ModalWrapper>
  );
}
