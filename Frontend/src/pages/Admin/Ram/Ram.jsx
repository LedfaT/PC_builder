// src/pages/admin/CPUPage.jsx

import React from "react";
import DataTable from "../../../components/ui/table";

export default function RAMPage() {
  const headers = [
    "id",
    "title",
    "description",
    "image",
    "memory_quantity",
    "memory_type",
    "radiator_type",
    "cost",
  ];

  const data = [
    {
      id: 1,
      title: "Corsair Vengeance LPX 16GB",
      description: "Надежная DDR4-память с низким профилем радиатора.",
      image: "https://example.com/images/vengeance-lpx.jpg",
      memory_quantity: "16GB",
      memory_type: 4, // DDR4
      radiator_type: 1, // алюминиевый
      cost: 75.0,
    },
    {
      id: 2,
      title: "Kingston Fury Beast 32GB",
      description: "Высокоскоростная DDR5 память с массивным радиатором.",
      image: "https://example.com/images/fury-beast.jpg",
      memory_quantity: "32GB",
      memory_type: 5, // DDR5
      radiator_type: 2, // медный
      cost: 140.0,
    },
  ];

  const handleEdit = (row) => {
    console.log("Редактировать CPU:", row);
  };

  return (
    <div>
      <h2>Water coolings List</h2>
      <DataTable headers={headers} data={data} onEdit={handleEdit} />
    </div>
  );
}
