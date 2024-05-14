import './navbar.scss'
import img from "../../public/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import { UserContext } from './state'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const user = useContext(UserContext)
  const [ul_res, setUl_res] = useState(true)
 
  async function logout(e){
    e.preventDefault()
    toast.success("Successfully logged out !", {
      position: "top-center"
    });
    user.setLogin(false)
  }
  return (
    <nav>
        <a className="img" href='/'><img src={img} alt="img" /></a>
        <FontAwesomeIcon icon={faBars} className='fontAwesomeIcon' onClick={()=>{setUl_res(!ul_res)}}/>
        <div className={`ul ${ul_res? "ul_res": ""}`}>
          <ul>
              <li><a href="/galerey">Galary</a></li>
              <li><a href="/price">Prices</a></li>
              <li><a href="/about">About us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/register">Register</a></li>
              {user.login ? <li><a href='' onClick={logout}>Log out</a></li> : <li><a href="/login">Log in</a></li>}
              <ToastContainer />
          </ul>
        </div>
    </nav>
  )
}
