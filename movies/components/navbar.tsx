import Link from 'next/link';
import styles from 'styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
        <Link href='/'>
            Accueil
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} href="/about">
            À propos
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
