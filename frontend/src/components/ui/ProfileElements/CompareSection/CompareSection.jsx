import { styles } from "./CompareSection.styles";
import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CompareIcon from '@mui/icons-material/Compare';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import BuildComparisonCard from "./CompareCard";

const buildComparisonData = [
    { component: "Price", build1: "$3,499.99", build2: "$1,799.99" },
    { component: "Category", build1: "high-end", build2: "mid-range" },
    { component: "CPU", build1: "Intel Core i9-13900K ($589.99)", build2: "Intel Core i5-13600K ($319.99)" },
    { component: "Motherboard", build1: "ASUS ROG Maximus Z790 Hero ($629.99)", build2: "ASUS ROG Maximus Z790 Hero ($629.99)" },
    { component: "Graphics Card", build1: "NVIDIA GeForce RTX 4090 ($1599.99)", build2: "AMD Radeon RX 7900 XTX ($999.99)" },
    { component: "RAM", build1: "Corsair Vengeance RGB Pro 32GB ($129.99)", build2: "Corsair Vengeance RGB Pro 32GB ($129.99)" },
    { component: "Storage", build1: "Samsung 990 Pro 2TB ($179.99)", build2: "Samsung 990 Pro 2TB ($179.99)" },
    { component: "Case", build1: "Lian Li O11 Dynamic EVO ($169.99)", build2: "Lian Li O11 Dynamic EVO ($169.99)" },
    { component: "Power Supply", build1: "Corsair RM1000x ($189.99)", build2: "Corsair RM1000x ($189.99)" },
    { component: "CPU Cooler", build1: "NZXT Kraken Z73 ($279.99)", build2: "NZXT Kraken Z73 ($279.99)" },
];

const CompareSection = () => {
    const handleRemoveBuild1 = () => {
        console.log("Remove Ultimate Gaming Rig");
    };

    const handleRemoveBuild2 = () => {
        console.log("Remove Mid-Range Powerhouse");
    };

    return (
        <div className={styles.section}>
            <div className="mb-6">
                <h1 className={styles.title}>Compare Your Builds</h1>
                <p className={styles.subtitle}>
                    View your builds side by side to compare components and specifications
                </p>
            </div>

            <div className="overflow-auto">
            <BuildComparisonCard
                buildComparisonData={buildComparisonData}
                handleRemoveBuild1={handleRemoveBuild1}
                handleRemoveBuild2={handleRemoveBuild2}
            />

            </div>

            
        </div>
    );
};

export default CompareSection;
