// src/pages/admin/CPUPage.jsx

import React, { useState } from "react";
import DataTable from "../../../components/ui/table";
import { Button } from "@mui/material";
import AddCpuModal from "../../../components/ui/Admin/Modals/CPU/AddCPUModal";
import notify from "@/components/notify";
import EditCpumModal from "../../../components/ui/Admin/Modals/CPU/EditCPUModal";

export default function CPUPage() {
  const headers = [
    "id",
    "title",
    "description",
    "image",
    "cores",
    "threads",
    "Architecture",
    "cache",
    "clock",
    "cost",
  ];
  const [data, setData] = useState([
    {
      id: 1,
      title: "Intel Core i5-12400F",
      description:
        "12th-gen Intel processor, great for gaming and office tasks.",
      image: "https://example.com/images/i5-12400F.jpg",
      cores: "6",
      threads: "12",
      Architecture: "Alder Lake",
      cache: "18MB",
      clock: "2.5 GHz (up to 4.4 GHz)",
      cost: 200.0,
    },
    {
      id: 2,
      title: "AMD Ryzen 5 5600X",
      description:
        "High-performance 6-core AMD processor on Zen 3 architecture.",
      image: "https://example.com/images/ryzen-5600x.jpg",
      cores: "6",
      threads: "12",
      Architecture: "Zen 3",
      cache: "32MB",
      clock: "3.7 GHz (up to 4.6 GHz)",
      cost: 320.0,
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const toggleLoading = function () {
    setIsLoading((prev) => !prev);
  };

  const SubmitNew = function (newRow) {
    toggleLoading();
    try {
      const response = { stasus: 200 };
      setData((prev) => [...prev, newRow]);

      if (response.stasus === 200) {
        notify("added succsefully");
        toggleModal("add");
      }
    } catch (e) {
      notify(`${e.messaage}`, "error");
    } finally {
      toggleLoading();
    }
  };

  const SubmitEdit = function (editedComponent) {
    toggleLoading();
    try {
      const response = { stasus: 200 };

      setData((prevData) => {
        const index = prevData.findIndex(
          (component) => component.id === editedComponent.id
        );
        if (index === -1) return prevData;

        const updatedData = [...prevData];
        updatedData[index] = editedComponent;

        return updatedData;
      });

      if (response.stasus === 200) {
        notify("edited succsefully");
        toggleModal("edit");
      }
    } catch (e) {
      notify(`${e.message}`, "error");
    } finally {
      toggleLoading();
    }
  };

  const [edititgRow, setEditingRow] = useState(null);
  const handleEdit = (row) => {
    setEditingRow(row);
    toggleModal("edit");
  };

  const [open, setOpen] = useState({
    add: false,
    edit: false,
  });

  const toggleModal = function (modalType) {
    setOpen((prev) => ({ ...prev, [modalType]: !prev[modalType] }));
  };
  return (
    <div>
      <h2>CPU List</h2>
      <Button onClick={() => toggleModal("add")}>Add new Cpu</Button>
      <DataTable headers={headers} data={data} onEdit={handleEdit} />
      <AddCpuModal
        open={open.add}
        isLoading={isLoading}
        onSubmit={SubmitNew}
        onClose={() => toggleModal("add")}
      />
      <EditCpumModal
        open={open.edit}
        onClose={() => toggleModal("edit")}
        data={edititgRow}
        onSubmit={SubmitEdit}
        isLoading={isLoading}
      />
    </div>
  );
}
