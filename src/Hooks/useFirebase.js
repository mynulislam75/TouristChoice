


import React, { useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';


initializeAuthentication();


const useFirebase = () => {


    // store data in usestate
    const [user, setUser] = useState({})

    const [error, setError] = useState({})
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const provider = new GoogleAuthProvider();




    // SIGN IN WITH GOOGLE
    const handleGoogleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
                sessionStorage.setItem("email",result.user.email)
            })
            .finally(() => setIsLoading(false));
    }



    // MIDDLE WARE FOR KNOWING SOME IMPORTANT INFO
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])



    // SIGNOUT
    const handleSignOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false));
    }


    // RETURN FROM THIS FUNCTION
    return { user, error, handleGoogleSignIn, handleSignOut, isLogin, isLoading }
};

export default useFirebase;