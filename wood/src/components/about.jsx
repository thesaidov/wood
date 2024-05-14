
import "./about.scss"
import Showcase from "./showcase"

export default function About() {
  return (
    <Showcase right={false}>
    <div className='about' id="about">
        <div className="left">
            <div className="text">
              <h1>About us</h1>
              <p>BIO CWT  - We manufacture solid wood products according to individual drawings. We make chairs, armchairs, wardrobes, beds and much more in our own workshop, equipped with all the necessary industrial equipment.</p>
            </div>
        </div>
        <div className="right">
          <img src="../../public/person-taking-measures-wood 1.png" alt="man" />
          <img src="../../public/youngman.png" alt="man" />
          <img src="../../public/cropped-man-wearing-blue-overall-drawing-furniture-sheet-paper 1.png" alt="man" />
        </div>
    </div>
    </Showcase>
  )
}
