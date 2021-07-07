import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Image from "../elements/Image";
import NavButton from "../elements/NavButton";

const useStyles = makeStyles({
  imgSize: {
    width: "150px",
    marginLeft: 20,
  },
  linkStyle: {
    textDecoration: "none",
  },
  item: {
    marginBottom: 30,
    width: "300%",
    marginLeft: 15,
    "&:hover": {
      backgroundColor: "#DDFFE7",
    },
  },
});
const SidebarPartial = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid item>
          <Image classStyle={classes.imgSize} img="/images/vvv.png" />
        </Grid>

        <nav>
          <Grid item className={classes.item}>
            <Link className={classes.linkStyle} to="/">
              <NavButton Text="Banner" />
            </Link>
          </Grid>
          <Grid item className={classes.item}>
            <Link className={classes.linkStyle} to="/offer">
              <NavButton Text="Offer" />
            </Link>
          </Grid>
          <Grid item className={classes.item}>
            <Link className={classes.linkStyle} to="/Blog">
              <NavButton Text="Blog" />
            </Link>
          </Grid>
          <Grid item className={classes.item}>
            <Link className={classes.linkStyle} to="Question">
              {" "}
              <NavButton Text="Question" />
            </Link>
          </Grid>
          <Grid item className={classes.item}>
            <Link className={classes.linkStyle} to="/Users">
              <NavButton Text="Users" />
            </Link>
          </Grid>
          <Grid item className={classes.item}>
            <Link className={classes.linkStyle} to="/Awards">
              <NavButton Text="Awards" />
            </Link>
          </Grid>
        </nav>
      </Grid>
    </>
  );
};

export default SidebarPartial;
