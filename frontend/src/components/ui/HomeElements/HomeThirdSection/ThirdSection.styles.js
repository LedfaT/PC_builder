import { BorderColor } from "@mui/icons-material";

export const thirdSectionStyles = {
    section: "bg-black text-white py-16 px-4 sm:px-6 lg:px-8 rounded-xl ml-38 mr-38",
    container: "max-w-4xl mx-auto text-center",
    heading: "text-3xl sm:text-4xl font-bold mb-4",
    description: "text-lg sm:text-xl mb-8 opacity-90",
    buttonsContainer: "flex flex-col sm:flex-row justify-center gap-4",
    primaryButton: {
      backgroundColor: '#ffffff',
      color: 'black', 
      fontWeight: 500,
      padding: '7px 24px',
      borderRadius: '10px',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: 'gray', 
        transform: 'translateY(-5px)'
      }
    },
    secondaryButton: {
      border: '1px solid #ffffff',
      color: '#ffffff',
      fontWeight: 500,
      padding: '7px 24px',
      borderRadius: '10px',
      borderColor: 'gray',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: 'gray',
        borderColor: 'gray',
        transform: 'translateY(-5px)'
      },
    },
  };