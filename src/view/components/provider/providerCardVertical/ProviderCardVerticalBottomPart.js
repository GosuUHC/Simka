import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ProviderCardVerticalBottomPart = ({ price, speed, speedUnits }) => {
  return (
    <>
      <Row>
        <span>Самый дешевый тариф</span>
        <span className="d-flex justify-content-end">
          <div>
            <h6 className="d-inline">от</h6>{" "}
            <div className="numberTag">{price}</div>{" "}
            <span className="text-muted">руб./мес.</span>{" "}
          </div>
        </span>
      </Row>
      <hr />
      <Row>
        <span>Самая высокая скорость</span>
        <span className="d-flex justify-content-end">
          <div>
            <h6 className=" d-inline">до</h6>{" "}
            <div className="numberTag">{speed}</div>{" "}
            <span className="text-muted">{speedUnits}</span>
          </div>
        </span>
      </Row>
      <Row>
        <Button variant="secondary">Подключить</Button>
      </Row>
    </>
  );
};

export default ProviderCardVerticalBottomPart;
