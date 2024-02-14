import { Card, Col, Row } from "react-bootstrap";
import useFaq from "../../../viewmodel/hooks/faq/useFaq";
import FAQCard from "./FAQCard";
import withCarousel from "../hoc/withCarousel/WithCarousel";

const FAQsCard = () => {
  const { faqData } = useFaq();

  const faqDataMapped = faqData.map((data, i) => {
    return (
      <Col key={i} className="d-flex py-4 align-self-stretch">
        <FAQCard title={data.title} desc={data.desc} />
      </Col>
    );
  });

  const faqDataWithCarousel = withCarousel({
    componentsList: faqDataMapped,
    itemsPerPage: 4,
  });

  return (
    <Card className="border-0 ps-0">
      <Card.Body className="px-0">
        <Card.Title as="h2">Часто задаваемые вопросы</Card.Title>
        <Row>{faqDataWithCarousel}</Row>
      </Card.Body>
    </Card>
  );
};

export default FAQsCard;
