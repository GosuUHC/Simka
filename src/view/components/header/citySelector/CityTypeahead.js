import Form from "react-bootstrap/Form";
import { Typeahead } from "react-bootstrap-typeahead/";
import useAddress from "../../../../viewmodel/hooks/address/useAddress";

const CityTypeahead = () => {
  const { cityOptions, handleCityChange } = useAddress();

  return (
    <Form.Group>
      <Typeahead
        id="city-typeahead-single"
        labelKey="name"
        onChange={(selected) => handleCityChange(selected)}
        options={cityOptions}
        placeholder="Найти город"
      ></Typeahead>
    </Form.Group>
  );
};

export default CityTypeahead;
