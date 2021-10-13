import Image from "next/image";
import { useState } from "react";
import crello from "../Images/crello.jpeg";
import profile from "../Images/profile.jpg";
import daniel from "../Images/daniel.jpg";
import styles from "../styles/Home.module.css";

export default function ImagesPane() {
   // changes the main image when any of the 3 images is clicked
   const [image, setImage] = useState(crello);
   return (
      <div className={styles.ImagePane}>
         <div className={styles.subImages}>
            <p className={styles.title}>
               Select
               <br />
               your
               <br />
               Image
            </p>
            <div>
               <Image
                  src={crello}
                  width={70}
                  height={100}
                  onClick={() => setImage(crello)}
               />
            </div>

            <div>
               <Image
                  src={profile}
                  width={70}
                  height={100}
                  onClick={() => setImage(profile)}
               />
            </div>
            <div>
               <Image
                  src={daniel}
                  width={70}
                  height={100}
                  onClick={() => setImage(daniel)}
               />
            </div>
         </div>

         <div class={styles.imageBox}>
            <div>
               <Image src={image} layout="responsive" />
            </div>
         </div>
      </div>
   );
}
