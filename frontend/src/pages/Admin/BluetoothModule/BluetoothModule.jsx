// src/pages/admin/CPUPage.jsx

import React from "react";
import DataTable from "../../../components/ui/table";

export default function BluetoothModulePage() {
  const headers = ["id", "title", "image", "description", "generation", "cost"];

  const data = [
    {
      id: 1,
      title: "TP-Link UB500",
      image: "https://example.com/images/ub500.jpg",
      description:
        "Компактный Bluetooth 5.0 USB-адаптер, работает без драйверов.",
      generation: "5.0",
      cost: 15.0,
    },
    {
      id: 2,
      title: "ASUS USB-BT500",
      image: "https://example.com/images/asus-bt500.jpg",
      description:
        "Bluetooth адаптер нового поколения с повышенной дальностью.",
      generation: "5.1",
      cost: 19.99,
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
