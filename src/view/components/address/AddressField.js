import { InputGroup } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead/";

const AddressField = ({ defaultValue, onChange, desc, placeholder }) => {
  return (
    <>
      <InputGroup>
        <InputGroup.Text>{desc}:</InputGroup.Text>
        <Typeahead
          id={`${desc}-typeahead-single`}
          options={[]}
          placeholder={placeholder}
          defaultSelected={[defaultValue]}
          onInputChange={(text) => onChange(text)}
        />
      </InputGroup>
    </>
  );
};

export default AddressField;
