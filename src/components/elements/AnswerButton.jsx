import React from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@material-ui/core";

import Draggable from "react-draggable";

import { makeStyles } from "@material-ui/core/styles";
import AnswerModalPartial from "../partials/AnswerModalPartial";

const useStyles = makeStyles({
  textShow: {
    textTransform: "capitalize",
  },
});

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const AnswerButton = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <>
      <div>
        <Button
          className={classes.textShow}
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
        >
          Answer
        </Button>
        <Dialog
          fullWidth={true}
          maxWidth="lg"
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            <AnswerModalPartial />
          </DialogTitle>
        </Dialog>
      </div>
    </>
  );
};

export default AnswerButton;
