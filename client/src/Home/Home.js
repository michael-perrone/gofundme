import React from 'react';
import styles from "./Home.module.css"
import source from "./heart.png"
import { useState, useEffect } from 'react';
import pic1 from "./pic1.jpg";
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './hel.png';
import pic6 from './fam.png';
import pic7 from './phone2.png';
import "./home.css";


const Home = () => {
    const picArray = [pic1, pic2, pic3, pic4];
    let index = 0;
    let chosenPic = pic1;

    function changePic() {
        let img = document.getElementById(styles.animatedImage);
        if (index !== 3) {
            index++;
        }
        else {
            index = 0;
        }
        img.src = picArray[index]
    }

    setInterval(changePic, 5000);


    return (
        <div id={styles.homeContainer}>
            <div style={{ width: "100%", borderBottom: "2px solid black", backgroundColor: "white", paddingTop: "10px", display: 'flex', justifyContent: 'space-between' }}>
                <img id={styles.imgId} src={source}></img>
                <p id={styles.helpFam}>Help The Rivera Family</p>
                <div></div>
            </div>
            <img id={styles.animatedImage} src={chosenPic}></img>
            <div className="links-div">
                <div className="flexer">
                    <img className="spec-img" src={pic6}></img>
                    <p className="list">
                        About the Rivera Family
                </p>
                </div>
                <div className="flexer">
                    <img className="spec-img" src={pic5}></img>
                    <p className="list">
                        How you can help
                </p>
                </div>
                <div className="flexer">
                    <img className="spec-img" src={pic7}></img>
                    <p class="list">
                        Contact Information
                </p>
                </div>
            </div>

            <div>
                <p id="first-spec-p" className="spec-p">About the Rivera's</p>
            </div>
            <p className="details">The Rivera's are a beautiful family who recently experienced the passing of Luz Rivera. Luz was a mother to six wonderful children and a wife to a loving husband of twenty years. She was a school teacher whose salary greatly contributed to her families financial means. Sadly, after a long battle with breast cancer in which she never stopped fighting, she recently passed away. Miguel Rivera, the father of the children and husband to Luz, was unable for months to work needing to take care of his wife. Miguel has refused to give up and continues to keep fighting just as his wife would have wanted him to. He is now working twelve hour days because he does not want his family to be removed from their home. Unfortunately, the Rivera's have now fallen many months behind on rent, utilities and other various bills. The need for financial assistance has become immediate. Below is an article that recently was published in the Daily Journal, please see the article for more details on the family.</p>



            <a style={{ width: "80%" }} href={"https://www.thedailyjournal.com/picture-gallery/news/2019/11/26/photos-rivera-family-vineland-full-hope-and-love-christmas/4304647002/"}>https://www.thedailyjournal.com/picture-gallery/news/2019/11/26/photos-rivera-family-vineland-full-hope-and-love-christmas/4304647002/</a>
            <div>
                <p id="first-spec-p" className="spec-p">How you can help</p>

            </div>


            <p className="details">I know that 2020 has been a tough year for everyone, but it has been an especially tough year for the Rivera family. So this year, like last year, I have adopted a family through the Salvation Army. The Vineland area Salvation Army does not receive adequate state funding beacuase the majority of funds are directed to Newark and Camden. This has left many Cumberland County families in need. I am asking you to please help me assist the Rivera's family financial expenses as possible. All donations will go towards the Rivera's dire financial needs. This includes rent, food, utlities, clothing, and educational materials. Please help by sending whatever you can to my Venmo. I am choosing to use Venmo because websites like GoFundMe choose to take a percentage of money donated. My Venmo is @mfc-tennis. If Venmo is not an available option, please contribute by check which can be made out to me. Checks can be left on my desk counter at the Moorestown Field Club, as I always leave the door open and am there everyday. All money received by Venmo or check will be directed to a seperate account in the Rivera's name. I will be giving Miguel Rivera 100% of the donations that will consist of two separate checks, one before Christmas and one after. There has been very little money donated to the Rivera family even after the above article was written but I know we can change that. I am hoping to reach a donation goal of $5,000 dollars. I know this won't cover all of the Rivera's expenses, but it would be a tremendous help. Please join me in donating and please share this with others.</p>





            <div>
                <p id="first-spec-p" className="spec-p">Contact Information</p>
            </div>
            <div >
                <div>
                    <p className="contact">
                        Phone: 856-261-9522
            </p>
                    <p className="contact">
                        Venmo: @mfc-tennis
            </p>
                    <p className="contact">
                        Michael Perrone
            </p>
                </div>
            </div>
        </div >
    )
}

export default Home;