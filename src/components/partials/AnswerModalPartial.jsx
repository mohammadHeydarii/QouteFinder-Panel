import { Grid } from "@material-ui/core";
import Text from "../elements/Text";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textAnswers: {
    color: "blue",
    marginTop: 10,
  },
  marginItems: {
    margin: 50,
  },
});

const AnswerModalPartial = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="column">
        <Grid item container direction="row">
          <Grid item xs={5}>
            <Text text="Question" tag="p" variant="h4" />
          </Grid>
          <Grid item xs={5}>
            <Text text="Answer" tag="p" variant="h4" />
          </Grid>
        </Grid>
        <Grid item container direction="row" className={classes.marginItems}>
          <Grid item xs={5}>
            <Text
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
              tag="p"
              variant="body1"
            />
          </Grid>
          <Grid item xs={5}>
            <Text
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
              tag="p"
              variant="body1"
              classStyle={classes.textAnswers}
            />
            <Text
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
              tag="p"
              variant="body1"
              classStyle={classes.textAnswers}
            />
            <Text
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
              tag="p"
              variant="body1"
              classStyle={classes.textAnswers}
            />
          </Grid>
        </Grid>
        <Grid item container direction="row" className={classes.marginItems}>
          <Grid item xs={5}>
            <Text
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
              tag="p"
              variant="body1"
            />
          </Grid>
          <Grid item xs={5}>
            <Text
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
              tag="p"
              variant="body1"
              classStyle={classes.textAnswers}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AnswerModalPartial;
