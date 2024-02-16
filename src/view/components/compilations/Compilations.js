import useCompilations from "../../../viewmodel/hooks/compilations/useCompilations";
import CompilationCard from "./CompilationCard";
import { Col, Row } from "react-bootstrap";
import { useMemo } from "react";

const Compilations = () => {
  const { compilationsData, isSuccess } = useCompilations();

  const compilationsMapped = useMemo(() => {
    if (!isSuccess) return null;

    return compilationsData.map((compilation, i) => {
      return (
        <Col key={i} xs={8} md={6}>
          <CompilationCard
            imgSrc={compilation.image}
            title={compilation.name}
          />
        </Col>
      );
    });
  }, [compilationsData, isSuccess]);

  return (
    <div className="py-4">
      <Row>{compilationsMapped}</Row>
    </div>
  );
};

export default Compilations;
