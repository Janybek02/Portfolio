import React from 'react';
import "../../styles/portfolio/portfolio.scss"
import image from  "../../img/Snimok-jekrana-20220607-v-01.59.43.png"
import Aos from "aos/src/js/aos";
import  {ReactTypical} from "@deadcoder0904/react-typical"



const Portfolio = () => {
    Aos.init()
    return (
        <div
            className="section">
            <div className="section-page">
                <div className="section-page-div">
                    <h1 data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-offset="400"
                        data-aos-delay="1000"
                        data-aos-duration="1100"
                        className="section-page-div-sub">
                        I
                        <ReactTypical
                            wrapper="a"
                            loop={3}
                            steps={[
                                1000,
                                 " Orozbekov Janybek",
                                3000,
                                ' am a Front-Ent Development',
                                1000,
                            ]}
                        />
                    </h1>

                    <p data-aos="fade-up"
                       data-aos-delay="1500"
                       data-aos-duration="1100"
                       data-aos-once="true"
                       className="section-page-div-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
                        elit, sed do eiusmod tempor incididunt ut labore et<br/>
                        dolore magna aliqua.
                    </p>
                </div>

                    <img
                        data-aos-once="true"
                        data-aos="fade-left"
                        data-aos-delay="100"
                        data-aos-duration="1100"

                        className="section-page-image" src={image}/>



            </div>

            
        </div>
    );
};

export default Portfolio;