import Button from "react-bootstrap/Button";
import useAddress from "../../../viewmodel/hooks/address/useAddress";
import useProviders from "../../../viewmodel/hooks/providers/useProviders";
import { Col, Row, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { availableSortingOptions } from "../../../transport/providers";

const ProvidersSorting = () => {
  const { city } = useAddress();
  const { sortBy, providersData, handleSortByChange } = useProviders();

  return (
    <Row>
      <Col>
        <Col>
          <h3>Провайдеры в г. {city}</h3>
        </Col>
        <Col className="pb-3">
          В вашем городе:{" "}
          <Button variant="link" bsPrefix="info" as="a">
            {city},
          </Button>{" "}
          найдено {providersData.length} провайдеров
        </Col>
      </Col>
      <Col xs="auto" className="ms-auto">
        <Form.Select
          defaultValue={sortBy}
          onChange={(e) => handleSortByChange(e.target.value)}
        >
          <option value={availableSortingOptions.POPULAR}>Популярные</option>
          <option value={availableSortingOptions.CHEAP}>Экономные</option>
          <option value={availableSortingOptions.EXPENSIVE}>Дорогие</option>
        </Form.Select>
      </Col>
    </Row>
  );
};

export default ProvidersSorting;
