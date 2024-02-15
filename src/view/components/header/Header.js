import UpperPart from "./UpperPart";
import LowerPart from "./LowerPart";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <UpperPart />
      <hr className={styles.divider} />
      <LowerPart />
    </div>
  );
};

export default Header;
