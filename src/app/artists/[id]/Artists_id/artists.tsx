import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css'

interface Artist {
  id: number;
  name:string;
  nickname:string;
  profilePicture: string;
  categories: string[];
  description: string;
  instagram?: string;
  posts: { id: number; image: string; }[];
}
interface IStringIndex extends Record<string, string> {}

type NewType = IStringIndex;

const categoryColors: IStringIndex = {
  "Anime": "#960F8D",
  "NeoTradicional": "#ff5722",
  "Realismo Color": "#3ED44D",
  "Comic": "#F21D43",
  "Blackwork": "#D1CE16",
  "Freehand": "#1455A3",
  "Sombras": "#C7C2AE",
  "Minimalismo": "#38A376",
  "Color": "#F23499",
  "Cartoon": "#872608",
  "Surrealismo": "#D4BF9E",
  "Black and grey" : "#C7B5D4"
};

interface ArtistProfileProps {
  artist: Artist;
}

const ArtistProfile: React.FC<ArtistProfileProps> = ({ artist }) => {
  const openWhatsAppChat = () => {
    const phoneNumber = '573209756105';
    const whatsAppURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsAppURL);
}
  return (
    <div>
    
      <div className={styles.name}>{artist.name}</div>
    <div className={styles.allArtists}>
    <div className={styles.artistLeft}>
    <div className={styles.artistImage}>
      <Image src={artist.profilePicture} alt={artist.name} width="450" height="450"/>
        </div>
        </div>
        <div className={styles.right}>
        {artist.categories.map((category, i) => (
                            <div className={styles.category} key={i} style={{ borderColor: categoryColors[category] }}>
                                <span className={styles.dot} style={{ backgroundColor: categoryColors[category] }}></span>
                                {category}
                            </div>
                        ))}
                         <div className={styles.nick}>
                            <p>{artist.nickname}</p>
                        </div>
                        <div className={styles.description}>
                            <p>{artist.description}</p>
                        </div>
                        <div className={styles.actions}>
                        <button className={styles.buttonAgen} onClick={openWhatsAppChat}>Agendar Cita</button>
                        <a href={artist.instagram} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="https://www.aesthetx.com/wp-content/uploads/2021/01/1200px-Instagram_logo_2016.svg-1-min-300x300.png"
                                    alt="Instagram"
                                    width={50}
                                    height={50}
                                    className={styles.ig}
                                />
                            </a>
                        </div>
</div>
</div>

      <div className={styles.tattoo_images}>
      <h1> Portafolio</h1>
      
        {artist && artist.posts && artist.posts.map((tattoo, index) => (
          <Image className={styles.tattooimg} key={index} src={tattoo.image } alt={`Tatuaje ${index + 1}`} width="400" height="400" />
        ))}

      </div>
      </div>
  );
};

export default ArtistProfile;
