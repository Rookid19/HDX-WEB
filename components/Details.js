import * as React from "react";
import Image from "next/image";
import crello from "../Images/crello.jpeg";
// import ladyImage2 from "../assets/1.jpg";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "../styles/Home.module.css";
import {
   FormControl,
   FormControlLabel,
   Radio,
   RadioGroup,
} from "@mui/material";

export default function Info() {
   const [el, setEl] = React.useState(null);

   // opens a pop of the option button
   const handleClick = (event) => {
      setEl(event.currentTarget);
   };

   const handleClose = () => {
      setEl(null);
   };

   const open = Boolean(el);
   const id = open ? "simple-popover" : undefined;

   return (
      <div class={styles.slideBox}>
         <div>
            {/* <div class={styles.detailsTitle}></div> */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
               <div>
                  <h1  id={styles.titleId}  class={styles.title}>Host Lequie Artstic</h1>
                  <div class={styles.listItems}>
                     <p class={styles.textEL}>Formal Wears</p>
                     <p class={styles.dot}>.</p>
                     <p class={styles.textL}>Available</p>
                     <p class={styles.dot}>.</p>
                     <p class={styles.textL}>100% cotton</p>
                  </div>
               </div>
               <div class={styles.userbox}>
                  <p class={styles.name}>Xels Trend</p>
                  <div class={styles.userboxImage}>
                     <Image src={crello} layout="responsive" />
                  </div>
               </div>
            </div>

            <div >
               <p class={styles.selectColor}>select color</p>

               <FormControl component="fieldset">
                  <RadioGroup
                     row
                     aria-label="gender"
                     name="row-radio-buttons-group"
                  >
                     <FormControlLabel
                        value="female"
                        control={<Radio color="error" />}
                        label=""
                     />
                     <FormControlLabel
                        value="male"
                        control={<Radio color="success" />}
                        label=""
                     />
                     <FormControlLabel
                        value="other"
                        control={<Radio color="warning"/>}
                        label=""
                     />
                  </RadioGroup>
               </FormControl>
            </div>
            {/* <br /> */}
            <div class={styles.color}>
               <div style={{ display: "flex" }}>
                  <p class={styles.title}>select size</p>
                  <p id={styles.sizeGuide} class={styles.title}>
                     size guide
                  </p>
               </div>
               <div class={styles.listItems2}>
                  <div id={styles.grey} class={styles.oval}>
                     32
                  </div>
                  <div class={styles.oval}>43</div>
                  <div class={styles.oval}>5</div>
                  <div id={styles.green} class={styles.oval}>
                     67
                  </div>
               </div>
            </div>
            <div class={styles.description}>
               Far far away, behind the word mountains, far from the countries
               Vokalia and Consonantia, there live the blind texts. Separated
               they live in Bookmarksgrove right at the coast of the Semantics,
               a large language ocean. A small river named Duden flows by their
               place and supplies it with the necessary regelialia. It is a
               paradisematic country, in which roasted parts of sentences fly
               into your mouth. Even the all-powerful Pointing has no control
               about the blind texts it is an almost unorthographic life One day
               however a small line of blind text by the name of Lorem Ipsum
               decided to leave for the far World of Grammar.
            </div>

            <div class={styles.optionContainer}>
               <Button
                  aria-describedby={id}
                  variant="clear"
                  class={styles.butt}
                  onClick={handleClick}
               >
                  <p style={{ color: "white" }}> Option 1</p>
               </Button>
               <Popover
                  id={id}
                  open={open}
                  anchorEl={el}
                  onClose={handleClose}
                  anchorOrigin={{
                     vertical: "bottom",
                     horizontal: "left",
                  }}
               >
                  <Typography sx={{ p: 2 }}>
                     The content of the Popover.
                  </Typography>
               </Popover>

               <Button
                  aria-describedby={id}
                  variant="clear"
                  class={styles.butt}
                  onClick={handleClick}
                  color="success"
               >
                  <p style={{ color: "white" }}> Option 2</p>
               </Button>
               <Popover
                  id={id}
                  open={open}
                  anchorEl={el}
                  onClose={handleClose}
                  anchorOrigin={{
                     vertical: "bottom",
                     horizontal: "left",
                  }}
               >
                  <Typography sx={{ p: 2 }}>Wedding Clother</Typography>
                  <Typography sx={{ p: 2 }}>Summer Wears</Typography>
                  <Typography sx={{ p: 2 }}>Play suits</Typography>
                  <Typography sx={{ p: 2 }}>Night Growns</Typography>
                  <Typography sx={{ p: 2 }}>Suit</Typography>
               </Popover>

               <Button
                  aria-describedby={id}
                  variant="clear"
                  class={styles.butt}
                  onClick={handleClick}
               >
                  <p style={{ color: "white" }}> Option 3</p>
               </Button>
            </div>
         </div>
      </div>
   );
}
