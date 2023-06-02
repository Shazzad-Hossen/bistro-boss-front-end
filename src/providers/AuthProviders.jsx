import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../configs/firebase.config";

const auth= getAuth(app);
export const AuthContext=createContext(null);


const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const googleProvider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();


    const userSignUP= (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userSignIN= (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignin=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const fbSignin=()=>{
        setLoading(true);
        return signInWithPopup(auth, fbProvider);
    }
    const userSignOut= ()=>{
        setLoading(true);
        return signOut(auth);

    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,loggedUser=>{
            setUser(loggedUser);
            setLoading(false)
            console.log(loggedUser);
        })
            
      

        return ()=>{
             unsubscribe();
        }

    },[])


    const authInfo= {
        user,
        loading,
        userSignIN,
        userSignUP,
        userSignOut,
        googleSignin,
        fbSignin,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProviders;