import app from "./config"
import {browserSessionPersistence, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, signOut} from "firebase/auth"
// import { create } from "domain"


const auth = getAuth(app)

const createAccountForm = document.getElementById("createAccount")
createAccountForm.addEventListener("submit",(event)=>{
    event.preventDefault()

    const name = createAccountForm.name.value
    const email = createAccountForm.email.value
    const pass = createAccountForm.password.value

    setPersistence(auth, browserSessionPersistence)
    .then(()=>{
        //Promise returned by setPersistence
        createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential)=>{
            const user = userCredential.user
            location.href = "createUser.html"
        })
    })
    .catch((e)=>{
        //Error from persistence caught
        console.log(e)
    })
})

const signInForm = document.getElementById("signIn")
signInForm.addEventListener("submit",(event)=>{
    event.preventDefault()

    setPersistence(auth, browserSessionPersistence)
    .then(()=>{

        const email = signInForm.email.value
        const pass = signInForm.password.value
        //Promise returned by setPersistence
        signInWithEmailAndPassword(auth, email, pass)
        .then((user)=>{
            console.log(user.displayName)
            console.log("Signed in with created user")
            console.log(auth)
        }).catch((e)=>{
            console.log(e)
        })
    })
    .catch((e)=>{
        //Error from persistence caught
        console.log("Persistence error 2")
    })
})

const signOutUserForm = document.querySelector("#signOut")
signOutUserForm.addEventListener("submit", (event) => {
    event.preventDefault()
    signOut(auth).then(()=>{
        //Sign Out successful
        console.log("signed out")
    }).catch((error)=>{
        //An error happened
    })
})

onAuthStateChanged(auth, (user)=>{
    if(user){
        const uid = user.uid;
        console.log(uid)
        console.log("Signed in onAuthState")
    } else {
        console.log("signed out on authstate")
    }
})