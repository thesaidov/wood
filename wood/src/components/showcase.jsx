import PropTypes from 'prop-types'
import './showcase.scss'
export default function Showcase(props) {
  const right_type = "right_type"
  const left_type = "left_type"
  const style = (right)=>{
    return {marginLeft: right ? "10%" : "0", borderRadius: right ? "30px 0 0 30px" : "0 30px 30px 0"}
  }
  return (
    <div className={`showcase ${props.right ? right_type : left_type}`} style={style(props.right)}>{props.children}</div>
  )
}

Showcase.propTypes = {
    children: PropTypes.children,
    right: PropTypes.bool
}
