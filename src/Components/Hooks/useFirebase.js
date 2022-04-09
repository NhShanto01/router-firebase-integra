import { useEffect, useState } from "react"
import app from "../../firebase.init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


const useFirebase = () => {
    const auth = getAuth(app);
    const googleProviser = new GoogleAuthProvider({});
    const [user, setUser] = useState({});



    const signInWithGoogle = () => {
        // console.log('sign in soon');
        signInWithPopup(auth, googleProviser)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])


    return {
        user,
        handleSignOut,
        signInWithGoogle
    }
}

export default useFirebase;