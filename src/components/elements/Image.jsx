const Image = ({ img, classStyle }) => {
  return (
    <>
      <img className={classStyle} src={img} />
    </>
  );
};

export default Image;
