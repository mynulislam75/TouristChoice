import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';



const Shipping = () => {

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


    return (
        <div>
            <div className="row container">




                {/* <div className="col md-5">

                    <div className="row container mt-5">


                        {
                            services.map(oneService => (

                                <div className="col-lg-4">

                                    <div className="m-3">
                                        <img className="img-fluid" src={oneService?.image
                                        } alt="" />
                                        <h3>{oneService?.name}</h3>
                                        <p>{oneService?.description}</p>
                                    </div>

                                </div>


                            ))
                        }
                    </div>
                </div> */}


                <div className="col md-7">
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