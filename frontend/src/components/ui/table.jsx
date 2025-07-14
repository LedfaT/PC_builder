import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Typography,
  Box,
  Button,
} from "@mui/material";
import parseHeader from "@utils/parseHeader";
import EditIcon from "@mui/icons-material/Edit";

export default function DataTable({
  headers = [],
  page,
  setPage,
  totalPages,
  rowsPerPage,
  setRowsPerPage,
  data = [],
  onEdit,
}) {
  const paginatedData = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="admin table">
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell key={header}>{parseHeader(header)}</TableCell>
              ))}
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                {headers.map((headerKey) => (
                  <TableCell key={headerKey}>
                    {headerKey === "image" &&
                    typeof row[headerKey] === "string" ? (
                      <img
                        src={row[headerKey]}
                        alt="preview"
                        style={{
                          width: 64,
                          height: 64,
                          borderRadius: 4,
                        }}
                      />
                    ) : (
                      row[headerKey]
                    )}
                  </TableCell>
                ))}
                <TableCell align="right">
                  <IconButton onClick={() => onEdit(row)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        flexWrap="wrap"
        gap={2}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <Typography>Mount on page:</Typography>
          <TextField
            type="number"
            inputProps={{ min: 1 }}
            value={rowsPerPage}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (isNaN(value)) return;

              if (value <= 0) {
                setRowsPerPage(1);
              } else {
                setRowsPerPage(value);
              }
            }}
            size="small"
            sx={{ width: 80 }}
          />
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <Button
            variant="outlined"
            onClick={() => setPage((p) => p - 1)}
            disabled={page <= 0}
          >
            ← previous
          </Button>

          <Typography>
            Page {page + 1} from {totalPages || 1}
          </Typography>

          <Button
            variant="outlined"
            onClick={() => setPage((p) => p + 1)}
            disabled={page + 1 >= totalPages}
          >
            Next →
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
