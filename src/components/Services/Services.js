import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

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




            <h4>${user.email}</h4>


            <h3 className="text-center text-success">OUR SERVICES</h3>
            <div className="row container mt-5">


                {
                    services.map(singleService => (

                        <div className="col-lg-4">

                            <div className="m-3">
                                <img className="img-fluid" src={singleService.image
                                } alt="" />
                                <h3>{singleService.name}</h3>
                                <p>{singleService.description}</p>
                                <Link to={`/shippping/${singleService._id}`}>

                                    <button className="bg-danger">Go For Shipping</button>
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