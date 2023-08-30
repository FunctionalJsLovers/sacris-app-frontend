import React from "react";
import '../styles/stylesNavBar/styles.css'
import Image from "next/image";
const Testimonials = () => {

    return (
        <header className="Header">
            <nav>

                <ul className="nav-list">
                    <li><a href="#">Artistas</a></li>
                    <li><a href="#">Tienda</a></li>
                    <div className="logo"><a href=""><Image src="/images/Logo2.png" alt="" width="100" height="100"></Image></a> </div>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <div className="line"></div>
            </nav>
        </header>
    )
}
export default Testimonials;