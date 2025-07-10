import React, { useState } from "react";
import { styles } from "./FourthSection.styles";
import ComponentCard from "../ConfiguratorCard/ComponentCard";
import ComponentDetailsDialog from "../../../layout/ComponentDetailsDialog/ComponentDetailsDialog";

const ConfiguratorFourthSection = ({
  activeCategory,
  onAddToBuild,
  components,
}) => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

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
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.gridContainer}>
          {components.map((component, index) => (
            <ComponentCard
              key={index}
              addToBuild={onAddToBuild}
              showDetails={() => handleDetailsClick(component)}
              component={component}
              category={activeCategory}
            />
          ))}
        </div>
      </div>

      <ComponentDetailsDialog
        open={detailsOpen} // Відкривається діалог
        onClose={handleCloseDetails} // Закривається діалог
        component={selectedComponent} // Передаємо вибраний компонент
      />
    </div>
  );
};

export default ConfiguratorFourthSection;
