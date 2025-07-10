export const styles = {
  container: 'bg-white rounded-xl border p-4 w-[300px] mr-[18px]',
  title: 'text-lg font-semibold',
  subtitle: 'text-sm text-gray-500 mt-1 mb-4',
  partsList: 'space-y-3',
  partItem: 'relative border rounded-md p-3 hover:border-black cursor-pointer',

  footer: 'mt-6 space-y-3',
  saveButton: {
    backgroundColor: 'black',
    color: 'white',
    py: 1,
    borderRadius: 2,
    fontSize: '0.875rem',
    textTransform: 'none',
    marginBottom: "5px",
    '&:hover': {
      backgroundColor: '#1f1f1f',
    },
  },
  exportButton: {
    border: '1px solid rgba(0, 0, 0, 0.23)',
    color: 'black',
    py: 1,
    borderRadius: 2,
    fontSize: '0.875rem',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#f9f9f9',
    },
  },
};
