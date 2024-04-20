import Badge from "react-bootstrap/Badge";

const Tags = ({ colorButton, textButton }) => {
  return (
    <>
      <Badge className="badge" bg={colorButton}>
        {textButton}
      </Badge>
    </>
  );
};
export default Tags;
