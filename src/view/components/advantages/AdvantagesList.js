import { Stack } from "react-bootstrap";
import Advantage from "./Advantage";

const AdvantagesList = () => {
  return (
    <Stack direction="horizontal">
      <Advantage
        title={"Бесплатно"}
        desc={
          "Собрали все выгодные тарифы и скидки от более чем 30 провайдеров"
        }
      />
      <Advantage
        title={"Быстро"}
        desc={"Поиск провайдеров, сравнение и заказ подключения на одном сайте"}
      />
      <Advantage
        title={"Честно"}
        desc={"Расскажем о всех особенностях провайдеров и тарифов"}
      />
    </Stack>
  );
};

export default AdvantagesList;
