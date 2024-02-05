import Form from "react-bootstrap/Form";
import Typeahead from "react-bootstrap-typeahead/types/core/Typeahead";
import useAddress from "../../../../viewmodel/hooks/address/useAddress";

const CityAutocomplete = () => {
  const { city, cityOptions, handleCityChange } = useAddress();

  return (
    <>
      <Form.Group>
        <Form.Label>City select</Form.Label>
        <Typeahead
          autoFocus
          id="basic-typeahead-single"
          labelKey="name"
          options={cityOptions}
          placeholder="Choose a city"
          selected={city}
          onBlur={(e) => handleCityChange(e.currentTarget.value)}
        ></Typeahead>
      </Form.Group>
    </>
  );
};

export default CityAutocomplete;
