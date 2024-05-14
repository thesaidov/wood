import ImageSlider from './imageSlider'

export default function OurWork() {
    const slides = [
        {url: "../../public/slideimg.png", title: "img1"},
        {url: "../../public/oak.png", title: "img1"},
        {url: "../../public/buk.png", title: "img1"}
      ]
  return (
    <div style={{width: "90%", margin:"0 auto"}}>
        <h1 style={{margin: "0 0 50px 0"}}>Our Work</h1>
        <ImageSlider slides={slides}/>
    </div>
  )
}
