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
            <div className="row container">




                <div className="col-lg-7">

                    <div className="row">
                        <div className="col-lg-6">
                            <img src={user?.photoURL} alt="" />
                            <h4>Hello,{user?.displayName}!</h4>
                        </div>

                        <div className="col-lg-6">
                            <div className="m-3 service-container">
                                <img className="img-fluid" src={services?.image
                                } alt="" />
                                <h3>{services?.name}</h3>
                                <p>{services?.description}</p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="col md-5">
                    <h3>React hook form</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* <input defaultValue="test" {...register("example")} /> <br /> */}


                        <input {...register("name")}
                            defaultValue={services?.name}
                        />
                        <br />

                        <input {...register("comments")}
                            type="comments"
                            placeholder="Comments"
                        // className="p-2 m-2"
                        />
                        <br />
                        <input {...register("price")}
                            defaultValue={services?.Price}
                        />
                        <br />
                        <input {...register("image")}
                            defaultValue={services?.image}
                        />
                        <br />



                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}

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