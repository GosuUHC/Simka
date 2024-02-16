import ApplicationFormInputs from "./ApplicationFormInputs";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import CallBackLinks from "../../common/callBackInfoCard/CallBackLinks";
import usePhones from "../../../../viewmodel/hooks/common/usePhones";
import useSocialLinks from "../../../../viewmodel/hooks/common/useSocialLinks";
import "./ApplicationForm.css";

const ApplicationForm = () => {
  const { phone } = usePhones();
  const { onClickTg, onClickVk } = useSocialLinks();

  return (
    <Card className="p-3 applicationFormWrapper border-0">
      <Card.Body>
        <Card.Title as="h3">Оставьте заявку, и мы поможем подобрать</Card.Title>
        <ApplicationFormInputs />
        <span className="pb-3">
          Нажимая на кнопку «Подобрать тариф», я соглашаюсь с{" "}
          <Button variant="link" as="a" bsPrefix="black-link">
            условиями обработки персональных данных
          </Button>
        </span>

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
      </Card.Body>
    </Card>
  );
};

export default ApplicationForm;
