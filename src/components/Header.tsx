import styles from "./Header.module.css"

import rocketLogo from "../assets/rocket.svg"

export function Header (){
    return (
        <header className={styles.header}>
            <img src={rocketLogo} alt=""/>
            <span className={styles.firstSpan}>to</span><span className={styles.secondSpan}>do</span>
        </header>
    )
}