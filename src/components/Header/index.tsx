import logo from "../../assets/shopping-cart.png"
import styles from "./Header.module.css"


const Header = () => {
    return(
        <div className={styles.headerContainer}>
            <div>Intocode Coding Shopcamp</div>
            <div><a href=""><img  className={styles.headerLogo} src={logo} alt="logo" /></a></div>
        </div>
    )
}

export default Header