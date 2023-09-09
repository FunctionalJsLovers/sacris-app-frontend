import React from 'react';
import Image from 'next/image';
import Styles from './styles.module.css'
interface CardProps {
  data: {
    id: number;
    imagen: string;
    titulo: string;
    descripcion: string;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className={Styles.card}>
<Image className={Styles.img} src={data.imagen} alt={data.titulo} width="300" height="300" sizes="(max-width: 768px) 100vw, (max-width:1200px)50vw,33vw" />   
   <h2 className={Styles.h2}>{data.titulo}</h2>
      <p className={Styles.p}>{data.descripcion}</p>
    </div>
  );
};

export default Card;

      
   