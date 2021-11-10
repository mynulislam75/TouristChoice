import React, { useEffect, useState } from 'react';

const Dashboard = () => {

    const [allOrder, setAllOrder] = useState([]);
    const [controls, setControls] = useState(false);

    const email = sessionStorage.getItem("email");

    useEffect(() => {
        fetch("http://localhost:5000/confirmedOrders")
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, []);


    console.log(allOrder)
    // HANDLE DELETE

    const handleDelete = id => {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Delete This Item? ')
                    setControls(!controls);
                }
            });

        console.log(id);
    }

    return (
        <div className="container">
            <h3>ALL ORDERS HISTORY</h3>

            <div className="container">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Email</th>
                            <th scope="col">Service</th>
                            <th scope="col">Service Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrder.map(singleOrder => (
                                <tr>
                                    <th scope="row">*</th>
                                    <td>{singleOrder?.email}</td>
                                    <td>{singleOrder?.name}</td>
                                    <td>{singleOrder?._id}</td>
                                    <td> <button className="btn btn-info" onClick={() => handleDelete(singleOrder._id)}>CANCEL</button></td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;