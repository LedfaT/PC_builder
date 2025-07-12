import { useEffect, useState } from "react";
import { TextField, Box } from "@mui/material";
import ModalWrapper from "@/components/ui/ModalWrapper";
export default function EditMotherboardModal({
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
    chipset: "",
    supported_memory_type: "",
    socket: "",
    type_size: "",
    cost: "",
  });

  useEffect(() => {
    setFormData({
      id: data.id || "",
      title: data.title || "",
      description: data.description || "",
      image: data.image || "",
      chipset: data.chipset || "",
      supported_memory_type: data.supported_memory_type || "",
      socket: data.socket || "",
      type_size: data.type_size || "",
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
      title="Add GPU"
      submitText="Save"
    >
      <Box component="form" className="flex flex-col gap-2">
        {[
          "title",
          "description",
          "image",
          "supported_memory_type",
          "type_size",
          "chipset",
          "socket",
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
