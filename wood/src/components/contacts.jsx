import "./contacts.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faLocationDot } from "@fortawesome/free-solid-svg-icons";


export default function Contacts() {
  return (
      <div className="contacts">
        <div className="text">
          <h1>CONTACT</h1>
          <span><FontAwesomeIcon icon={faPhoneVolume}/><p>+420 000 000 000</p></span>
          <span><FontAwesomeIcon icon={faLocationDot}/><p>Na Plzeňce 1166/0150 00</p></span>
        </div>
        <div className="media">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23963.610636358746!2d69.33787600648671!3d41.34254281740141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef48a8ed4d0e9%3A0x3772abeffc72e7b8!2z0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQmNC90YXQsA!5e0!3m2!1sru!2s!4v1705319787812!5m2!1sru!2s" width="500" height="500" style={{border:0, borderRadius: "30px"}} allowfullscreen={true} loading={"eager"}></iframe>
        </div>
      </div>
  )
}
