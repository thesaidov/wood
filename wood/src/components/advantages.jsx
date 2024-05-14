import "./advantages.scss"
import Button from "./button"

export default function Advantages() {
  return (
    <div className="advantages" id="advantages">
        <h1>Advantages working with us</h1>
        <div className="middle">
            <div className="left"><img src="../../public/video.png" alt="video" /></div>
            <div className="right">
                <ul>
                    <p>In-house carpentry production</p>
                    <p>We only treat wood with environmentally friendly and safe products</p>
                    <p>Prices from the manufacturer, no extra charges</p>
                </ul>
            </div>
        </div>
        <Button text="Receive a consultation"/>
    </div>
  )
}
