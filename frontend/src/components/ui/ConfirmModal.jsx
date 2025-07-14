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
      <p className="text-2xl">
        If you delete this component, you will not have chance to return it. Are
        you sure?
      </p>
    </ModalWrapper>
  );
}
