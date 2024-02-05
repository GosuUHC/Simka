import Form from "react-bootstrap/Form";
import Typeahead from "react-bootstrap-typeahead/types/core/Typeahead";
import useAddress from "../../../../viewmodel/hooks/address/useAddress";

const CityAutocomplete = () => {
  const { city, cityOptions, handleCityChange } = useAddress();

  return (
    <Form.Group>
      <Form.Label>City selecttt</Form.Label>
      <Typeahead
        id="basic-typeahead-single"
        labelKey="name"
        onChange={(e) => handleCityChange(e.currentTarget.value)}
        options={cityOptions}
        placeholder="Choose a city"
      ></Typeahead>
    </Form.Group>
  );
};

export default CityAutocomplete;
