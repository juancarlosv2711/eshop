import styles from "./styles.module.scss";
import Ad from "./ad";
export default function header (){
    return <header className={styles.header}>
        <Ad/>
    </header>;
}