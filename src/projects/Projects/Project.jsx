import React from 'react';
import image from "../../img/img_2.png"
import "../../styles/Project/Project.scss"
import Aos from "aos/src/js/aos";



const Project = () => {
    Aos.init()
    return (
        <div className="page">
            <div className="page-subject">
                <h1 className="page-subject-sub">Projects </h1>
                <div className="page-subject-content">
                    <div className="page-subject-content-div"
                        data-aos-once="true"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-offset="100"
                        data-aos-duration="600"
                        >
                        <img alt="" className="page-subject-content-div-img" src={image} />
                        <p className="page-subject-content-div-subtext">
                            PROJECT 1
                        </p>
                        <span className="page-subject-content-div-span"></span>
                        <p className="page-subject-content-div-text">
                            Lorem ipsum dolor sit amet,<br/>
                            consectetur adipiscing elit,<br/>
                            sed do eiusmod tempor incididunt<br/>
                            ut labore et dolore magna aliqua.
                        </p>
                        <button className="page-subject-content-div-btn">
                            Look it up
                        </button>
                    </div>
                    <div
                        data-aos-once="true"
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="600"
                         data-aos-offset="100"
                        className="page-subject-content-div">
                        <img alt="" className="page-subject-content-div-img" src={image} />
                        <p className="page-subject-content-div-subtext">
                            PROJECT 2
                        </p>
                        <span className="page-subject-content-div-span"></span>
                        <p className="page-subject-content-div-text">
                            Lorem ipsum dolor sit amet,<br/>
                            consectetur adipiscing elit,<br/>
                            sed do eiusmod tempor incididunt<br/>
                            ut labore et dolore magna aliqua.
                        </p>
                        <button className="page-subject-content-div-btn">
                            Look it up
                        </button>
                    </div>
                    <div
                        data-aos-once="true"
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-offset="0"
                        data-aos-duration="600"
                        className="page-subject-content-div">
                        <img alt="" className="page-subject-content-div-img" src={image} />
                        <p className="page-subject-content-div-subtext">
                            PROJECT 3
                        </p>
                        <span className="page-subject-content-div-span"></span>
                        <p className="page-subject-content-div-text">
                            Lorem ipsum dolor sit amet,<br/>
                            consectetur adipiscing elit,<br/>
                            sed do eiusmod tempor incididunt<br/>
                            ut labore et dolore magna aliqua.
                        </p>
                        <button className="page-subject-content-div-btn">
                            Look it up
                        </button>
                    </div>
                    <div
                        data-aos-once="true"
                        data-aos="fade-left"
                        data-aos-delay="400"
                        data-aos-duration="600"
                        data-aos-offset="0"
                        className="page-subject-content-div">
                        <img alt="" className="page-subject-content-div-img" src={image} />
                        <p className="page-subject-content-div-subtext">
                            PROJECT 4
                        </p>
                        <span className="page-subject-content-div-span"></span>
                        <p className="page-subject-content-div-text">
                            Lorem ipsum dolor sit amet,<br/>
                            consectetur adipiscing elit,<br/>
                            sed do eiusmod tempor incididunt<br/>
                            ut labore et dolore magna aliqua.
                        </p>
                        <button className="page-subject-content-div-btn">
                            Look it up
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Project;