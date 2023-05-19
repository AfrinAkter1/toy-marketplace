import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";


export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

// register
 const signInEmail = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
 }

//  login use email password
 const loginEmailPassword = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
 }


//  google login
const loginGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth, provider)
}

// update profile
const handleProfile = (user,name, photourl) =>{
   return updateProfile(user, {
        displayName: name,
        photoURL: photourl

    })
}

// check user
useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        
      setUser(currentUser)
      console.log('current user', currentUser)
      setLoading(false)
    })
    return () =>{
        return unsubscribe()
    }
},[])


// LogOut
const logOut = () =>{
    setLoading(true)
    return signOut(auth)

}



    const authInfo ={
        signInEmail,
        loginEmailPassword,
        loginGoogle,
        handleProfile,
        user,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;