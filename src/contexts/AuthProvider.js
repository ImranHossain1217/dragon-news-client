import React, { createContext, useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
   const [user,setUser] = useState({});
   
   const loginWithGoogle = (provider) => {
    return signInWithPopup(auth,provider);
   };
   const logOut = () => {
    return signOut(auth);
   }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser);
        });
        return () => {
            unsubscribe()
        }
    },[])

    const authInfo = { user, loginWithGoogle,logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;