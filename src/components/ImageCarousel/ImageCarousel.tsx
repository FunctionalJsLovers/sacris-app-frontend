'use client';
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
interface ImageCarouselProps {
    images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    return (
        <div className={styles.imageCarousel}>
            <div>
                <div className={styles.carouselContent}>
                    <img
                        src={images[currentImageIndex]}
                        alt={`Image ${currentImageIndex}`}
                        width="800"
                        height="500"
                    />
                    <div className={`${styles.carouselArrow} ${styles.leftArrow}`} onClick={prevImage}>
                        &lt;
                    </div>
                    <div className={`${styles.carouselArrow} ${styles.rightArrow}`} onClick={nextImage}>
                        &gt;
                    </div>
                </div>
                <div className={styles.carouselIndicators}>
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`${styles['carouselIndicator']} ${
                                index === currentImageIndex ? styles.active : ""
                            }`}
                            onClick={() => setCurrentImageIndex(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
