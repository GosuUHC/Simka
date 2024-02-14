import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const WithCarousel = ({ componentsList, itemsPerPage }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalComponents = componentsList.flat().length;
  const totalPages = Math.ceil(totalComponents / itemsPerPage);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1,
    );
  };

  const renderIndicators = () => {
    return Array.from({ length: totalPages }, (_, index) => (
      <span
        key={index}
        className={`carousel-indicator ${
          activeIndex === index ? "active" : ""
        }`}
        onClick={() => setActiveIndex(index)}
      ></span>
    ));
  };

  const renderComponents = () => {
    const startIndex = activeIndex * itemsPerPage;
    const endIndex = Math.min(
      (activeIndex + 1) * itemsPerPage,
      totalComponents,
    );

    return componentsList
      .flat()
      .slice(startIndex, endIndex)
      .map((component, index) => (
        <Carousel.Item key={index}>{component}</Carousel.Item>
      ));
  };

  return (
    <div className="carousel-container">
      <Carousel
        indicators={false}
        activeIndex={activeIndex}
        onSelect={handleSelect}
      >
        {renderComponents()}
      </Carousel>
      <div className="carousel-controls">
        <span className="control" onClick={handlePrev}>
          &lt;
        </span>
        <span className="control" onClick={handleNext}>
          &gt;
        </span>
      </div>
      {renderIndicators()}
    </div>
  );
};

export default WithCarousel;
