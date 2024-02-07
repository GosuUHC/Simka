import { Card, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Fragment } from "react";

const ProviderCard = ({ components }) => {

  return (
    <Container>
      <Card body>
        <Stack direction="horizontal" gap={3}>
          {components.map((component, i) => {
            return (
              <Fragment key={i}>
                {component}
                {(i !== components.length - 1) && <div className="vr" />}
              </Fragment>
            );
          })}
        </Stack>
      </Card>
    </Container>
  );
};

export default ProviderCard;
