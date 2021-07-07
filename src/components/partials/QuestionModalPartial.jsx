import Grid from "@material-ui/core/Grid";
import { Delete } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

import QA from "../elements/QA";
import DropdownButton from "../elements/DropdownButton";
import Image from "../elements/Image";
import CustomButton from "../elements/CustomButton";
import Text from "../elements/Text";
import CheckboxOther from "../elements/CheckboxOther";

const useStyles = makeStyles({
  imgSize: {
    width: "100px",
    // marginTop: 30,
    // float: "right",
  },
  customB: {
    // float: "right",
    // margin: 30,
  },
  DDD: {
    marginTop: 20,
  },
  numberStyle: {
    color: "#000",
    border: "2px solid #000",
    borderRadius: 50,
    paddingRight: 5,
    paddingLeft: 5,
  },
  endGrid: {
    marginTop: 110,
  },
});

const QuestionModalPartial = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container direction="column">
        <Grid item container direction="row">
          <Grid item xs={4}>
            <QA label="Ouestion" />
          </Grid>
          <Grid item className={classes.DDD} xs={4}>
            <DropdownButton options={["Image question", "Text question"]} />
          </Grid>
          <Grid item className={classes.DDD} xs={4}>
            <DropdownButton options={["Single choice", "Multi choice"]} />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <Text
              classStyle={classes.numberStyle}
              tag="p"
              text="1"
              variant="body2"
            />
          </Grid>
          <Grid item md={4} sm={4} xs={4}>
            <QA label="Answer" />
          </Grid>
          <Grid item md={2} sm={2} xs={2}>
            <Image classStyle={classes.imgSize} img="/images/Neon.jpg" />
          </Grid>
          <Grid item md={2} sm={2} xs={2}>
            <CustomButton
              classStyle={classes.customB}
              Text="upload photo"
              variant="outlined"
              colors="defult"
            />
          </Grid>
          <Grid item md={2} sm={2} xs={2}>
            <CustomButton
              classStyle={classes.customB}
              Text="Delete"
              variant="outlined"
              colors="secondary"
              Icons={<Delete />}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <Text
              classStyle={classes.numberStyle}
              tag="p"
              text="2"
              variant="body2"
            />
          </Grid>
          <Grid item md={4} sm={4} xs={4}>
            <QA label="Answer" />
          </Grid>
          <Grid item md={2} sm={2} xs={2}>
            <Image classStyle={classes.imgSize} img="/images/Neon.jpg" />
          </Grid>
          <Grid item md={2} sm={2} xs={2}>
            <CustomButton
              classStyle={classes.customB}
              Text="upload photo"
              variant="outlined"
              colors="defult"
            />
          </Grid>
          <Grid item md={2} sm={2} xs={2}>
            <CustomButton
              classStyle={classes.customB}
              Text="Delete"
              variant="outlined"
              colors="secondary"
              Icons={<Delete />}
            />
          </Grid>
          <Grid item container direction="row">
            <Grid item>
              <CheckboxOther />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justify="center"
          className={classes.endGrid}
        >
          <Grid item item md={2} sm={2} xs={2}>
            <CustomButton
              classStyle={classes.customB}
              Text="add"
              variant="outlined"
              colors="defult"
            />
          </Grid>
          <Grid item item md={2} sm={2} xs={2}>
            <CustomButton
              classStyle={classes.customB}
              Text="save"
              variant="outlined"
              colors="primary"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default QuestionModalPartial;
