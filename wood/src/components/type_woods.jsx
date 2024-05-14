import Box from "./box";
import "./type_wood.scss";


export default function Type_woods() {
  const array1 = [
    {name: "Oak", properties: ["Durability", "Beutiful texture","Water resistence","Expensive"], property_type: [true, true, true, false], img: "../../public/oak.png"},
    {name: "Buk", properties: ["Durability", "Hard to handle"], property_type: [true, false], img: "../../public/buk.png"},
    {name: "Ash", properties: ["Durability", "Hard to handle"], property_type: [true, false], img: "../../public/ash.png"},
  ]

  return (
    <div className="type_wood">
        <h1>THE WOOD WE WORK WITH</h1>
        <div className="boxes">
          {/* {array1.map((wood)=>(<Box li={wood.properties} img={wood.img} name={wood.name} icon={wood.property_type} key=""/>))} */}
          <Box name={array1[0].name} img={array1[0].img} property={array1[0].properties}/>
          <Box name={array1[1].name} img={array1[1].img} property={array1[1].properties}/>
          <Box name={array1[2].name} img={array1[2].img} property={array1[2].properties}/>
        </div>
    </div>
  )
}
