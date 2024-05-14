import PropTypes from "prop-types"

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";

export default function ImageSlider(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderStyles = {
    height: "700px",
    position: "relative"
  }
  const slideStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${props.slides[currentIndex].url})`
  }
  const leftStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0%, -50%)",
    left: "-50px",
    fontSize: "30px",
    zIndex: "1",
    cursor: "pointer"
  }
  const rightStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0%, -50%)",
    right: "-50px",
    fontSize: "30px",
    fontWeight: "300px",
    zIndex: "1",
    cursor: "pointer"
  }
  const dotsStyle = {
    display: "flex",
    width: "30%",
    margin: "10px auto",
    gap: "10px",
    justifyContent: "center",
    cursor: "pointer"
  }
  function goToPrevious() {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? props.slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  function goToNext() {
    const isLastSlide = currentIndex === props.slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  const goToSlide = slideIndex =>{
    setCurrentIndex(slideIndex)
  }
  return (
    <div style={sliderStyles}>
      <div style={leftStyle}><FontAwesomeIcon icon={faArrowLeft} onClick={goToPrevious}/></div>
      <div style={rightStyle}><FontAwesomeIcon icon={faArrowRight} onClick={goToNext}/></div>
      <div style={slideStyle}></div>
      <div style={dotsStyle}>{props.slides.map((slide, slideIndex)=>(
        <div key={slideIndex}><FontAwesomeIcon icon={faCircleDot} onClick={()=>goToSlide(slideIndex)}/></div>
      ))}</div>
    </div>
  )
}


ImageSlider.propTypes = {
  slides: PropTypes.array
}

