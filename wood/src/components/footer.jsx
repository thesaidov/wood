import { faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import  {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import './footer.scss'

export default function Footer() {
  return (
    <div className="footer" id="footer">
        <ul>
            <span><img src="../../public/logo.png" alt="logo" /></span>
            <span><FontAwesomeIcon icon={faPhoneVolume}/><p>+420 000 000 000</p></span>
            <span><FontAwesomeIcon icon={faLocationDot}/><p>Na Plzeňce 1166/0150 00</p></span>
        </ul>
        <p>Privacy Policy</p>
    </div>
  )
}
