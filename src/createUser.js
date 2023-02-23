import app from './config'
import {getAuth, onAuthStateChanged, updateProfile} from 'firebase/auth'
import{doc, getFirestore, setDoc} from 'firebase/firestore'

const auth = getAuth(app)
const db = getFirestore(app)
onAuthStateChanged(auth, (user)=>{
    if(user){
        const uid = user.uid;
        console.log(uid)
        const initialProfileForm = document.querySelector("#initialUser")
        initialProfileForm.addEventListener("submit,", (event)=>{
            event.preventDefault()
        })

        const newUser = {
            firstname: initialProfileForm.firstName.value,
            lastname: initialProfileForm.lastName.value,
            dob: initialProfileForm.dob.value,
            deposit: initialProfileForm.initialDeposit.value,
            uid: uid
        }

        updateProfile(auth.currentUser,{
            displayName: initialProfileForm.firstName.value
        })
        .then(()=>{
            //A promise is returned
            console.log("Updated profile")
        })
        .catch((e)=>{
            console.log(e)
        })
        console.log(newUser)

        const userDocRef = doc(db,"users",uid)
        setDoc(userDocRef,newUser)
        .then(()=>{
            console.log("New User Added")
        })
        .catch((e)=>{
            console.log(e)
        })


    } else {
        console.log("signed out on authstate")
    }
})