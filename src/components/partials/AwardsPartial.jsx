import React from "react";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

import CustomButton from "../elements/CustomButton";

import FloatingButton2 from "../elements/FloatingButton2";
import Image from "../elements/Image";

const columns = [
  { id: "name", label: "NAME", minWidth: 100 },
  {
    id: "photo",
    label: "Photo",
    minWidth: 170,
  },

  {
    id: "remove",
    label: "",
    minWidth: 170,
  },
];

function createData(name, photo, remove) {
  return { name, photo, remove };
}

const useStyles = makeStyles({
  imgSize: {
    width: "100px",
  },
  marginB: {
    marginRight: 20,
  },
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const rows = [
    createData(
      "Mohammad Heydari",
      <Image classStyle={classes.imgSize} img="/images/Neon.jpg" />,

      <CustomButton
        Text="Delete"
        variant="outlined"
        colors="secondary"
        Icons={<Delete />}
      />
    ),

    createData(
      "Mohammad Heydari",
      <Image classStyle={classes.imgSize} img="/images/Neon.jpg" />,

      <CustomButton
        Text="Delete"
        variant="outlined"
        colors="secondary"
        Icons={<Delete />}
      />
    ),

    createData(
      "Mohammad Heydari",
      <Image classStyle={classes.imgSize} img="/images/Neon.jpg" />,

      <CustomButton
        Text="Delete"
        variant="outlined"
        colors="secondary"
        Icons={<Delete />}
      />
    ),

    createData(
      "Mohammad Heydari",
      <Image classStyle={classes.imgSize} img="/images/Neon.jpg" />,

      <CustomButton
        Text="Delete"
        variant="outlined"
        colors="secondary"
        Icons={<Delete />}
      />
    ),

    createData(
      "Mohammad Heydari",
      <Image classStyle={classes.imgSize} img="/images/Neon.jpg" />,

      <CustomButton
        Text="Delete"
        variant="outlined"
        colors="secondary"
        Icons={<Delete />}
      />
    ),
    createData(
      "Mohammad Heydari",
      <Image classStyle={classes.imgSize} img="/images/Neon.jpg" />,

      <CustomButton
        Text="Delete"
        variant="outlined"
        colors="secondary"
        Icons={<Delete />}
      />
    ),
    createData(
      "Mohammad Heydari",
      <Image classStyle={classes.imgSize} img="/images/Neon.jpg" />,

      <CustomButton
        Text="Delete"
        variant="outlined"
        colors="secondary"
        Icons={<Delete />}
      />
    ),
  ];

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
          <FloatingButton2 />
        </Grid>
      </Grid>
    </Paper>
  );
}
