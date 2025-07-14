import ModalWrapper from "./ModalWrapper";

export default function ConfirmModal({ open, onClose, onSubmit }) {
  return (
    <ModalWrapper
      open={open}
      onClose={onClose}
      onSubmit={onSubmit}
      title="Confirm handler"
      submitText="delete"
      cancelText="cancle"
    >
      <p>Are you sure???</p>
    </ModalWrapper>
  );
}
