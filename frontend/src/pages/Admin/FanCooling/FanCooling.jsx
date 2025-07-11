// src/pages/admin/CPUPage.jsx

import React from "react";
import DataTable from "../../../components/ui/table";

export default function FanCoolingPage() {
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
      title: "Be Quiet! Pure Rock 2",
      image: "https://example.com/images/pure-rock-2.jpg",
      description:
        "Тихий и мощный башенный кулер, оптимален для mid-range сборок.",
      type_size: 1, // Башенный
      heat_removal: "150W TDP",
      cost: 40.0,
    },
    {
      id: 2,
      title: "Noctua NH-L9i",
      image: "https://example.com/images/nh-l9i.jpg",
      description:
        "Низкопрофильный кулер, идеально подходит для mini-ITX систем.",
      type_size: 2, // Низкопрофильный
      heat_removal: "95W TDP",
      cost: 50.0,
    },
    {
      id: 3,
      title: "Deepcool LS520",
      image: "https://example.com/images/deepcool-ls520.jpg",
      description: "Компактная водяная СЖО с RGB и высоким уровнем охлаждения.",
      type_size: 3, // Водяное
      heat_removal: "240W TDP",
      cost: 120.0,
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
