import { useEffect } from 'react'
import './App.css'
import About from './components/about'
import Advantages from './components/advantages'
import ImageSlider from './components/imageSlider'
// import Navbar from './components/navbar'
import Order from './components/order'
import Question from './components/question'
import Type_woods from './components/type_woods'
import axios from 'axios'

function App() {

const slides = [
  {url: "../../public/slideimg.png", title: "img1"},
  {url: "../../public/oak.png", title: "img1"},
  {url: "../../public/buk.png", title: "img1"}
]

const containerStyle = {
  width: "85%",
  height: "auto",
  margin: "0 auto"
}

useEffect(()=>{
  axios.get('http://localhost:3000/api/product')
  .then(res=>{
    const temp = res.data
    temp.map((data)=>{
      console.log(data.name);
    })
  })
  .catch(err=>{console.log(err);})
}, [])
  return (
    <div className='app'>
      <Order/>
      <Type_woods/>
      <Advantages/>
      <div style={containerStyle}><ImageSlider slides={slides}/></div>
      <About/>
      <Question/>
    </div>
  )
}

export default App
