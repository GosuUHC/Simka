import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CityTypeahead from "./CityTypeahead";

const CityPopUp = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title"></Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h4>Выбор города подключения</h4>
        <CityTypeahead />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CityPopUp;
