import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
                <div className="banner-section">
                <div className="row container">
                    <div className="description-text position-absolute bottom-0 p-3 col-lg-6 col-md-6 col-sm-6">
                        <h1>Specialties, Services & Treatments</h1>
                        <p>We provide a full range of family care and more than 40 specialty and subspecialty health care services for patients in our service area.
                            Explore specialized care or select a particular service to learn more.</p>
                        <button className="bg-success btn-regular">JOIN US</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;