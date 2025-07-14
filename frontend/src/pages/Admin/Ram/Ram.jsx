import { useEffect, useState } from "react";
import DataTable from "../../../components/ui/table";
import { Button } from "@mui/material";
import AddRAMModal from "../../../components/ui/Admin/Modals/RAM/AddRAMModal";
import notify from "@/components/notify";
import EditRAMModal from "../../../components/ui/Admin/Modals/RAM/EditRAMModal";
import RamService from "@services/ramService";
export default function RAMPage() {
  const headers = [
    "id",
    "title",
    "description",
    "image",
    "memory_quantity",
    "memory_type",
    "radiator_type",
    "cost",
  ];
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const [limit, setLimit] = useState(6);
  const fetchData = async function () {
    try {
      const response = await RamService.getAllRams(page + 1, limit);
      if (response.status === 200) {
        console.log(response.data);
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
      const response = await RamService.createRam(newRow);
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
      const response = await RamService.deleteRam(deleted);

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
      const response = await RamService.updateRam(id, rest);

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
      <h2>RAM List</h2>
      <Button onClick={() => toggleModal("add")}>Add new Cpu</Button>
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
      <AddRAMModal
        open={open.add}
        isLoading={isLoading}
        onSubmit={SubmitNew}
        onClose={() => toggleModal("add")}
      />
      <EditRAMModal
        open={open.edit}
        onClose={() => toggleModal("edit")}
        data={edititgRow}
        onSubmit={SubmitEdit}
        isLoading={isLoading}
      />
    </div>
  );
}
