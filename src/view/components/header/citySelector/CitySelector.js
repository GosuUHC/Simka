import { useState } from "react";
import { IconButton } from "@mui/material";
import { Home as HomeIcon } from "@mui/icons-material";
import CityPopUp from "./CityPopUp";

const CitySelector = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <HomeIcon />
      </IconButton>
      <CityPopUp open={open} handleClose={handleClose} />
    </>
  );
};

export default CitySelector;
