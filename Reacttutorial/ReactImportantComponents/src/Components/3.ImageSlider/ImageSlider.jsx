import React, { useEffect, useState } from "react";
import "./imageSlider.css";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs";

function ImageSlider({ url, limit = 10, page = 1 }) {
  const [imageData, setImageData] = useState([]);
  const [loader,setLoader] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  async function fetchData(url, page, limit) {
    try {
      const res = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await res.json();
      console.log(data);
    if(data) {
        setImageData(data);
        setLoader(false);
    }
    } catch (err) {
      console.log(err.message);
    }
  }
  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? imageData.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === imageData.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url) fetchData(url, page, limit);
  }, [url]);

  if(loader) return <p>Loading...</p>

  return <div className="imageSlidercontainer">
    <BsArrowLeftCircleFill className="leftArrow arrow" onClick={handlePrevious} />
    {
        imageData.length > 0 ? (
            imageData.map((elem,idx)=>{
                return <img key={elem.id} alt={elem.download_url} src={elem.download_url} className={
                    currentSlide === idx
                      ? "current-image"
                      : "hide-current-image"
                  } />
            })
        ) : null 
    }
    <BsArrowRightCircleFill className="rightArrow arrow" onClick={handleNext}/>
    <span className="circleIndicator">
        {
            imageData.length > 0 ? (
                imageData.map((elem,idx)=>{
                    return <button key={elem.id} className={
                        currentSlide === idx
                          ? "current-Indicator"
                          : "current-Indicator inactive-indicator"
                      }
                      onClick={() => setCurrentSlide(idx)} ></button>
                })
            ):null
        }
    </span>
  </div>;
}

export default ImageSlider;
