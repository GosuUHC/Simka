import { Card, Col, Row } from "react-bootstrap";
import useFaq from "../../../viewmodel/hooks/faq/useFaq";
import FAQCard from "./FAQCard";
import withCarousel from "../hoc/withCarousel/WithCarousel";
import { useMemo } from "react";

const FAQsCard = () => {
  const { faqData } = useFaq();

  const faqDataMapped = useMemo(() => {
    return faqData.map((data, i) => (
      <Col
        key={i}
        xs={8}
        md={6}
        lg={3}
        className="d-flex py-4 align-self-stretch"
      >
        <FAQCard title={data.title} desc={data.desc} />
      </Col>
    ));
  }, [faqData]);

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
