import NavBar from "@/components/NavBar";
import  '../styles/globals.css';
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import Map from "@/components/Map";

export default function Home() {
  return (
      <div className="all">
          <NavBar/>
          <Testimonials/>
          <AboutUs/>
      </div>
  )
}
