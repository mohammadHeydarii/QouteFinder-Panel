import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Delete } from "@material-ui/icons";

const useStyles = makeStyles({
  textButton: {
    fontWeight: "bold",
  },
});

const CustomButton = ({ variant, colors, Icons, Text, classStyle }) => {
  const classes = useStyles();
  return (
    <>
      <Button
        className={classes.textButton}
        variant={variant}
        color={colors}
        className={classStyle}
        // startIcon={<Delete />}
        startIcon={Icons}
      >
        {Text}
      </Button>
    </>
  );
};

export default CustomButton;
