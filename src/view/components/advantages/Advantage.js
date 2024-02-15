import { Col, Image, Placeholder, Row, Stack } from "react-bootstrap";

const Advantage = ({ imgSrc, title, desc }) => {
  return (
    <Row>
      <Col xs="auto">
        <div
          className="rounded-circle overflow-hidden"
          style={{ width: "40px", height: "40px" }}
        >
          {imgSrc ? (
            <Image src={imgSrc} className="w-100 h-auto" />
          ) : (
            <Placeholder className="w-100 h-100"></Placeholder>
          )}
        </div>
      </Col>
      <Col>
        <Stack>
          <h6>{title}</h6>
          <span className="text-muted">{desc}</span>
        </Stack>
      </Col>
    </Row>
  );
};

export default Advantage;
