import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="banners">
                <div className=" banner row justify-content-center align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="container">
                                <h1 className="banner-title">Dubai-Experiential journeys <br /> will make you a storyteller.</h1>
                                <p className="sub-title">In Dubai, everything is possible! Dubai is writing its own story with the swanky sky high and the numerous entertainment options. </p>
                                <button className="banner-btn">Explore Now</button>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;