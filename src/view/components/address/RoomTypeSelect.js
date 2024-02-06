import Form from "react-bootstrap/Form";

const options = ["В квартиру", "В частный дом", "В офис"];

const RoomTypeSelect = ({ placeholder, onChange }) => {
  return (
    <Form.Select
      defaultValue={placeholder}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled hidden>
        {placeholder}
      </option>
      {options.map((opt, index) => (
        <option key={index} value={opt}>
          {opt}
        </option>
      ))}
    </Form.Select>
  );
};


export default RoomTypeSelect;
