import React, { useEffect, useState } from 'react';
import './MyOrders.css'

const MyOrders = () => {


    const email = sessionStorage.getItem("email");

    const [myOrders, setMyOrders] = useState([]);

    const [control, setControl] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [control])




    // HANDLE DELETE

    const handleDelete = id => {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Delete This Item? ')
                    setControl(!control);
                }
            });

        console.log(id);
    }

    return (
        <div>

            <div className="container">
                <h3 className="m-5">Your ordered services</h3>
                <div className="row container p-2">
                    {
                        myOrders.map(oneService => (

                            <div className="col-lg-4 col-md-2 col-sm-12">

                                <div className="m-4 p-3 order-container">
                                    <img className="img-fluid" src={oneService?.image
                                    } alt="" />
                                    <h3>Service name: <br /> {oneService?.name}</h3>
                                    <p>{oneService?.description}</p>
                                    <button className="cancel-btn" onClick={() => handleDelete(oneService?._id)}>CANCEL</button>
                                </div>

                            </div>


                        ))
                    }
                </div>
            </div>

        </div >
    );
};

export default MyOrders;