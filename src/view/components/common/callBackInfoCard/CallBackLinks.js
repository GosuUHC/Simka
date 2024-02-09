import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSocialLinks from "../../../../viewmodel/hooks/common/useSocialLinks";
import usePhones from "../../../../viewmodel/hooks/common/usePhones";

const CallBackLinks = () => {
  const { onClickTg, onClickVk } = useSocialLinks();
  const { phone } = usePhones();

  return (
    <Stack direction="horizontal" gap={2}>
      <FontAwesomeIcon size={"xl"} icon={faTelegram} onClick={onClickTg} />
      <FontAwesomeIcon size={"xl"} icon={faVk} onClick={onClickVk} />
      {phone}
      <Button variant="link" bsPrefix="info" as="a">
        Обратный звонок
      </Button>
    </Stack>
  );
};

export default CallBackLinks;
