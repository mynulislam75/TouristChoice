import React, { useEffect, useState } from 'react';

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





            <div className="col md-5">

                <div className="row container mt-5">


                    {
                        myOrders.map(oneService => (

                            <div className="col-lg-4">

                                <div className="m-3">
                                    <img className="img-fluid" src={oneService?.image
                                    } alt="" />
                                    <h3>{oneService?.name}</h3>
                                    <p>{oneService?.description}</p>
                                    <button onClick={() => handleDelete(oneService?._id)}>CANCEL</button>
                                </div>

                            </div>


                        ))
                    }
                </div>
            </div>







            {/* <div className="row">
                {
                    myOrders.map(singleOrder => (
                        <div className="col-lg-4">
                            <h4>hghjgjhy</h4>




                            <div className="m-3">
                                <img className="img-fluid" src={singleOrder.image
                                } alt="" />
                                <h3>{singleOrder._id}</h3>
                                <p>{singleOrder.name}</p>
                                <button onClick={() => handleDelete(singleOrder._id)}>CANCEL</button>
                            </div>
                        </div>
                    ))
                }
            </div> */}

        </div >
    );
};

export default MyOrders;