// src/pages/admin/CPUPage.jsx

import React from "react";
import DataTable from "../../../components/ui/table";

export default function WaterCoolingPage() {
  const headers = [
    "id",
    "title",
    "image",
    "description",
    "type_size",
    "heat_removal",
    "cost",
  ];

  const data = [
    {
      id: 1,
      title: "Cooler Master Hyper 212",
      image: "https://example.com/images/hyper212.jpg",
      description:
        "Воздушный кулер для процессора с отличным охлаждением и низким уровнем шума.",
      type_size: 1, // например: 1 = Tower, 2 = Low Profile, 3 = Water
      heat_removal: "120W TDP",
      cost: 45.0,
    },
    {
      id: 2,
      title: "NZXT Kraken X63",
      image: "https://example.com/images/kraken-x63.jpg",
      description:
        "Жидкостная система охлаждения с RGB и поддержкой большинства сокетов.",
      type_size: 3,
      heat_removal: "280W TDP",
      cost: 160.0,
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
