import Link from 'next/link';
import styles from '../../styles/Navbar.module.scss';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.navLinks}>
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  </nav>
);

export default Navbar;
