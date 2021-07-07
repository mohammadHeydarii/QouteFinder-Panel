import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import Input from "../elements/Input";
import Image from "../elements/Image";
import CustomButton from "../elements/CustomButton";

const useStyles = makeStyles({
  imgSize: {
    width: "100px",
  },
  marginItems: {
    margin: 50,
  },
});

const AwardsModalPartial = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container direction="column">
        <Grid item container direction="row" className={classes.marginItems}>
          <Grid item xs={5}>
            <Input label="Name" />
          </Grid>
          <Grid item xs={3}>
            <Image classStyle={classes.imgSize} img="/images/Neon.jpg" />
          </Grid>
          <Grid item xs={2}>
            <CustomButton
              Text="upload photo"
              variant="outlined"
              colors="defult"
            />
          </Grid>
          <Grid item xs={2}>
            <CustomButton Text="save" variant="outlined" colors="primary" />
          </Grid>
        </Grid>
        <Grid item container direction="row" className={classes.marginItems}>
          <Grid item xs={5}>
            <Input label="Name" />
          </Grid>
          <Grid item xs={3}>
            <Image classStyle={classes.imgSize} img="/images/Neon.jpg" />
          </Grid>
          <Grid item xs={2}>
            <CustomButton
              Text="upload photo"
              variant="outlined"
              colors="defult"
            />
          </Grid>
          <Grid item xs={2}>
            <CustomButton Text="save" variant="outlined" colors="primary" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AwardsModalPartial;
