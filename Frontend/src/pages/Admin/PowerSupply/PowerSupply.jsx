// src/pages/admin/CPUPage.jsx

import React from "react";
import DataTable from "../../../components/ui/table";

export default function PowerSupplyPage() {
  const headers = [
    "id",
    "title",
    "description",
    "image",
    "strength",
    "sertificate",
    "cost",
  ];

  const data = [
    {
      id: 1,
      title: "be quiet! Pure Power 11",
      description: "Надежный блок питания с сертификатом 80+ Bronze, 600W.",
      image: "https://example.com/images/purepower11.jpg",
      strength: 600,
      sertificate: "80+ Bronze",
      cost: 75.0,
    },
    {
      id: 2,
      title: "Corsair RM850x",
      description:
        "Мощный блок питания с модульными кабелями и сертификатом 80+ Gold.",
      image: "https://example.com/images/rm850x.jpg",
      strength: 850,
      sertificate: "80+ Gold",
      cost: 135.0,
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
