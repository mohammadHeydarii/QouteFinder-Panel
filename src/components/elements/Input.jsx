import { TextField } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

const Input = ({ label, classStyle, rows }) => {
  const classes = useStyles();
  return (
    <>
      <TextField
        multiline
        rows={rows}
        className={classStyle}
        label={label}
        variant="outlined"
        id="mui-theme-provider-outlined-input"
      />
    </>
  );
};

export default Input;
