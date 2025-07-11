export const styles = {
    firstSection: "flex items-center justify-between max-w-6xl mx-auto",
    profileInfo: "flex items-center gap-4",
    userName: "font-semibold text-lg text-gray-900",
    userNickname: "text-sm text-gray-500",
  
    buttonsGroup: "flex gap-2",
    accountSettingsButton: {
      padding: '6px 16px',
      borderRadius: '0.75rem',
      textTransform: 'none',
      fontWeight: 500,
      border: '1px solid #d1d5db', // gray-300
      backgroundColor: '#ffffff',
      color: '#111827', // gray-900
      '&:hover': {
        backgroundColor: '#f9fafb',
        borderColor: '#d1d5db',
      },
    },
    editProfileButton: {
      padding: '6px 16px',
      borderRadius: '0.75rem',
      textTransform: 'none',
      fontWeight: 500,
      backgroundColor: '#111827', // gray-900
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#1f2937', // slightly lighter black
      },
    },
  };
  