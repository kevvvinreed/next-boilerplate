import styles from './index.module.css';

interface Props {

}

const Nav: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.tray}>
            <div className={styles.navItem}>{`HOME`}</div>
        </div>
      </div>
    </>
  );
};

export default Nav;
