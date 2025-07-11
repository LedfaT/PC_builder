// src/pages/admin/CPUPage.jsx

import React from "react";
import DataTable from "../../../components/ui/table";

export default function WifiModulePage() {
  const headers = ["id", "title", "description", "image", "generation", "cost"];

  const data = [
    {
      id: 1,
      title: "Intel Wi-Fi 6 AX200",
      description:
        "Модуль беспроводной связи с поддержкой Wi-Fi 6 и Bluetooth 5.1.",
      image: "https://example.com/images/intel-ax200.jpg",
      generation: "Wi-Fi 6",
      cost: 35.0,
    },
    {
      id: 2,
      title: "TP-Link UB500",
      description: "Компактный Bluetooth адаптер пятого поколения.",
      image: "https://example.com/images/ub500.jpg",
      generation: "Bluetooth 5.0",
      cost: 15.0,
    },
  ];

  const handleEdit = (row) => {
    console.log("Редактировать CPU:", row);
    // Здесь можно открыть модалку или перейти на /admin/cpus/:id/edit
  };

  return (
    <div>
      <h2>CPU List</h2>
      <DataTable headers={headers} data={data} onEdit={handleEdit} />
    </div>
  );
}
