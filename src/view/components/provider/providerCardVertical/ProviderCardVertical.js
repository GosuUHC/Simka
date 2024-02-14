import { Card, Stack } from "react-bootstrap";
import { Fragment } from "react";

const ProviderCardVertical = ({ components }) => {
  return (
    <Card className="border-0" body>
      <Stack>
        {components.map((component, i) => {
          return (
            <Fragment key={i}>
              {component}
              {i !== components.length - 1 && <hr />}
            </Fragment>
          );
        })}
      </Stack>
    </Card>
  );
};

export default ProviderCardVertical;
