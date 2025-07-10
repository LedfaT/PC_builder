import React, { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import { thirdSectionStyles } from "./ThirdSection.styles";
import StarIcon from "@mui/icons-material/Star";

const BuildsThirdSection = ({ setType, type, builds, setSearch }) => {
  const [activeTab, setActiveTab] = useState("official");

  return (
    <div className={thirdSectionStyles.container}>
      <div className={thirdSectionStyles.wrapper}>
        <div className={thirdSectionStyles.wrapperElements}>
          <TextField
            sx={thirdSectionStyles.searchBar}
            fullWidth
            variant="outlined"
            placeholder="Search builds..."
            onChange={setSearch}
            size="small"
          />
          <div className={thirdSectionStyles.thirdButtonGroup}>
            <div className="flex gap-2 ml-4">
              <Button
                sx={{
                  ...thirdSectionStyles.buttonThird,
                  ...(type === "official"
                    ? {
                        backgroundColor: "#000",
                        color: "#fff",
                      }
                    : {
                        "&:hover": {
                          backgroundColor: "gray",
                        },
                      }),
                }}
                onClick={() => setType("official")}
              >
                Official builds
              </Button>
              <Button
                sx={{
                  ...thirdSectionStyles.buttonThird,
                  ...(type === "user"
                    ? {
                        backgroundColor: "#000",
                        color: "#fff",
                      }
                    : {
                        "&:hover": {
                          backgroundColor: "gray",
                        },
                      }),
                }}
                onClick={() => setType("user")}
              >
                User builds
              </Button>
            </div>
          </div>
        </div>

        <div className={thirdSectionStyles.gridContainer}>
          {builds.map((build, index) => (
            <Card key={index} sx={thirdSectionStyles.card}>
              <CardContent className={thirdSectionStyles.cardContent}>
                <Typography variant="h6" className={thirdSectionStyles.name}>
                  {build.title}
                </Typography>

                <Typography
                  variant="body2"
                  className={thirdSectionStyles.price}
                >
                  ${build.cost.toFixed(2)}
                </Typography>
                <StarIcon className="text-yellow-500" />
                <Typography
                  variant="body2"
                  className={thirdSectionStyles.description}
                >
                  {build.description}
                </Typography>
                <div className={thirdSectionStyles.buttonGroup}>
                  <Button
                    sx={thirdSectionStyles.buttonPrimary}
                    variant="outlined"
                    size="small"
                  >
                    Details
                  </Button>
                  <Button
                    sx={thirdSectionStyles.buttonSecondary}
                    variant="contained"
                    size="small"
                  >
                    Add to Build
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildsThirdSection;
