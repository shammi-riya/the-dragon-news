import React, { createContext,
     useEffect,
     useState } from 'react';
import app from '../Firbase/Firbase.config';
import { createUserWithEmailAndPassword,
     getAuth,
     onAuthStateChanged,
     signInWithEmailAndPassword,
     signOut } from "firebase/auth";


export const AuthContext = createContext(null)

const Auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)


    const createUser =(email,password)=>{
       return createUserWithEmailAndPassword(Auth,email,password)
    }


    const sighnIn = (email,password)=>{
        return signInWithEmailAndPassword(Auth,email,password)
    }


    const logOut = ()=>{
        signOut(Auth)
        
    }

    useEffect(()=>{
       const ubSubscriber = onAuthStateChanged(Auth,(crentUser)=>{
          setUser(crentUser)
       })  
       
       return()=>{
        ubSubscriber()
       }
    },[])


    const authInfo = {
        user,
        createUser,
        sighnIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;