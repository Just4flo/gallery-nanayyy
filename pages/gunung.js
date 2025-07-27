import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Gallery.module.css';
import { FaMountain } from 'react-icons/fa';

export default function GunungGallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showContent, setShowContent] = useState(false);
    const router = useRouter();

    const images = [
        '/images/gn/2.png',
        '/images/gn/4.png',
        '/images/gn/5.png',
        '/images/gn/6.png',
        '/images/gn/10.png',
    ];

    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${styles.container} ${showContent ? styles.fadeIn : ''}`}>
            <h2 className={`${styles.heading} ${styles.bounce}`}>
                <FaMountain style={{ marginRight: '8px' }} />
                Galeri Muncak
            </h2>

            <button className={styles.backButton} onClick={() => router.push('/dashboard')}>
                ⬅ Kembali ke Dashboard
            </button>

            <div className={styles.grid}>
                {images.map((img, index) => (
                    <div key={index} className={styles.card}>
                        <img
                            src={img}
                            className={styles.image}
                            onClick={() => setSelectedImage(img)}
                            alt={`Foto ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeButton} onClick={() => setSelectedImage(null)}>✖</button>
                        <img src={selectedImage} className={styles.modalImage} alt="Preview" />
                    </div>
                </div>
            )}
        </div>
    );
}
