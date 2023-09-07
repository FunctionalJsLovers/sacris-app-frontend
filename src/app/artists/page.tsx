import styles from './styles.module.css';
import React from "react";
import Artists from "@/components/Artists/artists";
import NavBar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";

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