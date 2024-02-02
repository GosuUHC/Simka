import UpperPart from "./UpperPart";
import { Divider } from "@mui/material";
import LowerPart from "./LowerPart";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <UpperPart />
      <Divider />
      <LowerPart />
    </div>
  );
};

export default Header;
