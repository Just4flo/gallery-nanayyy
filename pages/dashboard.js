import styles from '../styles/Dashboard.module.css';
import Link from 'next/link';
import { FaArrowLeft, FaCameraRetro, FaMountain, FaRandom } from 'react-icons/fa';

export default function Dashboard() {
    return (
        <div className={`${styles.container} ${styles.fadeIn}`}>
            <nav className={styles.navbar}>
                <Link href="/" className={styles.navLink}>
                    <FaArrowLeft style={{ marginRight: '8px' }} />
                    Kembali
                </Link>
            </nav>

            <h1 className={`${styles.title} ${styles.bounce}`}>🎞️ Gallery Timeline</h1>

            <div className={styles.grid}>
                <Link href="/jawa" className={styles.card}>
                    <img src="/images/jawa/4.png" alt="jawa" className={styles.image} />
                    <p className={styles.text}><FaCameraRetro /> Cosplays Jawa</p>
                </Link>

                <Link href="/gunung" className={styles.card}>
                    <img src="/images/gn/4.png" alt="gunung" className={styles.image} />
                    <p className={styles.text}><FaMountain /> Muncak di Roblox</p>
                </Link>

                <Link href="/random" className={styles.card}>
                    <img src="/images/random/22.png" alt="random" className={styles.image} />
                    <p className={styles.text}><FaRandom /> Random Pic</p>
                </Link>
            </div>
        </div>
    );
}
