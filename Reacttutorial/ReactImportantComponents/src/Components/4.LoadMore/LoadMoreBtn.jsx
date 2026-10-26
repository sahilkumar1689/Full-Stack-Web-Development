import React, { useEffect, useState } from 'react'
import "./loadMore.css";

function LoadMoreBtn() {

    const [dataArr,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [count,setCount] = useState(0);

    async function fetchData(){
        try {
            setLoading(true);
            const res = await fetch(`https://dummyjson.com/posts?limit=10&skip=${count*20}`);
            const resdata = await res.json();
            // console.log(resdata);
            if(resdata) {
                setData(prev=>[...prev,...resdata.posts]);
                setLoading(false);
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(()=>{
        fetchData();
    },[count]);

    if(loading) return <p>Loading...</p>

  return (
    <>
    <div className='loadingMoreContainer'>
        {
            dataArr.length >=0 ? dataArr.map((elem,idx)=>{
                return (
                    <div key={idx} className="postContainer">
                        <h2>{elem.title}</h2>
                        <p>{elem.body}</p>
                    </div>
                )
            }) : null
        }
    </div>
    <button disabled={dataArr.length === 100} onClick={()=>setCount(prev=>prev+1)}>LoadMore</button>
    </>

  )
}

export default LoadMoreBtn