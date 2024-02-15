import { Card } from "react-bootstrap";
import Stepper from "@mui/joy/Stepper";
import "./StepperCard.css";
import CircularProgress from "@mui/joy/CircularProgress";
import Step from "@mui/joy/Step";
import Button from "react-bootstrap/Button";

const StepperCard = () => {
  return (
    <Card className="border-0 stepperCardWrapper">
      <Card.Body className="pt-5">
        <Stepper>
          <Step
            orientation="vertical"
            indicator={
              <CircularProgress
                size="lg"
                determinate
                value={33.34}
                thickness={2}
                color="neutral"
                variant="solid"
              >
                <span className="textWrapper">1</span>

              </CircularProgress>
            }
          >
            <div className="stepContent">
              <Button variant="link" as="a" bsPrefix="info">
                Откройте список
              </Button>
              <span> провайдеров и тарифов по адресу дома</span>
            </div>
          </Step>
          <Step
            orientation="vertical"
            indicator={
              <CircularProgress
                size="lg"
                determinate
                value={66.67}
                thickness={2}
                color="neutral"
                variant="solid"
              >
                <span className="textWrapper">2</span>
              </CircularProgress>
            }
          >
            <div className="stepContent">
              <Button variant="link" as="a" bsPrefix="info">
                Отправьте заявку
              </Button>
              <span> на подключение прямо на сайте</span>
            </div>
          </Step>
          <Step
            orientation="vertical"
            className="last"
            indicator={
              <CircularProgress
                size="lg"
                determinate
                value={100}
                thickness={2}
                color="neutral"
                variant="solid"
              >
                <span className="textWrapper">3</span>
              </CircularProgress>
            }
          >
            <div className="stepContent">
              <span>
                Ответьте на звонок менеджера для согласования даты и времени
              </span>
            </div>
          </Step>
        </Stepper>
      </Card.Body>
    </Card>
  );
};

export default StepperCard;
