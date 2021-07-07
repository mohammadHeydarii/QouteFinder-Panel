import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
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

import AwardsModalPartial from "../partials/AwardsModalPartial";

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

const FloatingButton2 = () => {
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
        <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </Fab>
        <Dialog
          fullWidth={true}
          maxWidth="lg"
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            <AwardsModalPartial />
          </DialogTitle>
        </Dialog>
      </div>
    </>
  );
};

export default FloatingButton2;
