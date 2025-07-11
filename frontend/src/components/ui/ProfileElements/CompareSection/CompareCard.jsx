import { Card, CardContent, CardHeader, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography, Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styles } from "./CompareSection.styles";

const BuildComparisonCard = ({ buildComparisonData, handleRemoveBuild1, handleRemoveBuild2 }) => {
  return (
    <Card sx={{ p: 2, borderRadius: 3, boxShadow: 3 }}>
      <CardHeader
        title={<Typography variant="h5" fontWeight="bold">Build Comparison</Typography>}
        sx={{ pb: 1 }}
      />

      <CardContent sx={{ px: 0 }}>
        <Table size="small" sx={{ minWidth: "100%", borderSpacing: "0 8px", borderCollapse: "separate" }}>
          <TableHead>
            <TableRow>
              <TableCell sx={styles.theadCell} width="25%">Component</TableCell>
              <TableCell width="25%">
                <Box sx={styles.headerFlex}>
                  <Typography variant="body2" fontWeight="600">Ultimate Gaming Rig</Typography>
                  <IconButton size="small" onClick={handleRemoveBuild1}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Box>
              </TableCell>
              <TableCell width="25%" />
              <TableCell width="25%">
                <Box sx={styles.headerFlex}>
                  <Typography variant="body2" fontWeight="600">Mid-Range Powerhouse</Typography>
                  <IconButton size="small" onClick={handleRemoveBuild2}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {buildComparisonData.map(({ component, build1, build2 }, idx) => (
              <TableRow key={idx} sx={{ backgroundColor: "#f9fafb", borderRadius: 2 }}>
                <TableCell sx={styles.componentCell}>{component}</TableCell>
                <TableCell sx={styles.valueCell}>{build1}</TableCell>
                <TableCell sx={styles.valueCell}></TableCell>
                <TableCell sx={styles.valueCell}>{build2}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default BuildComparisonCard;