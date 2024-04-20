import Card from "react-bootstrap/Card";
import Tags from "./Tags";
const MyCard = ({ image, titulo, descripcion, colorButton, textButton }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} className="image" />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Tags colorButton={colorButton} textButton={textButton} />
        </Card.Body>
      </Card>
    </>
  );
};
export default MyCard;
