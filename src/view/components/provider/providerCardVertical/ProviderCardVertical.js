import { Card } from "react-bootstrap";
import { Fragment } from "react";

const ProviderCardVertical = ({ components }) => {
  return (
    <Card className="border-0">
      <Card.Body className="d-flex flex-column">
        {components.map((component, i) => {
          return (
            <Fragment key={i}>
              {component}
              {i !== components.length - 1 && <hr />}
            </Fragment>
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default ProviderCardVertical;
