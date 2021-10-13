import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "../styles/Home.module.css";

function Header() {
   return (
      <div>
         <div className={styles.arrows}>
            <ArrowBackIcon className={styles.title} />
            <ArrowForwardIcon className={styles.title} />
         </div>
      </div>
   );
}

export default Header;
