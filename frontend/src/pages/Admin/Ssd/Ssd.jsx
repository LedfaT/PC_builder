import React, { useState } from "react";
import DataTable from "../../../components/ui/table";
import { Button } from "@mui/material";
import notify from "@/components/notify";
import AddSSDModal from "../../../components/ui/Admin/Modals/SSD/AddSSDModal";
import EditSSDModal from "../../../components/ui/Admin/Modals/SSD/EditSSDModal";

export default function SSDPage() {
  const headers = [
    "id",
    "title",
    "description",
    "image",
    "memory_quantity",
    "radiator_type",
    "reading_speed",
    "write_speed",
    "cost",
  ];

  const [data, setData] = useState([
    {
      id: 1,
      title: "Samsung 980 PRO 1TB",
      description: "Высокопроизводительный NVMe SSD с поддержкой PCIe 4.0.",
      image: "https://example.com/images/980pro.jpg",
      memory_quantity: "1TB",
      radiator_type: "Aluminum",
      reading_speed: "7000 MB/s",
      write_speed: "5000 MB/s",
      cost: 130.0,
    },
    {
      id: 2,
      title: "WD Black SN850X 2TB",
      description: "Игровой SSD нового поколения с RGB-радиатором.",
      image: "https://example.com/images/sn850x.jpg",
      memory_quantity: "2TB",
      radiator_type: "Copper",
      reading_speed: "7300 MB/s",
      write_speed: "6600 MB/s",
      cost: 220.0,
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const toggleLoading = () => setIsLoading((prev) => !prev);

  const [editingRow, setEditingRow] = useState(null);
  const [open, setOpen] = useState({ add: false, edit: false });

  const toggleModal = (type) => {
    setOpen((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleEdit = (row) => {
    setEditingRow(row);
    toggleModal("edit");
  };

  const SubmitNew = (newRow) => {
    toggleLoading();
    try {
      const response = { status: 200 };
      setData((prev) => [...prev, newRow]);
      if (response.status === 200) {
        notify("SSD added successfully");
        toggleModal("add");
      }
    } catch (e) {
      notify(`${e.message}`, "error");
    } finally {
      toggleLoading();
    }
  };

  const SubmitEdit = (editedRow) => {
    toggleLoading();
    try {
      const response = { status: 200 };
      setData((prev) =>
        prev.map((item) => (item.id === editedRow.id ? editedRow : item))
      );
      if (response.status === 200) {
        notify("SSD edited successfully");
        toggleModal("edit");
      }
    } catch (e) {
      notify(`${e.message}`, "error");
    } finally {
      toggleLoading();
    }
  };

  return (
    <div>
      <h2>SSD List</h2>
      <Button variant="contained" onClick={() => toggleModal("add")}>
        Add New SSD
      </Button>

      <DataTable headers={headers} data={data} onEdit={handleEdit} />

      <AddSSDModal
        open={open.add}
        onClose={() => toggleModal("add")}
        onSubmit={SubmitNew}
        isLoading={isLoading}
      />

      <EditSSDModal
        open={open.edit}
        onClose={() => toggleModal("edit")}
        onSubmit={SubmitEdit}
        isLoading={isLoading}
        data={editingRow}
      />
    </div>
  );
}
