import { Card,  Row } from "react-bootstrap";
import { Fragment } from "react";

const ProviderCardHorizontal = ({ components }) => {
  return (
    <Card className="border-0" body>
      <Row>
        {components.map((component, i) => {
          return <Fragment key={i}>{component}</Fragment>;
        })}
      </Row>
    </Card>
  );
};

export default ProviderCardHorizontal;
