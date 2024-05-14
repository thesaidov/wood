
import OurWork from "../components/ourWork";
import Type_woods from "../components/type_woods";
import Question from "../components/question"




export default function Galerey() {
    
      const containerStyle = {
        width: "85%",
        height: "auto",
        margin: "0 auto"
      }  
      const style = {
        display :"flex",
        flexDirection: "column",
        gap: "100px"
      }    
  return (
    <div style={style}>
        <div style={containerStyle}><OurWork/></div>
        <Type_woods/>
        <Question/>
    </div>
  )
}
