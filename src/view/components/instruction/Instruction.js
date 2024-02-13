import { Card } from "react-bootstrap";
import StepperCard from "./stepper/StepperCard";
import CallBackLinks from "../common/callBackInfoCard/CallBackLinks";
import usePhones from "../../../viewmodel/hooks/common/usePhones";
import useSocialLinks from "../../../viewmodel/hooks/common/useSocialLinks";

const Instruction = () => {
  const { phone } = usePhones();
  const { onClickTg, onClickVk } = useSocialLinks();

  return (
    <Card className="border-0 py-4">
      <Card.Title as="h3">Как подключить интернет</Card.Title>

      <Card.Text>
        Подключить домашний интернет просто. Следуйте нашей инструкции
      </Card.Text>
      <StepperCard />
      <Card.Text className="pt-4">
        <span className="text-muted">
          Или свяжитесь с нами удобным для вас способом
        </span>
      </Card.Text>
      <CallBackLinks
        onClickTg={onClickTg}
        onClickVk={onClickVk}
        phone={phone}
      />
    </Card>
  );
};

export default Instruction;
