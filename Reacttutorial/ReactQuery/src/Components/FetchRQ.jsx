import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPost } from "../Services/Ap";
import { useNavigate } from "react-router-dom";

function FetchRQ() {
  const getPostData = async () => {
    try {
      let res = await getPost();

      if (res.status >= 200 && res.status < 300) {
        // console.log(res.data);
        return res.data;
      } else return [];
    } catch (err) {
      console.log(err.message);
    }
  };

  // It generally return alot of function you check in the documentation , but we mostly use only data = which return the actuall data from the api, isPending = Is return boolean value which tell is data fetched or not, isError = Also return boolean value which tells After fetched is data comes successfully or not,error = It show the error message, status
  const { data, isPending, isError, error, status } = useQuery({
    queryKey: ["Posts"], // Like UseStates = You consider like a useState which is used to store the data.
    queryFn: getPostData, // Like UseEffects = Consider like a useEffect which automatically fecthed the data when reloaded.

    // gcTime = It stands for garbageCollector Time.Firstly,one thing you need to know that after successfully fetches the data useQuery Hook stores that data in the cache memory.Now the gcTime is realated to the cache memory,Suppose we fecthing the data when page is reloaded using useQuery Hook,so after navigating from the other pages when we comes back on that particular page they again try to fetch the data from the api but during their pending state they not show the loading state, instead they show the data stored in cache memory , so after that when the new data is fetched completely they matches that new data with the cache data and if changes detected they relace it with the new data else remain constant.But here the point what amount or what duration of time that data store in the cache memory it is called gctTime, bydefault it is 5 min, but we can also give it manually in milliseconds.
    // gcTime: 10000,
    // State time = It is also related to the previous example, we clearly see in the previous example, although the data comes from the cache but in the background the api request is called and after that they compares the data and load the new data , but let say we want some specific amount of time the data in the cache is our actual fresh data , it means no need to call the api every time , so in that can we can use stateTime.It bascially stop the api call for the specific amount of time and becomes our cache data your fresh data.But after some duration the api call and new data load.
    // staleTime: 10000,

    // refetchInterval = It is one of the most important property in reactQuery.Till now what we see the api call goes when page reload. But let say you create a stock prices or trading website where you need to call the api again and again while remaining on that page, because the stock prices changes all the time so in that case we use refetchInterval property,which generally refetch the data in every specific duration.With the refetchInterval we also use the refetchIntervalInBackground property generally take the boolean value, which particularly means that fetche data even if the page is not mounted,as a background task.
    // refetchInterval: 10000,
    // refetchIntervalInBackground: true,
  });
  //   console.log(data, isPending, isError, error);

  const navigate = useNavigate();

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error:{error}</p>;
  return (
    <>
      <div
        className="oldFetchContainer"
        style={{
          border: "2px solid black",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          flexFlow: "row wrap",
        }}
      >
        {data.map((elem, idx) => {
          const { id, title, body } = elem;
          return (
            <div
              className="card"
              style={{
                width: "25rem",
                borderLeft: "5px solid lightblue",
                padding: "10px",
                color: "white",
                backgroundColor: "rgb(72, 63, 63)",
                lineHeight: "30px",
              }}
              key={id}
              onClick={() => navigate(`/rq/${id}`)}
            >
              <div className="card-body">
                <h5 className="card-title">{idx + 1}</h5>
                <h6 className="card-subtitle mb-2 ">{title}</h6>
                <p className="card-text">{body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FetchRQ;
