import { useState } from "react";
import { House } from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
import useAddress from "../../../../viewmodel/hooks/address/useAddress";
import CityPopUp from "./CityPopUp";

const CitySelector = () => {
  const [show, setShow] = useState(false);
  const { city } = useAddress();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link onClick={handleShow}>
        <House></House>
        {` г. ${city}`}
      </Nav.Link>
      <CityPopUp show={show} handleClose={handleClose} />
    </>
  );
};

export default CitySelector;
