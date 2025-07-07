import React, { useState } from "react";
import { TextField, CircularProgress, Button } from "@mui/material";
import { thirdSectionStyles } from "./ThirdSection.styles";
import ComponentCard from "./ComponentCard";
import ComponentDetailsDialog from "../../../layout/ComponentDetailsDialog/ComponentDetailsDialog";

const ComponentsThirdSection = ({
  activeCategory,
  onAddToBuild,
  comp,
  loading,
  page,
  setPage,
  totalPages,
  setSearch,
}) => {
  const onNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const onPrevPage = () => {
    setPage((prev) => prev - 1);
  };
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  // Відкриває діалог з деталями
  const handleDetailsClick = (component) => {
    setSelectedComponent({ ...component, category: activeCategory });
    setDetailsOpen(true);
  };

  // Закриває діалог з деталями
  const handleCloseDetails = () => {
    setDetailsOpen(false);
  };


  return (
    <div className={thirdSectionStyles.container}>
      <div className={thirdSectionStyles.wrapper}>
        <div className={thirdSectionStyles.searchWrapper}>
          <TextField
            sx={thirdSectionStyles.searchBar}
            fullWidth
            variant="outlined"
            placeholder="Search components..."
            size="small"
            onChange={(e) => setSearch(e.target.value)}
          />
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
        </div>
        {loading ? (
          <CircularProgress sx={thirdSectionStyles.preloader} />
        ) : (
          <div className={thirdSectionStyles.gridContainer}>
            {comp.map((component, i) => (
              <ComponentCard key={i} component={component} onAddToBuild={onAddToBuild} showDetails={() => handleDetailsClick(component)}/>

            ))}
          </div>
        )}
      </div>
      <ComponentDetailsDialog
        open={detailsOpen} // Відкривається діалог
        onClose={handleCloseDetails} // Закривається діалог
        component={selectedComponent} // Передаємо вибраний компонент
      />
    </div>
  );
};

export default ComponentsThirdSection;
