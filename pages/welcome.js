import styles from "./welcome.module.css"
export default function Welcome () {
    return(
        <div className={styles.body}>
            <img src="logo.png"></img>
            <div className={styles.h1}>
                WELCOME TO THE
                <br/>
                TECHNOLOGICAL
                <br/>
                UNIVERSITY OF THE
                <br/>
                PHILIPPINES - CAVITE PORTAL!
            </div>
            <a href="registration">
                <button>Continue to Registration</button>
            </a>
        </div>
    )
}