import Container from "react-bootstrap/Container";
import AddressField from "./AddressField";
import { Col, Row } from "react-bootstrap";
import RoomTypeSelect from "./RoomTypeSelect";
import useAddress from "../../../viewmodel/hooks/address/useAddress";

const Address = () => {
  const {
    street,
    buildingNumber,
    roomType,
    handleStreetChange,
    handleBuildingNumberChange,
    handleRoomTypeChange,
  } = useAddress();

  return (
    <Container>
      <Row>
        <Col>
          <AddressField
            desc={"Улица"}
            placeholder={"Название улицы"}
            defaultValue={street}
            onChange={handleStreetChange}
          />
        </Col>
        <Col>
          <AddressField
            desc={"Дом"}
            placeholder={"Номер дома"}
            defaultValue={buildingNumber}
            onChange={handleBuildingNumberChange}
          />
        </Col>
        <Col>
          <RoomTypeSelect
            placeholder={roomType ? roomType : "Тип помещения"}
            onChange={handleRoomTypeChange}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Address;