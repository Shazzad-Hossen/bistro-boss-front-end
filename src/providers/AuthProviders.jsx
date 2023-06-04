import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../configs/firebase.config";
import { API } from "../utilities/variables";
import axios from "axios";

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
            //get and set token
            if(loggedUser){
                axios.post(`${API}/jwt`,{email: loggedUser.email})
                .then(data=>{
                    console.log(data.data);
                    localStorage.setItem('bistro-access-token',data.data);
                })
            }
            else {
                localStorage.removeItem('bistro-access-token');
            }
            setLoading(false);
           
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