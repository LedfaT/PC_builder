import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState, useContext, useMemo, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Context } from "@/contextProvider";
import { styles } from "./AccountSection.styles";
import months from "@/data/months";
import computerService from "@services/computerService";

const AccountSection = () => {
  const { store } = useContext(Context);
  const user = store.getData().user;
  const [count, setCount] = useState(0);

  const [open, setOpen] = useState(false);
  const [newUsername, setNewUsername] = useState(user.username);
  const [newEmail, setNewEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const parsedDate = useMemo(() => {
    const newDate = new Date(user.createdAt);
    const day = newDate.getDate();
    const month = months[newDate.getMonth()];
    const year = newDate.getFullYear();
    return `${month} ${day}, ${year}`;
  }, [user.createdAt]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await computerService.getAllUserComputersCount();
        setCount(res.data);
        console.log(res);
      } catch (e) {
        console.error("Error fetching computer count", e);
      }
    };
    fetchData();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Логіка для оновлення профілю
    console.log("New username:", newUsername);
    console.log("New email:", newEmail);

    if (oldPassword && newPassword) {
      // Логіка для зміни пароля
      console.log("Changing password...");
      console.log("Old password:", oldPassword);
      console.log("New password:", newPassword);
    }

    handleClose(); // Закриваємо модальне вікно після збереження
  };


  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.headerTitle}>Account Information</h1>
          <div className={styles.headerSubtitle}>
            Manage your account settings and preferences
          </div>
        </div>

        <div className={styles.infoBlock}>
          <div className={styles.sectionTitle}>Personal Information</div>

          <div className={styles.infoItem}>
            <div className={styles.label}>Username</div>
            <div className={styles.value}>{user.username}</div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.label}>Email</div>
            <div className={styles.value}>{user.email}</div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.label}>Member Since</div>
            <div className={styles.value}>{parsedDate}</div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.label}>Builds Created</div>
            <div className={styles.value}>{count}</div>
          </div>
        </div>

        <div className={styles.infoBlock}>
          <div className={styles.sectionTitle}>Account Settings</div>
          <div className={styles.buttonWrapper}>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              sx={styles.outlinedButton}
              onClick={handleClickOpen}
            >
              Edit Profile Information
            </Button>
          </div>
        </div>
      </div>

      {/* Модальне вікно для редагування профілю та зміни пароля */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Profile Information</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Old Password"
            type="password"
            fullWidth
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <TextField
            margin="dense"
            label="New Password"
            type="password"
            fullWidth
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default AccountSection;
