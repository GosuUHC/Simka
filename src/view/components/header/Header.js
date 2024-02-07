import UpperPart from "./UpperPart";
import LowerPart from "./LowerPart";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <UpperPart />
      <hr className={styles.divider} />
      <LowerPart />
    </>
  );
};

export default Header;
