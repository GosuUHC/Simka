import { Telegram } from "react-bootstrap-icons";
import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CallBackLinks = ({ onClickTg, onClickVk, phone }) => {
  return (
    <Stack direction="horizontal" gap={2}>
      <Telegram onClick={onClickTg} />
      VK {phone}
      <Button variant="link" bsPrefix="info" as="a">
        Обратный звонок
      </Button>
    </Stack>
  );
};

export default CallBackLinks;
