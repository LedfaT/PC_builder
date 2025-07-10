export const styles = {
    dialogPaper: {
      borderRadius: 2,
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      overflow: "hidden",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      px: 3,
      py: 2,
      borderBottom: "1px solid #eee",
      bgcolor: "#fff",
    },
    priceAndClose: {
      display: "flex",
      alignItems: "center",
      gap: 2,
    },
    priceChip: {
      fontSize: "1rem",
      fontWeight: "bold",
      px: 2,
      py: 1,
      color: "white",
      height: 32,
      bgcolor: "black",
    },
    closeButton: {
      minWidth: 0,
      p: 1,
      color: "#888",
      "&:hover": {
        backgroundColor: "transparent",
        color: "#000",
      },
    },
    content: {
      p: 3,
    },
    imageBox: {
      width: 240,
    },
    imagePaper: {
      bgcolor: "#f5f5f5",
      borderRadius: 2,
      height: 240,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid #e0e0e0",
    },
    image: {
      width: "80%",
      height: "auto",
      objectFit: "contain",
    },
    descriptionText: {
      mb: 2,
      color: "text.secondary",
      fontSize: "0.95rem",
    },
    specTable: {
      width: "100%",
      borderCollapse: "collapse",
    },
    specRow: {
      borderBottom: "1px solid #f0f0f0",
      "&:last-child": { borderBottom: "none" },
    },
    specKey: {
      py: 1.2,
      pr: 2,
      width: "40%",
      color: "text.secondary",
    },
    specValue: {
      py: 1.2,
      fontWeight: "bold",
    },
  };
  