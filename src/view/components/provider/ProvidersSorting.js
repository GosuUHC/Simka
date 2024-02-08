import Button from "react-bootstrap/Button";
import useAddress from "../../../viewmodel/hooks/address/useAddress";
import useProviders from "../../../viewmodel/hooks/providers/useProviders";
import { Col, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { availableSortingOptions } from "../../../transport/providers";

const ProvidersSorting = () => {
  const { city } = useAddress();
  const { sortBy, providersData, handleSortByChange } = useProviders();

  return (
    <Stack gap={1}>
      <Col>
        <h3>Провайдеры в г. {city}</h3>
      </Col>
      <Col>
        В вашем городе:{" "}
        <Button variant="link" bsPrefix="info" as="a">
          {city},
        </Button>{" "}
        найдено {providersData.length} провайдеров
      </Col>
      <Col className="ms-auto">
        <Form.Select
          defaultValue={sortBy}
          onChange={(e) => handleSortByChange(e.target.value)}
        >
          <option value={availableSortingOptions.POPULAR}>Популярные</option>
          <option value={availableSortingOptions.CHEAP}>Экономные</option>
          <option value={availableSortingOptions.EXPENSIVE}>Дорогие</option>
        </Form.Select>
      </Col>
    </Stack>
  );
};

export default ProvidersSorting;
