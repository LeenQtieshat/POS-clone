import styles from "./styles.module.scss";

const { heading, subHeading, logoContainer } = styles;

const Logo = () => {
  return (
    <div className={logoContainer}>
      <h5 className={heading}>Ticketak</h5>
      <span className={subHeading}>POS</span>
    </div>
  );
};

export default Logo;
