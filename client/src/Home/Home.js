import React from 'react';
import styles from "./Home.module.css"
import source from "./heart.png"



const Home = () => {
    return (
        <div id={styles.homeContainer}>
            <div style={{ paddingTop: "10px", display: 'flex', justifyContent: 'space-between' }}>
                <img id={styles.imgId} src="./heart.png"></img>
                <p id={styles.helpFam}>Help The Rivera Family</p>
                <div></div>
            </div>
        </div >
    )
}

export default Home;