export const headerStyles = {
  header: "bg-white/70 sticky top-0 z-50 py-4 backdrop-blur-xl",
  container: "mx-auto px-4 flex justify-between items-center",
  logoContainer: "flex items-center mb-2",
  logoText: "text-xl font-bold text-gray-800 ml-1",
  nav: "hidden md:flex space-x-8 relative", 
  navLink:"relative flex items-center gap-1 text-gray-600 font-medium pb-1 transition-colors duration-300 " +
  "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300",
  authButton: "flex items-center gap-2 bg-black hover:bg-gray-600 text-white px-4 py-2 rounded-md font-medium transition-colors",
  btnMainPage: "pointer flex items-center"
};
