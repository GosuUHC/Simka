import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import useAddress from "../../../../viewmodel/hooks/address/useAddress";

const CityAutocomplete = () => {
  const [open, setOpen] = useState(false);
  const { city, cityOptions, handleCityChange } = useAddress();

  console.log(`got city: ${city}`);

  const onCityBlur = (event) => {
    console.log(`onSelect city: ${event.target.value}`);
    handleCityChange(event.target.value);
  };

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
      onBlur={onCityBlur}
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
