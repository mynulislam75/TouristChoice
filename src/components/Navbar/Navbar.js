import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Navbar.css'

const Navbar = () => {
    const{user,handleSignOut}=useAuth();
    return (


        <div>




<div id="navbar-id" className="d-flex justify-content-around justify-content-sm-around align-items-center">

<div className="d-flex text-success align-items-center">
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
</div>

</div>






            

            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="navbar-nav me-auto mb-2 mb-lg-0">
                            <div class="nav-item">
                            <NavLink class="nav-link active"  to="/home">HOME</NavLink>
                            </div>
                            <div class="nav-item">
                            <NavLink class="nav-link active"  to="/services">SERVICES</NavLink>
                            </div>
                            <div class="nav-item">
                            <NavLink class="nav-link active" to="/myorder">MYORDER</NavLink>
                            </div>
                            <div class="nav-item">
                            <NavLink class="nav-link active"  to="/myorder">MYORDER</NavLink>
                            </div>


                        </div>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class ="btn btn-outline-success" type ="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav> */}







            {/* <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar> */}










            {/* <div className="row">

                <div className="col-lg-5 col-md-5">
                    <div>
                        <h4>DUBAI TOUR</h4>
                    </div>
                </div>

                <div className="col-lg-7 col-md-7">
                    <div>
                        <div className="row">

                            <div className="col-md-4">
                                <NavLink to="/home">HOME</NavLink>
                            </div>
                            <div className="col-md-4">
                                <NavLink to="/services">SERVICES</NavLink>
                            </div>
                            <div className="col-md-4">
                                <NavLink to="/myorder">MYORDER</NavLink>
                            </div>

                        </div>
                    </div>

                </div>


            </div> */}



        </div>



    );
};

export default Navbar;