import NavBar from "@/components/NavBar/NavBar";
import styles from './page.module.css';
import Head from 'next/head';
import Testimonials from "@/components/Testimonials/Testimonials";
import AboutUs from "@/components/AboutUs/AboutUs";
import Map from "@/components/Map/Map";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import Footer from "@/components/Footer/Footer";

const images = [
    '/images/Slide1.png',
    '/images/Slide2.png',
    '/images/Slide3.png',
];

export default function HomePage() {
    return (
        <div className={styles.all}>
            <Head>
                <title>Home | SacrisApp</title>
            </Head>
            <NavBar/>
            <ImageCarousel images={images}/>
            <Testimonials/>
            <AboutUs/>
            <Map/>
            <Footer/>
        </div>
    )
}