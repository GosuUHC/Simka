import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const ButtonWithBadge = ({ name, count, path }) => {
  const onClick = () => {
    // router to path
  };

  return (
    <Button variant="light" size="lg" onClick={onClick}>
      {name} <Badge bg="secondary">{count}</Badge>
    </Button>
  );
};

export default ButtonWithBadge;
