// src/pages/admin/CPUPage.jsx

import React from "react";
import DataTable from "../../../components/ui/table";

export default function HDDPage() {
  const headers = [
    "id",
    "title",
    "description",
    "image",
    "memory_quantity",
    "reading_speed",
    "write_speed",
    "cost",
  ];

  const data = [
    {
      id: 1,
      title: "Seagate Barracuda 2TB",
      description: "Надежный жёсткий диск для хранения большого объема данных.",
      image: "https://example.com/images/seagate-barracuda.jpg",
      memory_quantity: "2TB",
      reading_speed: "210 MB/s",
      write_speed: "190 MB/s",
      cost: 60.0,
    },
    {
      id: 2,
      title: "Toshiba P300 1TB",
      description: "Бюджетный HDD с хорошим соотношением цена/объём.",
      image: "https://example.com/images/toshiba-p300.jpg",
      memory_quantity: "1TB",
      reading_speed: "185 MB/s",
      write_speed: "170 MB/s",
      cost: 45.0,
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
