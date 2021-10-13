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
         <div>
            <div>
               <p id={styles.imgTxt} className={styles.title}>
                  Select your Image
               </p>
            </div>
            <div className={styles.subImages}>
               <div>
                  <Image
                     src={crello}
                     width={250}
                     height={250}
                     onClick={() => setImage(crello)}
                  />
               </div>

               <div>
                  <Image
                     src={profile}
                     width={250}
                     height={250}
                     onClick={() => setImage(profile)}
                  />
               </div>
               <div>
                  <Image
                     src={daniel}
                     width={250}
                     height={250}
                     onClick={() => setImage(daniel)}
                  />
               </div>
            </div>
         </div>

         <div className={styles.imageBox}>
            <div>
               <Image src={image} layout="responsive" />
            </div>
         </div>
      </div>
   );
}
