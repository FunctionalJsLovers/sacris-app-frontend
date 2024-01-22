"use client"
// pages/artist/[id].tsx
import React from 'react';
import { useParams } from 'next/navigation';
import ArtistProfile from './Artists_id/artists';
import artistsData from './Artists_id/basicArtistsData.json';
import NavBar from '@/components/NavBar/Navbar';
import Footer from '@/components/Footer/Footer';
import st from './styles.module.css'


const ArtistPage: React.FC = () => {
  const params = useParams();
  const  id  = params.id 
  console.log(id)

  if (!id) {
  }

  const artist = artistsData.artists.find((a) => a.id === parseInt(id as string, 10));

  if (!artist) {
    return <div>Artista no encontrado</div>;
  }

  return (
    <div className={st.all}>
          <NavBar></NavBar>
                <div className={st.picture}></div>

      <ArtistProfile artist={artist} />
        <Footer></Footer>
    </div>
  );
};

export default ArtistPage;
