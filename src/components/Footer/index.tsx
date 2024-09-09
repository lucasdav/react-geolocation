import styles from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Logo width={100} height={100} />
        </footer>
    );
}