import Image from 'next/image'
import styles from './page.module.css'
import NavBar from "@/components/NavBar/Navbar";
import AboutUs from "@/components/AboutUs/aboutUs";

export default function Home() {
  return (
      <div id="all">
        <AboutUs/>
      </div>
  )
}
