export const thirdSectionStyles = {
  preloader:
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  container: "w-full",
  wrapper: "w-full ml-4 mt-1",

  searchWrapper: "flex items-center mb-3 gap-10",
  paginationWrapper: "flex items-center justify-between gap-3",

  searchBar: {
    marginBottom: "",
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
    },
  },
  gridContainer: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
  cardContent: "flex flex-col h-full",
  card: {
    borderRadius: "12px",
    border: "1px solid rgba(209,213,219,1)",
  },
  name: "font-semibold mb-1",
  title: "absolute top-2 right-2 text-xs font-semibold text-gray-500 uppercase",
  price: "text-gray-600 mb-2",
  description: "text-sm text-gray-700 mt-2",
  buttonGroup: "flex gap-2 justify-between mt-auto pt-4",
  buttonPrimary: {
    border: "1px solid rgba(209,213,219,0.5)",
    color: "black",
    borderRadius: "12px",
  },
  buttonSecondary: {
    borderRadius: "12px",
    backgroundColor: "black",
  },
  image: {
    width: "54.5%",
    height: "auto",
    objectFit: "contain",
  },
};
