import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ModalWrapper({
  open,
  onClose,
  title = "Modal",
  children,
  isLoading,
  onSubmit,
  submitText = "Save",
  cancelText = "Cancel",
  fullWidth = true,
  maxWidth = "md",
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
        {title}
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>{children}</DialogContent>

      <DialogActions>
        <Button onClick={onClose}>{cancelText}</Button>
        <Button
          aria-hidden={isLoading}
          loading={isLoading}
          variant="contained"
          onClick={onSubmit}
        >
          {submitText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
