import React from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { thirdSectionStyles } from "./ThirdSection.styles";

const ComponentCard = ({ component, addToBuild, showDetails, category }) => {
  return (
    <Card sx={thirdSectionStyles.card}>
      <CardContent className={thirdSectionStyles.cardContent}>
        <Typography variant="h6" className={thirdSectionStyles.name}>
          {component.title}
        </Typography>
        <img
          src={component.image}
          alt={component.title}
          style={thirdSectionStyles.image}
        />
        <Typography className={thirdSectionStyles.title}>
          {component.title}
        </Typography>
        <Typography variant="body2" className={thirdSectionStyles?.price}>
          <span>Cost: </span>
          ${component.cost.toFixed(2)}
        </Typography>
        <Typography variant="body2" className={thirdSectionStyles?.description}>
          <span>Description: </span>
          {component.description}
        </Typography>
        <div className={thirdSectionStyles.buttonGroup}>
          <Button
            sx={thirdSectionStyles.buttonPrimary}
            variant="outlined"
            size="small"
            onClick={showDetails} 
          >
            Details
          </Button>
          <Button
            sx={thirdSectionStyles.buttonSecondary}
            variant="contained"
            size="small"
            onClick={() => {
              return addToBuild(component, category);
            }}
          >
            Add to Build
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComponentCard;
