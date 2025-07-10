import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ConfirmationDialog = ({ open, onClose, onConfirm, currentPart, newPart }) => {
  // Додаємо перевірку на наявність об'єктів
  if (!currentPart || !newPart) {
    return null; // або повертаємо порожній div
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Replacement</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to replace <strong>{currentPart?.title}</strong> ({currentPart?.cost}$) 
          with <strong>{newPart?.title}</strong> ({newPart?.cost}$)?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onConfirm} color="primary" autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;