// src/pages/admin/CPUPage.jsx

import React from "react";
import DataTable from "../../../components/ui/table";

export default function GPUPage() {
  const headers = [
    "id",
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
  ];

  const data = [
    {
      id: 1,
      title: "Intel Arc A750",
      description:
        "Видеокарта от Intel с хорошей производительностью для Full HD.",
      cores: "3584",
      image: "https://example.com/images/intel-arc-a750.jpg",
      threads: "—", // если не применимо — можно оставить прочерк
      vram_quantity: "8GB",
      cache: "16MB",
      clock: "2050 MHz",
      vram_type: "GDDR6",
      cost: 250.0,
    },
    {
      id: 2,
      title: "NVIDIA GeForce RTX 4060",
      description:
        "Мощная видеокарта NVIDIA нового поколения для игр и работы с ИИ.",
      cores: "3072",
      image: "https://example.com/images/rtx-4060.jpg",
      threads: "—",
      vram_quantity: "8GB",
      cache: "24MB",
      clock: "2460 MHz",
      vram_type: "GDDR6",
      cost: 330.0,
    },
  ];

  const handleEdit = (row) => {
    console.log("Редактировать CPU:", row);
  };

  return (
    <div>
      <h2>CPU List</h2>
      <DataTable headers={headers} data={data} onEdit={handleEdit} />
    </div>
  );
}
