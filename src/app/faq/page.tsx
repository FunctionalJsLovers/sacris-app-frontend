import styles from './styles.module.css';
import React from "react";
import Artists from "@/components/Artists/artists";
import NavBar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import Questions from "@/components/Questions/Questions";

function FAQPage() {
    return (
        <div className={styles.all}>
            <div className={styles.firstPart}>
                <NavBar/>
                <div className={styles.textContainer}>
                    <div className={styles.titleSection}>
                        <h1>Preguntas frecuentes</h1>
                    </div>
                </div>
            </div>
            <Questions/>
            <Footer/>
        </div>
    )
}

export default FAQPage;