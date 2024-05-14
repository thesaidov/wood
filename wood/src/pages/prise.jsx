
import OurWork from "../components/ourWork"
import Question from "../components/question"

export default function Price() {
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "250px"
  }
  return (
    <div style={style}>
      <OurWork/>
      <Question/>
    </div>
  )
}
