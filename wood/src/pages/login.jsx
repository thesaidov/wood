import { useContext, useState } from "react";
import Button from "../components/button";
import axios from "axios";
import { UserContext } from "../components/state";
import {useNavigate} from "react-router-dom";


export default function Login() {
    const [error, setError] = useState(false)
    const IsLogin = useContext(UserContext)
    const nav = useNavigate()
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
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
    const styleForm = ()=>{
        return{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            justtifyContent: "center"
        }
    }
    const handleclick = async (e)=>{
        e.preventDefault()
        await axios.get('http://localhost:3000/api/user')
        .then((res)=>{
            let data = res.data
            console.log(user);
            console.log(password);
            data.map((u)=>{
                if (u.name == user && u.password == password) {
                    IsLogin.setLogin(true)
                    setError(false)
                    nav("/")
                }else{
                    setError(true)
                }
            })
        })
        .catch((err)=>{console.log(err)})
    }
  return (
    <div style={styleReg}>
        <h2>Login</h2>
        <form onSubmit={handleclick} style={styleForm()}>
            <label htmlFor="name" style={styleReg.label}>Username: </label>
            <input type="text" id="name" onChange={(e)=>{setUser(e.target.value)}} style={styleReg.input} />
            <label htmlFor="pass" required style={styleReg.label}>Password: </label>
            <input type="password" id="pass" required  onChange={(e)=>{setPassword(e.target.value)}} style={styleReg.input}/>
            <p style={error ? {display: 'block'} : {display: "none"} }>Please check username and password and try again</p>
            <Button text="Submit"/>
        </form>
    </div>
  )
}
