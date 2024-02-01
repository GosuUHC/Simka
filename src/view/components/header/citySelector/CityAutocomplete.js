import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useMainPage } from "../../../../viewmodel/hooks/main/mainPage";

const CityAutocomplete = () => {
  const [open, setOpen] = useState(false);
  const { city, cityOptions, handleCitySelect } = useMainPage();

  return (
    <Autocomplete
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option === value}
      getOptionLabel={(option) => option}
      options={cityOptions}
      value={city}
      onSelect={(e) => handleCitySelect(e.target)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Выбор города"
          InputProps={{
            ...params.InputProps,
          }}
        ></TextField>
      )}
    ></Autocomplete>
  );
};

export default CityAutocomplete;
