import AddressField from "./AddressField";
import { Col, Row } from "react-bootstrap";
import RoomTypeSelect from "./RoomTypeSelect";
import useAddress from "../../../viewmodel/hooks/address/useAddress";
import Button from "react-bootstrap/Button";

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
    <Row className="pe-0">
      <Col xs={10} md={5} lg={5} className="p-md-1 p-sm-1">
        <AddressField
          desc={"Улица"}
          placeholder={"Название улицы"}
          defaultValue={street}
          onChange={handleStreetChange}
        />
      </Col>
      <Col xs={10} md={4} lg={3} className="p-md-1 p-sm-1">
        <AddressField
          desc={"Дом"}
          placeholder={"Номер дома"}
          defaultValue={buildingNumber}
          onChange={handleBuildingNumberChange}
        />
      </Col>
      <Col xs={10} md={4} lg={2} className="p-md-1 p-sm-1">
        <RoomTypeSelect
          placeholder={roomType ? roomType : "Тип помещения"}
          onChange={handleRoomTypeChange}
        />
      </Col>
      <Col xs={10} md={4} lg={2} className="p-md-1 p-sm-1">
        <Button variant="secondary">Найти провайдеров</Button>
      </Col>
    </Row>
  );
};

export default Address;
