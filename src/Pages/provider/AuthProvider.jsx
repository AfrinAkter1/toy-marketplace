import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.config";


export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {

 const signInEmail = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
 }
 const loginEmailPassword = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
 }

    const authInfo ={
        signInEmail,
        loginEmailPassword
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;