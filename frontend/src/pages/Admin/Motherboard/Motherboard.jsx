// src/pages/admin/CPUPage.jsx
import { useEffect, useState } from "react";
import DataTable from "../../../components/ui/table";
import { Button } from "@mui/material";
import AddMotherboardModal from "../../../components/ui/Admin/Modals/motherboard/AddMotherboardModal";
import notify from "@/components/notify";
import EditMotherboardModal from "../../../components/ui/Admin/Modals/motherboard/EditMotherboardModal";
import MotherboardService from "@services/motherboardService";
export default function MotherboardPage() {
  const headers = [
    "id",
    "title",
    "description",
    "image",
    "chipset",
    "type_size",
    "socket",
    "supported_memory_type",
    "cost",
  ];

  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(6);
  const fetchData = async function () {
    try {
      const response = await MotherboardService.getAllMotherboards(
        page + 1,
        limit
      );
      console.log(response);
      if (response.status === 200) {
        setData(response.data.data);
        setTotalPages(response.data.meta.totalPages);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, limit]);

  const [isLoading, setIsLoading] = useState(false);
  const toggleLoading = function () {
    setIsLoading((prev) => !prev);
  };

  const SubmitNew = async function (newRow) {
    toggleLoading();
    try {
      const response = await MotherboardService.createMotherboard(newRow);
      setData((prev) => [...prev, newRow]);

      if (response.status === 200) {
        notify("added succsefully");
        toggleModal("add");
      }
    } catch (e) {
      notify(`${e.messaage}`, "error");
    } finally {
      toggleLoading();
    }
  };

  const DeleteRow = async function (deleted) {
    toggleLoading();
    try {
      const response = await MotherboardService.deleteMotherboard(deleted);

      if (response.status === 200) {
        setData((prev) => prev.filter((el) => el.id !== deleted));
        notify("Deleted succsefully");
      }
    } catch (e) {
      notify(`${e}`, "error");
    } finally {
      toggleLoading();
    }
  };

  const SubmitEdit = async function (editedComponent) {
    toggleLoading();
    try {
      const { id, ...rest } = editedComponent;
      const response = await MotherboardService.updateMotherboard(id, {
        ...rest,
        cost: parseFloat(rest.cost),
      });

      setData((prevData) => {
        const index = prevData.findIndex(
          (component) => component.id === editedComponent.id
        );
        if (index === -1) return prevData;

        const updatedData = [...prevData];
        updatedData[index] = editedComponent;

        return updatedData;
      });

      if (response.status === 200) {
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
      <h2>Motherboard List</h2>
      <Button
        style={{
          backgroundColor: "black",
          color: "white",
          marginBottom: "10px",
        }}
        variant="contained"
        onClick={() => toggleModal("add")}
      >
        Add new motherboard
      </Button>
      <DataTable
        headers={headers}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        rowsPerPage={limit}
        setRowsPerPage={setLimit}
        data={data}
        onEdit={handleEdit}
        onDelete={DeleteRow}
      />
      <AddMotherboardModal
        open={open.add}
        isLoading={isLoading}
        onSubmit={SubmitNew}
        onClose={() => toggleModal("add")}
      />
      <EditMotherboardModal
        open={open.edit}
        onClose={() => toggleModal("edit")}
        data={edititgRow}
        onSubmit={SubmitEdit}
        isLoading={isLoading}
      />
    </div>
  );
}
