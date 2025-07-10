export const styles = {
    section: 'flex h-full',
    
    // Left panel (Your Builds)
    leftPanel: 'w-64 flex flex-col gap-4 p-4 bg-gray-50 rounded-l-xl shadow-md',
    header: 'flex flex-col gap-1',
    title: 'text-xl font-semibold',
    subtitle: 'text-sm text-gray-500',
    buildsList: 'flex flex-col gap-2 mt-4',
    buildItem: 'flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition cursor-pointer',
    buildItemSelected: 'bg-gray-200',
    buildInfo: 'flex flex-col',
    buildName: 'font-medium text-gray-900',
    buildMeta: 'text-xs text-gray-500',
    createButtonWrapper: 'mt-6',
    createButton: 'w-full flex items-center justify-center gap-2 p-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-medium transition',
  
    // Right panel (Build Details)
    rightPanel: 'flex-1 flex flex-col p-6 bg-white rounded-r-xl shadow-md',
    buildTitle: 'text-2xl font-semibold mb-2',
    buildTags: 'flex flex-wrap gap-2 mb-4',
    tag: 'px-2 py-1 text-xs bg-gray-100 rounded-full text-gray-600',
    summary: 'text-sm text-gray-700 mb-4',
    componentList: 'flex flex-col gap-2',
    componentItem: 'flex justify-between text-sm border rounded-sm py-1 p-4 border-gray-200',
  };
  