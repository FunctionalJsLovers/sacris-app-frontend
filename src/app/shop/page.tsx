import axios from 'axios';
import Image from 'next/image';
import NavBar from '@/components/NavBar/NavBar';
import styles from  './pageShop.module.css';
import style from  '@/app/home/styles.module.css';
import Footer from "@/components/Footer/Footer";



async function load() {
  const { data } = await axios.get('https://rickandmortyapi.com/api/character');
  return data.results;
}

async function Page() {
  const imagen = await load();
  console.log(imagen)

  return (
    <div className={style.all}>
      <NavBar></NavBar>

<div className={styles.banner} >
    <Image className={styles.banner_img}src="/images/banner.jpg" alt="" width="50" height="50"sizes="(max-width: 768px) 100vw, (max-width:1200px)50vw,33vw"/>
      <div className={styles.bannerText} >
        <h1>Tienda</h1>
        <p>Estos son algunos de los productos que podrás adquirir en nuestras instalaciones.</p>
      </div>
    </div>
    <div className={styles.images}>
          {imagen.map((imagen: any) => (
              <div className={styles.container} key={imagen.id}>
                  <Image src={imagen.image} alt={imagen.name} width="300" height="300" />
              </div>
          ))}
      </div>
      <Footer/>




   
 </div>
  );
}

export default Page;