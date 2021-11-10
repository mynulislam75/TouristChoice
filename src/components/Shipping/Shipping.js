import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';



const Shipping = () => {
    const { user } = useAuth()
    const email = sessionStorage.getItem("email")
    const { servicesId } = useParams();
    const [services, setService] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${servicesId}`)
            .then(res => res.json())
            .then(data => setService(data))


    }, [])

    console.log(services)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.email = email;
        // post method
        fetch('http://localhost:5000/confirmOrder', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => console.log(result));
        console.log(data);
    }

    console.log(user)
    return (
        <div>

            <div className="container mb-4 mt-2">
                <h3>Hello,{user.displayName}</h3><br />
            </div>

            <div className="row container">

                <div className="col-lg-7">
                    <div className="m-3">
                        <img className="img-fluid" src={services?.image
                        } alt="" />
                        <h2>Service name:{services?.name}</h2>
                        <h6>Descrption:</h6><br /><small>{services?.description}</small>
                    </div>
                </div>


                <div className="col-md-5 col-lg-5 p-5">
                    <h3>Wants to order?</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>

                
                        <input {...register("userName")}
                            defaultValue={user?.displayName}
                            className="w-75 p-1 m-1"
                        />
                        <br />
              
                        <input {...register("email")}
                            defaultValue={user?.email}
                            className="w-75 p-1 m-1"
                        />
                        <br />
                    
                        <input {...register("name")}
                            defaultValue={services?.name}
                            className="w-75 p-1 m-1"
                        />
                        <br />
                       
                        <input {...register("address")}
                            type="comments"
                            placeholder="Your address"
                            className="w-75 p-1 m-1"
                        />
                        <br />
                        <input {...register("comments")}
                            type="comments"
                            placeholder="Add some comments"
                            className="w-75 p-1 m-1"
                        />
                        <br />
                        <input {...register("price")}
                            defaultValue={services?.Price}
                            className="w-75 p-1 m-1"
                        />
                        <br />
                        <input {...register("image")}
                            defaultValue={services?.image}
                            className="w-75 p-1 m-1"
                        />
                        <br />

                        {errors.exampleRequired && <span>This field is required</span>}
                        <small>NB:For making successfull order make sure you hit all input form</small>
                        <input type="submit"
                            value="Order Now"
                            className="btn btn-info" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Shipping;