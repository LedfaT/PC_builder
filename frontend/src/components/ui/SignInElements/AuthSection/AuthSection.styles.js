export const styles = {
    section: {
        width: "100%",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "24px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
        border: "1px solid",       
        borderColor: "#e5e7eb",          
      },
    textField: {
      "& .MuiOutlinedInput-root": {
        borderRadius: "12px",
      },
    },
    button: {
      width: "100%",
      backgroundColor: "#111111",
      borderRadius: "12px",
      textTransform: "none",
      fontWeight: 600,
      paddingY: "10px",
      fontSize: "0.95rem",
      "&:hover": {
        backgroundColor: "#1f1f1f",
      },
    },
    footerText: {
      textAlign: "center",
      color: "#6b7280",
      fontSize: "0.875rem",
    },
    link: {
      color: "#000000",
      fontWeight: 600,
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  };
  