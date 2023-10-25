import Links from "./Links";
import styles from "./styles.module.scss";
import Socials from "./Socials";
import NewsLetter from "./NewsLetter";

export default function Footer({ country }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Links />
        <Socials />
        <NewsLetter />
      </div>
    </footer>
  );
}