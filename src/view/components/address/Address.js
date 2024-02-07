import Container from "react-bootstrap/Container";
import AddressField from "./AddressField";
import { Col, Row, Stack } from "react-bootstrap";
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
    <Container>
      <Stack direction="horizontal" gap={3}>
        <Col>
          <AddressField
            desc={"Улица"}
            placeholder={"Название улицы"}
            defaultValue={street}
            onChange={handleStreetChange}
          />
        </Col>
        <Col xs="auto">
          <AddressField
            desc={"Дом"}
            placeholder={"Номер дома"}
            defaultValue={buildingNumber}
            onChange={handleBuildingNumberChange}
          />
        </Col>
        <Col xs="auto">
          <RoomTypeSelect
            placeholder={roomType ? roomType : "Тип помещения"}
            onChange={handleRoomTypeChange}
          />
        </Col>
        <Col xs="auto">
          <Button variant="secondary">Найти провайдеров</Button>
        </Col>
      </Stack>
    </Container>
  );
};

export default Address;
