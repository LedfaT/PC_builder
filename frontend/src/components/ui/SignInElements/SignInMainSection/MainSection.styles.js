export const styles = {
    section: "flex flex-col items-center min-h-screen px-4 py-8 space-y-6 mt-6",
    logo: "flex items-center gap-2 text-2xl font-semibold ml-6",
    welcome: "text-2xl font-bold text-center mt-2",
    subtext: "text-gray-500 text-center",
    buttons: "flex w-full max-w-md justify-center space-x-2 bg-gray-100 rounded-xl p-1",
    switchButtons: {
        flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "6px",
      padding: "6px 12px",
      fontSize: "0.875rem",
      fontWeight: 500,
      color: "#9ca3af", 
      borderRadius: "0.75rem",
      textTransform: "none",
      minWidth: "auto",
      boxShadow: "none",
      backgroundColor: "transparent",
      "& svg": {
        fontSize: "18px",
      },
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    activeButton: {
      color: "#111827", 
      backgroundColor: "#ffffff",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      "&:hover": {
        backgroundColor: "#f9fafb",
      },
    },
  };
  