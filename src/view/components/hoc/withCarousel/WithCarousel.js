import { useRef, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Col, Row } from "react-bootstrap";
import {
  ChevronLeft,
  ChevronRight,
} from "react-bootstrap-icons";
import "./WithCarousel.css";

const WithCarousel = ({ componentsList, itemsPerPage }) => {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  const handleSelect = (selectedIndex) => {
    console.log(selectedIndex);
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    ref.current.prev();
  };

  const handleNext = () => {
    ref.current.next();
  };

  const chunkedComponents = [];
  for (let i = 0; i < componentsList.length; i += itemsPerPage) {
    chunkedComponents.push(componentsList.slice(i, i + itemsPerPage));
  }

  const renderComponents = chunkedComponents.map((chunk, i) => (
    <Carousel.Item key={i}>
      <Row>{chunk}</Row>
    </Carousel.Item>
  ));

  return (
    <Row>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        ref={ref}
        indicators={true}
        controls={false}
        interval={null}
      >
        {renderComponents}
      </Carousel>
      <Row className="d-flex justify-content-end px-0">
        <Col xs="auto px-0" onClick={handlePrev}>
          <ChevronLeft className="controlIcon " />
        </Col>
        <Col xs="auto px-0" onClick={handleNext}>
          <ChevronRight className="controlIcon" />
        </Col>
      </Row>
    </Row>
  );
};
export default WithCarousel;
