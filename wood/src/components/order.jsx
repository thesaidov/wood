import './order.scss'
import img1 from "../assets/image1.png"
import img2 from "../assets/image 2.png"
import img3 from "../assets/image 3.png"
import Showcase from './showcase';
import Button from './button';

export default function Order() {
  return (
    <Showcase right={true}>
    <div className="order" id='order'>
        <div className="left">
            <div className="text">
                <p className='header'>Solid wood products</p>
                <p>Oak, beech, ash from <b>1700 CZK</b> per m3</p>
            </div>
            <Button text="Order"/>
        </div>
        <div className="right">
            <div className='right_left'><img src={img1} alt="img" /></div>
            <div className='right_right'>
                <img src={img2} alt="img" />
                <img src={img3} alt="img" />
            </div>
        </div>
    </div>
    </Showcase>
  )
}
