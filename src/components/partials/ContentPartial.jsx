import { Grid, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import Input from "../elements/Input";
import CustomButton from "../elements/CustomButton";
import Text from "../elements/Text";
import Image from "../elements/Image";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
  },
  inputStyle: {
    width: "60vw",
    marginTop: 60,
  },
  imgSize: {
    width: "160px",
  },
  itemRow: {
    width: "80vw",

    marginTop: 70,
  },
});

const ContentPartial = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        className={classes.root}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={10}>
          <Input classStyle={classes.inputStyle} label="title" />
        </Grid>
        <Grid item xs={10}>
          <Input classStyle={classes.inputStyle} rows={4} label="description" />
        </Grid>
        <Grid item xs={10} className={classes.itemRow}>
          <Grid container direction="row" justify="space-between">
            <Grid item xs={4}>
              <Text tag="p" variant="h6" text="upload image" />
              <CustomButton
                Text="Browse"
                variant="contained"
                colors="primary"
              />
            </Grid>
            <Grid item xs={4} justify="flex-end">
              <Image classStyle={classes.imgSize} img="/images/Neon.jpg" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ContentPartial;
