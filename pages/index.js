import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { FaRegSmileBeam, FaHeart } from 'react-icons/fa';
import Link from 'next/link';

export default function HomePage() {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowText(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={`${styles.welcome} ${showText ? styles.fadeIn : ''} ${styles.bounce}`}>
                Hai Nanayyy! <FaRegSmileBeam style={{ verticalAlign: 'middle' }} />
                <br />
                Selamat datang di galeri kecil ini Nanayyy✨
            </h1>
            <Link href="/dashboard" className={styles.button}>
                <FaHeart style={{ marginRight: '8px' }} />
                Lihat Galerinya Yuk!
            </Link>
        </div>
    );
}
