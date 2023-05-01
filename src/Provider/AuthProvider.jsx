import app from '../Firbase/Firbase.config';
import React, {
    createContext,
    useEffect,
    useState
} from 'react';

import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";


export const AuthContext = createContext(null)


const Auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loder,setLoader] = useState(true)


    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }


    const sighnIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }


    const logOut = () => {
        setLoader(true)
        signOut(Auth)

    }

    useEffect(() => {
        const ubSubscriber = onAuthStateChanged(Auth, (crentUser) => {
            setUser(crentUser)
            setLoader(false)
        })

        return () => {
            ubSubscriber()
        }
    }, [])


    const authInfo = {
        user,
        loder,
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