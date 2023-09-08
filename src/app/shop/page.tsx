
import NavBar from '@/components/NavBar/NavBar';
import styles from  './pageShop.module.css';
import Footer from "@/components/Footer/Footer";
import data from './ProductCard/data.json'; 
import Card from './ProductCard/Card';




async function Page() {
 
  return (
    <div className={styles.all}>
      <NavBar></NavBar>

      <div className={styles.picture}></div>


      <div className={styles.bannerText} >
        <h1>SacrisShop</h1>
        <p>Estos son algunos de los productos que podrás adquirir en nuestras instalaciones.</p>
    </div>
    <div className={styles.container}>
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
    
    
      <Footer/>




   
 </div>
  );
}

export default Page;