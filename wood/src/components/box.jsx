import PropTypes from "prop-types"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faX } from "@fortawesome/free-solid-svg-icons"
// import { faCheck } from "@fortawesome/free-solid-svg-icons"


export default function Box(props) {
  return (
    <div className="box">
      <img src={props.img} alt="img" />
      <h2>{props.name}</h2>
        <ul>
          {props.property.map((e)=>(<li key="">{e}</li>))}
          {/* {props.icon.map((a)=>(<li key="">{a?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faX}/>}{props.li}</li>))} */}
        </ul>
    </div>
  );
}
Box.propTypes = {
    property: PropTypes.array,
    img: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.bool
}
