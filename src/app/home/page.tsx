
import styles from './styles.module.css';
import NavBar from '@/components/NavBar/Navbar';
import AboutUs from '@/components/AboutUs/aboutUs';
import Address from '@/components/Address/address';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
    return (
        <div className={styles.all}>
            <div className={styles.firstPart}>
                <NavBar/>
                <div className={styles.picture}></div>
                <AboutUs/>
                <Address/>
                <Footer/>
            </div>
        </div>

    )
}