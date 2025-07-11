import { useState } from "react";
import { styles, buttonStyles } from "./SecondSection.styles";
import { thirdSectionStyles } from "@/components/ui/ComponentsElements/ComponentsThirdSection/ThirdSection.styles";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

const categories = [
  "CPU",
  "Motherboard",
  "GPU",
  "RAM",
  "SSD",
  "HDD",
  "Case",
  "Power Supply",
  "FCS",
  "WCS",
  "Bluetooth",
  "Wifi",
];

const ConfiguratorSecondSection = ({
  setActiveCategory,
  page,
  setPage,
  totalPages,
  setSearch,
}) => {
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const handleCategoryChange = (cat) => {
    setCurrentCategory(cat);
    setActiveCategory(cat);
  };

  const onNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const onPrevPage = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentRow}>
        <div className={styles.tabs}>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant="contained"
              disableElevation
              sx={buttonStyles(cat === currentCategory)}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
        <div className={thirdSectionStyles.paginationWrapper}>
          <Button
            sx={thirdSectionStyles.buttonSecondary}
            variant="contained"
            size="small"
            disabled={page === 1}
            onClick={onPrevPage}
          >
            previos
          </Button>
          <p>
            {totalPages !== 0 ? page : 0}/{totalPages}
          </p>
          <Button
            sx={thirdSectionStyles.buttonSecondary}
            variant="contained"
            size="small"
            disabled={page === totalPages || totalPages <= 1}
            onClick={onNextPage}
          >
            next
          </Button>
        </div>
        <div className={styles.searchContainer}>
          <SearchIcon className="text-gray-400" />
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search ${currentCategory}...`}
            className={styles.searchInput}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfiguratorSecondSection;
