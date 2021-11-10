import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

const {handleGoogleSignIn}=useAuth();

const location = useLocation();
const history = useHistory();
const redirect_uri = location.state?.from || '/home';


const handleGoogleLogin = () => {
    handleGoogleSignIn()
        .then(result => {
            history.push(redirect_uri);
        })
}
    return (
        <div className="text-center container mt-5">
            <h3>Please log in</h3>
            <button className="btn btn-success" onClick={handleGoogleLogin}>Google Log in</button>
        </div>
    );
};

export default Login;