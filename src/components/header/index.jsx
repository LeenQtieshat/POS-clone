import styles from "./styles.module.scss";
import UserOptions from "../UserOptions";
import Logo from "../Logo";

const { headerContainer, userOptions } = styles;

const Header = () => {
  return (
    <div className={headerContainer}>
      <Logo />
      <div className={userOptions}>
        <UserOptions />
      </div>
    </div>
  );
};

export default Header;
