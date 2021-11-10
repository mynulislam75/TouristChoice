import React from 'react';
import './Beautifulplaces.css'
const Beautifulplaces = () => {
    return (
        <div className="mt-5 container">

            <div className="row">
                <div className="col-lg-6">
                    <h1>DUBAI IS THE PLACE OF DREAM</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ad quidem doloribus temporibus similique, vel repellendus recusandae iusto consequatur consectetur ducimus fugiat quam rem sunt modi deserunt perferendis beatae qui.</p>
                </div>

                <div className="col-lg-6">
                    <h2>SOME HISTORICAL PLACES OF DUBAI</h2>
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