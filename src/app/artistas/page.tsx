import NavBar from "@/components/NavBar/NavBar";
import styles from './styles.module.css';
import Footer from "@/components/Footer/Footer";
import React from "react";
import Artists from "@/components/Artists/atists";

function ArtistsPage() {
    return (
        <div className={styles.all}>
            <NavBar/>
            <Artists/>
            <Footer/>
        </div>
    )
}

export default ArtistsPage;