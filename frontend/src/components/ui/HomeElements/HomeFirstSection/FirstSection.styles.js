import backgroundImage from './images.jpg';
export const firstSectionStyles = {

    heroSection: "relative h-[600px] bg-gray-100 flex items-center px-6 ml-20 mr-20 rounded-[15px]",
    contentWrapper: "container mx-auto flex justify-between items-center h-full",
    
    heroContent: "max-w-xl",
    mainTitle: "text-4xl md:text-5xl font-bold mb-6 leading-tight",
    description: "text-lg text-gray-600 mb-8",
    
    buttonGroup: "flex flex-col sm:flex-row gap-4 mb-8",
    primaryButton: {
        backgroundColor: '#000',
        color: '#fff',
        padding: '12px 24px',
        fontWeight: 'bold',
        borderRadius: '15px',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: '#333',
            transform: 'translateY(-5px)',
        },
    },
    
    secondaryButton: {
        color: '#000',
        padding: '12px 24px',
        fontWeight: 'bold',
        textTransform: 'none',
        borderColor: 'gray',
        borderRadius: '15px',
        transition: 'all 0.3s ease',
        '&:hover': {
            transform: 'translateY(-5px)',
        },
    },
    
    
    buildCard: "bg-white shadow-lg rounded-lg w-full overflow-hidden ml-8 h-[350px] bg-cover relative",
    cardContent: "p-6 absolute bottom-0 left-0 right-0",
    cardSubtitle: "font-bold text-white mb-1 text-sm bg-gray-600/60 rounded-[20px] w-[120px] h-[23px] text-center",
    cardTitle: "text-xl font-bold text-white mb-2",
    cardPrice: "text-white font-semibold",
    bgimage: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
    },
}