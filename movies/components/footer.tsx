import styles from 'styles/Footer.module.css'; // Assurez-vous d'avoir votre fichier CSS pour le style

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Ratflix. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
