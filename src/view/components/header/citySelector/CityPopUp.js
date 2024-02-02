import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material/";
import CityAutocomplete from "./CityAutocomplete";

const CityPopUp = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle />
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <Close />
      </IconButton>
      <DialogContent>
        <CityAutocomplete />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} />
      </DialogActions>
    </Dialog>
  );
};

export default CityPopUp;
