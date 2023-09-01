import React from "react";
import styles from './styles.module.css'
import Image from "next/image";
const Artists = () => {
    return (
        <div className={styles.allArtists}>
            <div className={styles.artists}>
                <div className={styles.left}>
                    <div className={styles.artistImage}>
                        <Image src="https://img.freepik.com/vector-gratis/diseno-simbolo-familiar-degradado_23-2149292666.jpg?w=740&t=st=1693532446~exp=1693533046~hmac=23ddf9f0250db6657abc54c7bfa0525420771e9028a8a568108f3ffb7f68cb54" alt="Nombre" width="400" height="400"></Image>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.name}>Nombre</div>
                    <div className={styles.description}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className={styles.socialMedia}>
                            <img src="https://th.bing.com/th/id/R.9d13eaaf6566b8bdf715bd38c110aec0?rik=rY2INEiHKMVz2w&riu=http%3a%2f%2f3.bp.blogspot.com%2f-KNqO9JuXUN8%2fTi2b1LHRquI%2fAAAAAAAAAIU%2fL6k8Wlzxj9k%2fs1600%2flogo_facebook.png&ehk=ziMr2C3oUEw31MWuloKmoKqzMBzkqgUnFMR%2bsHqWeHM%3d&risl=&pid=ImgRaw&r=0" alt=" Facebook" width="50" height="50"/>
                            <img src="https://www.aesthetx.com/wp-content/uploads/2021/01/1200px-Instagram_logo_2016.svg-1-min-300x300.png" alt="Instagram" width="50" height="50" className={styles.ig}/>
                            <button className={styles.button}>Perfil</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.artists}>
                <div className={styles.left2}>
                    <div className={styles.name}>Nombre</div>
                    <div className={styles.description}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className={styles.socialMedia}>
                            <img src="https://th.bing.com/th/id/R.9d13eaaf6566b8bdf715bd38c110aec0?rik=rY2INEiHKMVz2w&riu=http%3a%2f%2f3.bp.blogspot.com%2f-KNqO9JuXUN8%2fTi2b1LHRquI%2fAAAAAAAAAIU%2fL6k8Wlzxj9k%2fs1600%2flogo_facebook.png&ehk=ziMr2C3oUEw31MWuloKmoKqzMBzkqgUnFMR%2bsHqWeHM%3d&risl=&pid=ImgRaw&r=0" alt=" Facebook" width="50" height="50"/>
                            <img src="https://www.aesthetx.com/wp-content/uploads/2021/01/1200px-Instagram_logo_2016.svg-1-min-300x300.png" alt="Instagram" width="50" height="50" className={styles.ig}/>
                            <button className={styles.button}>Perfil</button>
                        </div>
                    </div>
                </div>
                <div className={styles.right2}>
                    <div className={styles.artistImage}>
                        <Image src="https://img.freepik.com/vector-gratis/diseno-simbolo-familiar-degradado_23-2149292666.jpg?w=740&t=st=1693532446~exp=1693533046~hmac=23ddf9f0250db6657abc54c7bfa0525420771e9028a8a568108f3ffb7f68cb54" alt="Nombre" width="400" height="400"></Image>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Artists;