import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import SidebarPartial from "../partials/SidebarPartial";

const useStyles = makeStyles({
  root: {
    height: "100vh",
  },
  bgItem: {
    backgroundColor: "#ccc",
  },
  contentSize: {
    width: "70vw",
  },
});

const PanelLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={2}>
          <SidebarPartial />
        </Grid>
        <Grid
          item
          container
          className={classes.bgItem}
          direction="row"
          alignItems="center"
          justify="center"
          xs={10}
        >
          <Grid item className={classes.contentSize}>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PanelLayout;
