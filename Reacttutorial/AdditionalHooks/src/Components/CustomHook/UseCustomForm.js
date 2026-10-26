import React, { useState } from 'react'

function UseCustomForm(initialValue) {
  const [dataObj,setData] = useState(initialValue);

  const handleData = (event)=>{
    setData({
        ...dataObj,
        [event.target.name]:event.target.value,
    })
  }
  return {dataObj,handleData};
}

export default UseCustomForm;