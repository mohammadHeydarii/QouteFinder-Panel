import { Typography } from "@material-ui/core";

const Text = ({ classStyle, text, tag, variant }) => {
  return (
    <>
      <Typography className={classStyle} component={tag} variant={variant}>
        {text}
      </Typography>
    </>
  );
};

export default Text;
