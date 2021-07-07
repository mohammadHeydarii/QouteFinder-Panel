import React from "react";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import AnswerButton from "../elements/AnswerButton";

const columns = [
  { id: "name", label: "NAME", minWidth: 100 },
  {
    id: "email",
    label: "Email",
    minWidth: 170,
  },
  {
    id: "phonenumber",
    label: "Phone Number",
    minWidth: 170,
  },
  {
    id: "answer",
    label: "",
    minWidth: 170,
  },
];

function createData(name, email, phonenumber, answer) {
  return { name, email, phonenumber, answer };
}

const rows = [
  createData(
    "Mohammad Heydari",
    "didgahcompany@gmail.com",
    "09211111111",

    <AnswerButton />
  ),
  createData(
    "Mohammad Heydari",
    "didgahcompany@gmail.com",
    "09211111111",

    <AnswerButton />
  ),
  createData(
    "Mohammad Heydari",
    "didgahcompany@gmail.com",
    "09211111111",

    <AnswerButton />
  ),
  createData(
    "Mohammad Heydari",
    "didgahcompany@gmail.com",
    "09211111111",

    <AnswerButton />
  ),
  createData(
    "Mohammad Heydari",
    "didgahcompany@gmail.com",
    "09211111111",

    <AnswerButton />
  ),
  createData(
    "Mohammad Heydari",
    "didgahcompany@gmail.com",
    "09211111111",

    <AnswerButton />
  ),
  createData(
    "Mohammad Heydari",
    "didgahcompany@gmail.com",
    "09211111111",

    <AnswerButton />
  ),
  createData(
    "Mohammad Heydari",
    "didgahcompany@gmail.com",
    "09211111111",

    <AnswerButton />
  ),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  marginB: {
    marginRight: 20,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
