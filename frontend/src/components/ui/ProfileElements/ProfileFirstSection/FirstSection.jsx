import { styles } from "./FirstSection.styles";
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { Context } from "@/contextProvider";
import { useContext, useEffect, useState } from "react";

const ProfileFirstSection = () => {
    const { store } = useContext(Context);
    const user = store.getData().user;
    const [open, setOpen] = useState(false);
  const [newUsername, setNewUsername] = useState(user.username);
  const [newEmail, setNewEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
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
    return(
        <section className={styles.firstSection}>
            <div className={styles.profileInfo}>
                <Avatar src="/broken-image.jpg" sx={{ width: 56, height: 56 }} />
                <div>
                    <div className={styles.userName}>{user.username}</div>
                    <div className={styles.userNickname}>PC Enthusiast</div>
                </div>
            </div>

            <div className={styles.buttonsGroup}>
                <Button sx={styles.editProfileButton} variant="text" onClick={handleClickOpen}>
                    Edit Profile
                </Button>
            </div>
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

export default ProfileFirstSection;
