import styles from "./styles.module.scss";
import Link from "next/link";
export default function header (){
    return <Link href="/browse">
        <div className={styles.ad}></div>
    </Link>;
}