import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Delete } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";

import CustomButton from "../elements/CustomButton";
import EditButton from "../elements/EditButton";
import FloatingButton from "../elements/FloatingButton";

const columns = [
  { id: "title", label: "Title", minWidth: 200 },
  {
    id: "QuestionType",
    label: "Question Type",
    minWidth: 170,
  },
  {
    id: "SingleMulti",
    label: "Single/Multiple",
    minWidth: 170,
  },
  {
    id: "ButtonEdit",
    label: "",
    minWidth: 100,
  },
  {
    id: "ButtonDelete",
    label: "",
    minWidth: 100,
  },
];

function createData(
  title,
  QuestionType,
  SingleMulti,
  ButtonEdit,
  ButtonDelete
) {
  return { title, QuestionType, SingleMulti, ButtonEdit, ButtonDelete };
}

const rows = [
  createData(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
    "Image question",
    "Single choice",
    <EditButton />,
    <CustomButton
      Text="Delete"
      variant="outlined"
      colors="secondary"
      Icons={<Delete />}
    />
  ),
  createData(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    "Image question",
    "Single choice",
    <EditButton />,
    <CustomButton
      Text="Delete"
      variant="outlined"
      colors="secondary"
      Icons={<Delete />}
    />
  ),
  createData(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    "Image question",
    "Single choice",
    <EditButton />,
    <CustomButton
      Text="Delete"
      variant="outlined"
      colors="secondary"
      Icons={<Delete />}
    />
  ),
  createData(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    "Image question",
    "Single choice",
    <EditButton />,
    <CustomButton
      Text="Delete"
      variant="outlined"
      colors="secondary"
      Icons={<Delete />}
    />
  ),
  createData(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    "Image question",
    "Single choice",
    <EditButton />,
    <CustomButton
      Text="Delete"
      variant="outlined"
      colors="secondary"
      Icons={<Delete />}
    />
  ),
  createData(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    "Image question",
    "Single choice",
    <EditButton />,
    <CustomButton
      Text="Delete"
      variant="outlined"
      colors="secondary"
      Icons={<Delete />}
    />
  ),
  createData(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    "Image question",
    "Single choice",
    <EditButton />,
    <CustomButton
      Text="Delete"
      variant="outlined"
      colors="secondary"
      Icons={<Delete />}
    />
  ),
  createData(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    "Image question",
    "Single choice",
    <EditButton />,
    <CustomButton
      Text="Delete"
      variant="outlined"
      colors="secondary"
      Icons={<Delete />}
    />
  ),
  createData(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    "Image question",
    "Single choice",
    <EditButton />,
    <CustomButton
      Text="Delete"
      variant="outlined"
      colors="secondary"
      Icons={<Delete />}
    />
  ),
  createData(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    "Image question",
    "Single choice",
    <EditButton />,
    <CustomButton
      Text="Delete"
      variant="outlined"
      colors="secondary"
      Icons={<Delete />}
    />
  ),
  createData(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    "Image question",
    "Single choice",
    <EditButton />,
    <CustomButton
      Text="Delete"
      variant="outlined"
      colors="secondary"
      Icons={<Delete />}
    />
  ),
  createData(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    "Image question",
    "Single choice",
    <EditButton />,
    <CustomButton
      Text="Delete"
      variant="outlined"
      colors="secondary"
      Icons={<Delete />}
    />
  ),
  createData(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    "Image question",
    "Single choice",
    <EditButton />,
    <CustomButton
      Text="Delete"
      variant="outlined"
      colors="secondary"
      Icons={<Delete />}
    />
  ),
  createData(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    "Image question",
    "Single choice",
    <EditButton />,
    <CustomButton
      Text="Delete"
      variant="outlined"
      colors="secondary"
      Icons={<Delete />}
    />
  ),
  createData(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    "Image question",
    "Single choice",
    <EditButton />,
    <CustomButton
      Text="Delete"
      variant="outlined"
      colors="secondary"
      Icons={<Delete />}
    />
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
      <Grid container justify="flex-end">
        <Grid item className={classes.marginB}>
          {" "}
          <FloatingButton />
        </Grid>
      </Grid>
    </Paper>
  );
}
