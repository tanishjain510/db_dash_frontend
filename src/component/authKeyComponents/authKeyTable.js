import React from "react";
import Dropdown from "../dropdown";
import {
  Table,
  TableBody,
  Box,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
} from "@mui/material";



function createData(name, access, scope, datacreated, createdby, dropdown) {
  return { name, access, scope, datacreated, createdby, dropdown };
}


const rows = [
  createData(
    "Frozen yoghurt",
    159,
    6.0,
    24,
    4.0,
    <Dropdown first={"Edit"} second={"Generated Key"} third={"Delete"} />
  ),
];

export default function AuthKey() {
  return (
    <>
      <Box sx={{ border: 1, m: 1, boxShadow: 10 }}>
        <TableContainer
          component={Paper}
          sx={{ width: "100%", maxHeight: 533 }}
        >
          <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Access</TableCell>
                <TableCell>Scopes</TableCell>
                <TableCell>Data Created</TableCell>
                <TableCell>Created By</TableCell>
                <TableCell> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.access}</TableCell>
                  <TableCell>{row.scope}</TableCell>
                  <TableCell>{row.datacreated}</TableCell>
                  <TableCell>{row.createdby}</TableCell>
                  <TableCell>{row.dropdown}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}