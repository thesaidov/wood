
import About from "../components/about"
import OurWork from "../components/ourWork"
import Question from "../components/question"
function Aboutus() {
  const style = {
    display: "flex",
    flexDirection:"column",
    gap: "100px"
  }
  return (
    <div style={style}>
      <About/>
      <OurWork/>
      <Question/>
    </div>
  )
}



export default Aboutus
