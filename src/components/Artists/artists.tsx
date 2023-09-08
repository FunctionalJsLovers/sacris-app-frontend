'use client';
import React from "react";
import styles from './styles.module.css'
import Image from "next/image";
import jsonData from './artists.json';

const Artists = () => {
    const artistsData = jsonData;

    interface IStringIndex extends Record<string, string> {}

    const categoryColors: IStringIndex = {
        "Anime": "#960F8D",
        "NeoTradicional": "#ff5722",
        "Realismo Color": "#3ED44D",
        "Comic": "#F21D43",
    };


    return (
        <div className={styles.allArtists}>
            {artistsData.map((artist, index) => (
                <div className={index % 2 === 0 ? styles.artistLeft : styles.artistRight} key={index}>
                    <div className={styles.left}>
                        <div className={styles.artistImage}>
                            <Image
                                src={artist.image}
                                alt={artist.name}
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.header}>
                            <div className={styles.name}>{artist.name}</div>
                            <a href={artist.instagram} target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://www.aesthetx.com/wp-content/uploads/2021/01/1200px-Instagram_logo_2016.svg-1-min-300x300.png"
                                    alt="Instagram"
                                    width={50}
                                    height={50}
                                    className={styles.ig}
                                />
                            </a>
                        </div>
                        {artist.categories.map((category, i) => (
                            <div className={styles.category} key={i} style={{ borderColor: categoryColors[category] }}>
                                <span className={styles.dot} style={{ backgroundColor: categoryColors[category] }}></span>
                                {category}
                            </div>
                        ))}
                        <div className={styles.description}>
                            <p>{artist.description}</p>
                        </div>
                        <div className={styles.actions}>
                            <button className={styles.buttonPor}>Ver Portafolio</button>
                            <button className={styles.buttonAgen}>Agendar Cita</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Artists;