import { useEffect, useRef, useState } from "react"
import Button from "../components/button"
import axios from "axios";
import {useNavigate} from "react-router-dom"
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
const PSW_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_!@#$%]).{8,24}$/
const EMAIL_REGEX = /^\S+@\S+\.\S+$/
function Register() {
    const userRef = useRef()
    const passwordRef = useRef()
    const nav = useNavigate()

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [focusName, setFocusName] = useState(false)

    const [psw, setPsw] = useState('')
    const [validPsw, setValidPsw] = useState('')
    const [focusPsw, setFocusPsw] = useState(false)

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [focusEmail, setFocusEmail] = useState(false)

    useEffect(()=>{
        const result = EMAIL_REGEX.test(email)
        console.log(email);
        if (result) {
            setValidEmail(email)
        }
    }, [email])

    useEffect(()=>{
        const result = USER_REGEX.test(user)
        console.log(user);
        if (result) {
            setValidName(user)
        }
    }, [user])

    useEffect(()=>{
        const result = PSW_REGEX.test(psw)
        console.log(psw);
        if (result) {
            setValidPsw(psw)
        }
    }, [psw])

    
    const styleForm = ()=>{
        return{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            justtifyContent: "center"
        }
    }
    const styleReg = {
        width: "60%",
        margin: "50px auto",
        textAlign: "center",
        backgroundColor: "rgb(30, 12, 6, 1)",
        padding: "50px",
        borderRadius: "50px",
        boxShadow: "0px 4px 52px 0px rgba(245, 245, 245, 0.17)",
        input: {
            width: "60%",
            margin: "0 auto",
            backgroundColor: "transparent",
            borderRadius: "30px",
            padding: "20px",
            border:"2px solid rgba(114, 139, 173, 1)",
        }
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/api/user/register", {
            name: validName,
            email: validEmail,
            password: validPsw,
            isAdmin: false
        })
        .then((res)=>{if(res.status == 200){
            setValidName('')
            setValidPsw('')
            setValidEmail('')
            nav("/login")
        }})
        .catch((err)=>{console.log(err)})
    }
  return (
    <div className="register" style={styleReg}>
        <h2>Register</h2>
        <form style={styleForm()} onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input 
                type="email"
                style={styleReg.input}
                onChange={(e)=>{setEmail(e.target.value)}}
                onFocus={()=>{setFocusEmail(true)}}
                onBlur={()=>{setFocusEmail(false)}}
            />
            <p style={focusEmail && !validEmail && email ? {display: "block"} : {display: "none"}}>Wrong email</p>
            <label htmlFor="username">Username: </label>
            <input 
            style={styleReg.input}
                type="text" 
                ref={userRef}
                id="username"
                required
                onChange={(e)=>{setUser(e.target.value)}}
                aria-invalid={validName ? true : false}
                onFocus={()=>{setFocusName(true)}}
                onBlur={()=>{setFocusName(false)}}
                />
                <p style={focusName && user && !validName ? {display: "block"} : {display: "none"}}>
                    4 to 24 characters<br/>
                    Must begin with letter<br/>
                </p>
            <label htmlFor="password">Password: </label>
            <input 
            style={styleReg.input}
                type="password" 
                id="password"
                ref={passwordRef}
                required
                onChange={(e)=>{setPsw(e.target.value)}}
                aria-invalid={validPsw ? true : false}
                onFocus={()=>{setFocusPsw(true)}}
                onBlur={()=>{setFocusPsw(false)}}
                />
                <p style={focusPsw && psw && !validPsw ? {display: "block"} : {display: "none"}}>
                    8 to 24 characters<br/>
                    Must contain number and (_ ! @ # $ %) one of this symbols<br/>
                </p>
            <Button text={"Submit"}/>
            </form>
    </div>
  )
}

export default Register