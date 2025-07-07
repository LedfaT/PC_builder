import React from "react";
import {
  Dialog,
  DialogContent,
  Button,
  Chip,
  Box,
  Typography,
  Divider,
  Stack,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styles } from "./ComponentDetailsDialog.styles"; 

const ComponentDetailsDialog = ({ open, onClose, component }) => {
  if (!component) return null;

  const specifications = {
    Architecture: component.Architecture,
    Cache: component.cache,
    Clock: component.clock,
    Cores: component.cores,
    Threads: component.threads,
    "Vram Type": component.vram_type,
    "Vram Quantity": component.vram_quantity,
    Chipset: component.chipset,
    Socket: component.socket,
    "Size Type": component.type_size,
    "Memory Quantity": component.memory_quantity,
    "Memory Type": component.memory_type,
    "Radiator Type": component.radiator_type,
    "Reading Speed": component.reading_speed,
    "Write Speed": component.write_speed,
    "Fan Included": component.fan_included,
    "Fan Type": component.fan_type,
    Strength: component.strength,
    Sertificate: component.sertificate,
    "Heat Renoval": component.heat_removal,
    Generation: component.generation

  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth PaperProps={{ sx: styles.dialogPaper }}>
      {/* Header */}
      <Box sx={styles.header}>
        <Typography variant="h6" fontWeight="bold">
          {component.title}
        </Typography>
        <Box sx={styles.priceAndClose}>
          <Chip label={`$${component.cost}`} color="secondary" sx={styles.priceChip} />
          <Button onClick={onClose} sx={styles.closeButton}>
            <CloseIcon />
          </Button>
        </Box>
      </Box>

      {/* Content */}
      <DialogContent sx={styles.content}>
        <Stack direction="row" spacing={4}>
          {/* Image section */}
          <Box sx={styles.imageBox}>
            <Paper elevation={0} sx={styles.imagePaper}>
              {component.image ? (
                <img
                  src={component.image}
                  alt={component.title}
                  style={styles.image}
                />
              ) : (
                <Typography color="text.secondary">No Image</Typography>
              )}
            </Paper>
          </Box>

          {/* Info section */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Description
            </Typography>
            <Typography variant="body2" sx={styles.descriptionText}>
              {component.description}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Specifications
            </Typography>

            <Box component="table" sx={styles.specTable}>
              <tbody>
                {Object.entries(specifications).map(
                  ([key, value]) =>
                    value && (
                      <Box component="tr" key={key} sx={styles.specRow}>
                        <Box component="td" sx={styles.specKey}>
                          <Typography variant="body2">{key}</Typography>
                        </Box>
                        <Box component="td" sx={styles.specValue}>
                          <Typography variant="body2">{value}</Typography>
                        </Box>
                      </Box>
                    )
                )}
              </tbody>
            </Box>
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ComponentDetailsDialog;
