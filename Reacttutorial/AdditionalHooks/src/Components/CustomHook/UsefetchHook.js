import React, { useEffect, useState } from 'react'

function UseGetHook(url) {
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(true);
  
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            setData(data);
            setLoading(false);
        }).catch(err=>setData(err));
    },[url]);
    
    return {data,loading};
}


export default UseGetHook;