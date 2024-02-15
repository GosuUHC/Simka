import useCompilations from "../../../viewmodel/hooks/compilations/useCompilations";
import CompilationCard from "./CompilationCard";
import { Col, Row } from "react-bootstrap";

const Compilations = () => {
  const { compilationsData, isSuccess } = useCompilations();

  if (!isSuccess) {
    return;
  }

  const compilationsMapped = compilationsData.map((compilation, i) => {
    return (
      <Col key={i} xs={8} md={6}>
        <CompilationCard imgSrc={compilation.image} title={compilation.name} />
      </Col>
    );
  });

  return (
    <div className="py-4">
      <Row>{compilationsMapped}</Row>
    </div>
  );
};

export default Compilations;
