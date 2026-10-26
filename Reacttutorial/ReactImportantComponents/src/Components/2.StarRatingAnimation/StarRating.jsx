import React, { useState } from 'react'
import "./starRating.css"
import {FaStar} from "react-icons/fa";

function StarRating({noOfStars = 5}) {
    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);

    function handleClick(getCurrentIdx){
        // console.log(getCurrentIdx);
        setRating(getCurrentIdx);
    }
    function handleMouseEnter(getCurrentIdx){
        // console.log(getCurrentIdx);
        setHover(getCurrentIdx);
        
    }
    function handleMouseLeave(){
        // console.log(getCurrentIdx);
        setHover(rating);
    }
   return (
    <div className='star-rating'>
        {
            [...Array(noOfStars)].map((elem,idx)=>{
                idx += 1;
                return <FaStar className={idx <= (hover || rating) ? "active" : "inactive"} key={idx} onClick={()=>handleClick(idx)} onMouseMove={()=>{handleMouseEnter(idx)}} onMouseLeave={()=>{handleMouseLeave()}} size={40} />
            })
        }
    </div>
  )
}

export default StarRating;