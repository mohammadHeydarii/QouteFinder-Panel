import { TextField } from "@material-ui/core";

const QA = ({ label }) => {
  return (
    <>
      <TextField
        multiline
        id="outlined-full-width"
        label={label}
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
    </>
  );
};

export default QA;
