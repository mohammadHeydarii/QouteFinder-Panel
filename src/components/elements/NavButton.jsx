import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textShow: {
    textTransform: "capitalize",
    fontWeight: "bold",
    color: "#000",
  },
});

const NavButton = ({ Text }) => {
  const classes = useStyles();

  return (
    <>
      <Button className={classes.textShow} href="#text-buttons" color="primary">
        {Text}
      </Button>
    </>
  );
};

export default NavButton;
