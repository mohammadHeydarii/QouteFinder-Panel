import { Checkbox, FormControlLabel } from "@material-ui/core";

const CheckboxOther = () => {
  return (
    <>
      <FormControlLabel
        value="Other"
        control={<Checkbox color="primary" />}
        label="Other"
        labelPlacement="end"
      />
    </>
  );
};

export default CheckboxOther;
