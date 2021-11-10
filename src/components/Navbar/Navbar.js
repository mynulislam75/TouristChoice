import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Navbar.css'

const Navbar = () => {
    const { user, handleSignOut } = useAuth();
    return (


        <div>






            <div className="navbar-container">
                <div className="row">
                    <div className="d-flex align-items-center col-md-2 col-lg-2 col-sm-12" >
                        <div >

                            <div>
                                <h2> TOURISM</h2>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-10 col-lg-10 col-sm-12">
                        <div className="menu-items text-center">
                            <ul className="d-flex align-items-end justify-content-end me-5">
                                <li className="items p-2">
                                    <NavLink className="items p-2" to="/home">Home</NavLink>
                                </li>
                                <li className="items p-2">
                                    {
                                        user.email && <NavLink className="items p-2" to="/myOrder">My Orders</NavLink>
                                    }
                                </li>
                                <li className="items p-2">
                                    {
                                        user.email && <NavLink className="items p-2" to="/addServices">Add Service</NavLink>
                                    }
                                </li>
                                <li className="items p-2">
                                    {
                                        user.email && <NavLink className="items p-2" to="/admindashboard">Manage Orders</NavLink>
                                    }
                                </li>
                                <li className="items p-2">
                                    {
                                        user.email ? <button className="items p-2" onClick={handleSignOut}>Log Out</button>
                                            :
                                            <NavLink className="items p-2" to="/login">Log In</NavLink>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>





            {/* <div className="d-flex text-success align-items-center">
                    TOURISM
                </div>

                <div className="d-flex align-items-center">
                    <div className="navlink-containe">
                        <NavLink className="navlink" to="/home">HOME</NavLink>
                        {
                            user.email && <NavLink className="navlink" to="/myOrder">MY ORDER</NavLink>
                        }
                        {
                            user.email && <NavLink className="navlink" to="/addServices">ADD NEW SERVICE</NavLink>
                        }
                        {
                            user.email && <NavLink className="navlink" to="/admindashboard">MANAGE ALL ORDER</NavLink>
                        }

                        {
                            user.email ? <button className="logout-btn bg-success" onClick={handleSignOut}>LOG OUT</button>
                                :
                                <NavLink className="navlink" to="/login">LOG IN</NavLink>
                        }

                    </div>
                </div> */}

        </div>



    );
};

export default Navbar;