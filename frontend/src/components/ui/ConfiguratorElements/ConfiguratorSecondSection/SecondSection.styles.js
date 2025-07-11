export const styles = {
  container: "bg-gray-100 p-2 rounded-lg",
  contentRow: "flex items-center justify-between gap-4",
  tabs: "flex flex-wrap gap-2 overflow-x-auto flex-grow",
  searchContainer:
    "flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm flex-shrink-0",
  searchInput:
    "ml-2 outline-none text-sm w-40 placeholder:text-sm placeholder:text-gray-400",
};

export const buttonStyles = (isActive) => ({
  textTransform: "none",
  fontSize: "0.75rem",
  fontWeight: 500,
  borderRadius: "9999px",
  px: 2,
  py: 0.5,
  backgroundColor: isActive ? "#ffffff" : "#e5e7eb",
  color: isActive ? "#000000" : "#4b5563",
  boxShadow: isActive ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
  "&:hover": {
    backgroundColor: isActive ? "#f9fafb" : "#d1d5db",
  },
  whiteSpace: "nowrap",
});
