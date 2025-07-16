import { useEffect, useState } from "react";
import { TextField, Box } from "@mui/material";
import ModalWrapper from "@/components/ui/ModalWrapper";

export default function EditGpuModal({
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
    cores: "",
    threads: "",
    vram_quantity: "",
    vram_type: "",
    cache: "",
    clock: "",
    cost: "",
  });

  useEffect(() => {
    setFormData({
      id: data.id || "",
      title: data.title || "",
      description: data.description || "",
      image: data.image || "",
      cores: data.cores || "",
      threads: data.threads || "",
      vram_quantity: data.vram_quantity || "",
      vram_type: data.vram_type || "",
      cache: data.cache || "",
      clock: data.clock || "",
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
      title="Edit GPU"
      submitText="Save"
    >
      <Box component="form" className="flex flex-col gap-2">
        {[
          "title",
          "description",
          "cores",
          "image",
          "threads",
          "vram_quantity",
          "cache",
          "clock",
          "vram_type",
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
      </Box>
    </ModalWrapper>
  );
}
