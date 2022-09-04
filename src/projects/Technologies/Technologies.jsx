import React from 'react';
import image from "../../img/image 2.svg"
import imageCss from "../../img/css3.svg"
import "../../styles/technologies/technologies.scss"
import Aos from "aos/src/js/aos";



const Technologies = () => {
    Aos.init()
    return (
        <div className="technologies">
            <h1 className="technologies-sub">Technologies</h1>
            <div className="technologies-main">
                <div className="technologies-main-html">
                    <div className="technologies-main-html-project">
                        <div className="technologies-main-html-project-div">
                            <img className="technologies-main-html-project-div-img" src={image}/>
                            <div className="technologies-main-html-project-div-aside">
                                <h1 className="technologies-main-html-project-div-aside-sub">HTML</h1>
                                <div className="technologies-main-html-project-div-aside-span">

                                </div>
                            </div>

                            <p className="technologies-main-html-project-div-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="technologies-main-html-project-div">
                            <img className="technologies-main-html-project-div-img" src={image}/>
                            <div className="technologies-main-html-project-div-aside">
                                <h1 className="technologies-main-html-project-div-aside-sub">HTML</h1>
                                <div className="technologies-main-html-project-div-aside-span">

                                </div>
                            </div>

                            <p className="technologies-main-html-project-div-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="technologies-main-html-project-div">
                            <img className="technologies-main-html-project-div-img" src={image}/>
                            <div className="technologies-main-html-project-div-aside">
                                <h1 className="technologies-main-html-project-div-aside-sub">HTML</h1>
                                <div className="technologies-main-html-project-div-aside-span">

                                </div>
                            </div>

                            <p className="technologies-main-html-project-div-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="technologies-main-html-project-div">
                            <img className="technologies-main-html-project-div-img" src={image}/>
                            <div className="technologies-main-html-project-div-aside">
                                <h1 className="technologies-main-html-project-div-aside-sub">HTML</h1>
                                <div className="technologies-main-html-project-div-aside-span">

                                </div>
                            </div>

                            <p className="technologies-main-html-project-div-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                    </div>


                    <div className="technologies-main-html-section">
                        <h1 className="technologies-main-html-section-title">
                            HTML
                        </h1>
                        <p className="technologies-main-html-section-text">
                           90%
                        </p>
                    </div>
                    <div className="technologies-main-html-widget">
                        <div
                            data-aos-once="true"
                            data-aos="custom"
                            data-aos-delay="100"
                            data-aos-offset="100"
                            data-aos-duration="3000"
                            className="technologies-main-html-widget-page">

                        </div>

                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Technologies;