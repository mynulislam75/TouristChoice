import React from 'react';
import './Beautifulplaces.css'
const Beautifulplaces = () => {
    return (
        <div className="mt-5 container places-container">

            <div className="row">

                <div className="col-lg-6">
                    <h1 className="details-text p-2">DUBAI! <br /> THE PLACE OF DREAM</h1>
                    <h4 className="mt-4">Why Visit Dubai?</h4>
                    <h5>Tourism in Dubai is a part of the Dubai government's strategy to maintain the flow of foreign cash into the emirates. ... In 2018, the strategy was expanded by setting new goals of attracting 21-23 million visitors in 2022 and 23-25 million visitors by 2025.</h5>
                    <p className="mt-5 p-2">Top-Rated Tourist Attractions & Things to Do in Dubai:</p>
                    <ul>
                        <li>See Dubai's Famed Cityscape at Burj Khalifa</li>
                        <li>Sneak in Some Shopping at Dubai Mall</li>
                        <li>Discover UAE history at Dubai Museum</li>
                        <li>Walk through History in Al Fahidi Quarter (Old Dubai)</li>
                        <li>View Traditional Architecture at Sheikh Saeed Al-Maktoum House</li>
                        <li> Delve into Maritime Heritage at Dubai Creek & Al Seef District</li>
                    </ul>
                </div>

                <div className="col-lg-6">
                    <h4>Some historical places in Dubai</h4>
                    <div className="row">
                        <div className="col-lg-6 mt-2">
                            <img className="img-fluid" src="https://images.pexels.com/photos/650222/pexels-photo-650222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        </div>
                        <div className="col-lg-6 mt-2">
                            <img className="img-fluid" src="https://images.pexels.com/photos/3769312/pexels-photo-3769312.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        </div>
                        <div className="col-lg-6 mt-2">
                            <img className="img-fluid" src="https://images.pexels.com/photos/2806522/pexels-photo-2806522.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        </div>
                        <div className="col-lg-6 mt-2">
                            <img className="img-fluid" src="https://images.pexels.com/photos/800694/pexels-photo-800694.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Beautifulplaces;