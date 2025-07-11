export const styles = {
    secondSection: "max-w-6xl mx-auto",
    switchButtonsGroup: "flex bg-gray-100 rounded-xl p-1 gap-1",
    switchButtons: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '6px 12px',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: '#374151',
      borderRadius: '0.75rem',
      textTransform: 'none',
      minWidth: 'auto',
      '& svg': {
        fontSize: '18px',
      },
    },
    activeButton: {
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      color: '#111827', 
      '&:hover': {
        backgroundColor: '#f9fafb',
      },
    },
  };
  