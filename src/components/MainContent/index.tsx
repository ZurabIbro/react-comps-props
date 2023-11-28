import styles from "./MainContent.module.css"

const MainContent = () => {
    return(
        <div className={styles.mainContainer}>
            <ul className={styles.mainList}>
                <li><a href="">Gadgets and accessories</a></li>
                <hr />
                <li><a href="">Appliances</a></li>
                <hr />
                <li><a href="">Other</a></li>
            </ul>
        </div>
    )
}

export default MainContent