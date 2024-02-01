import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";

const CityAutocomplete = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(["Кемерово", "Новосибирск", "Москва"]);

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
      options={options}
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
