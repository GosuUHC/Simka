import { useRef, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const WithPaginationControl = ({ comp, pagesCount, onNext, onPrev }) => {
  const [active, setActive] = useState(1);
  const ref = useRef(null);

  const handleNext = () => {
    const newActive = active + 1;
    if (newActive > pagesCount) {
      return;
    }
    onNext();
    setActive(newActive);
  };

  const handlePrev = () => {
    const newActive = active - 1;
    if (newActive < 1) {
      return;
    }

    onPrev();
    setActive(newActive);
  };

  return (
    <>
      <Carousel ref={ref} controls={false}>
        {comp}
      </Carousel>

    </>
  );
};

export default WithPaginationControl;
