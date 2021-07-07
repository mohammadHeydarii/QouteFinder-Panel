import React from "react";
import {
  Grid,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textShow: {
    textTransform: "capitalize",
  },
});

const DropdownButton = ({ options }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <ButtonGroup
            variant="outlined"
            color="default"
            ref={anchorRef}
            aria-label="split button"
          >
            <Button className={classes.textShow} onClick={handleClick}>
              {options[selectedIndex]}
            </Button>
            <Button
              color="default"
              size="small"
              aria-controls={open ? "split-button-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={handleToggle}
            >
              <ArrowDropDown />
            </Button>
          </ButtonGroup>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="split-button-menu">
                      {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          selected={index === selectedIndex}
                          onClick={(event) => handleMenuItemClick(event, index)}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Grid>
      </Grid>
    </>
  );
};

export default DropdownButton;
