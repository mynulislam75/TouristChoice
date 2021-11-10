import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Services.css'

const Services = () => {
    const { user } = useAuth();
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/allServices")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="container mt-5">

            <div className="text-center">
            <h2 className="">Our services</h2>
            <small>Confirm your tickit from our available services right now!</small>
            </div>
          
            <div className="row container mt-3">
                {
                    services.map(singleService => (

                        <div className="col-lg-4">

                            <div className="m-3 service-container">
                                <img className="img-fluid" src={singleService.image
                                } alt="" />
                                <h3>{singleService.name}</h3>
                                <p>{singleService.description}</p>
                                <Link to={`/shippping/${singleService._id}`}>

                                    <button className="regular-btn">Buy Tickit</button>
                                </Link>
                            </div>

                        </div>


                    ))
                }
            </div>

        </div>
    );
};

export default Services;