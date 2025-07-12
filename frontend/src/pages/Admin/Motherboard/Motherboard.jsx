// src/pages/admin/CPUPage.jsx

import React from "react";
import DataTable from "../../../components/ui/table";

export default function MotherboardPage() {
  const headers = [
    "id",
    "title",
    "description",
    "image",
    "chipset",
    "type_size",
    "socket",
    "cost",
  ];

  const data = [
    {
      id: 1,
      title: "ASUS ROG STRIX B550-F",
      description:
        "Материнская плата формата ATX с чипсетом B550 и сокетом AM4.",
      image: "https://example.com/images/b550f.jpg",
      chipset: "B550",
      type_size: 1,
      socket: "AM4",
      cost: 150.0,
    },
    {
      id: 2,
      title: "MSI PRO Z790-P",
      description: "Современная плата под процессоры Intel 13-го поколения.",
      image: "https://example.com/images/z790p.jpg",
      chipset: "Z790",
      type_size: 1,
      socket: "LGA1700",
      cost: 220.0,
    },
  ];

  const handleEdit = (row) => {
    console.log("Редактировать CPU:", row);
  };

  return (
    <div>
      <h2>Motherboard List</h2>
      <DataTable headers={headers} data={data} onEdit={handleEdit} />
    </div>
  );
}
