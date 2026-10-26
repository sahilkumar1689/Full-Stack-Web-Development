import React, { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getInfiniteData } from "../Services/Ap";
import { useInView } from "react-intersection-observer";

function InfiniteScroll() {
  const {
    data,
    hasNextPage,
    fetchNextPage,
    status,
    isFetchNextPage,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["infinitescroll"],
    queryFn: getInfiniteData,
    // Used to fecthed the next page:
    getNextPageParam: (lastPage, allPages) => {
      //   console.log("LastPage", lastPage, "AllPage", allPages);
      return lastPage?.length === 10 ? allPages?.length + 1 : undefined;
    },
  });
  //   console.log("data", data, status);

  // 1. First Method to find the load the next page:
  //   const handleScroll = () => {
  //     let bottom =
  //       window.innerHeight + window.scrollY >=
  //       document.documentElement.scrollHeight - 1;
  //     // console.log(bottom);

  //     if (bottom && hasNextPage) {
  //       fetchNextPage();
  //     }
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, [hasNextPage]);

  // 2. Second Method:
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (status === "pending") return <p>Loading...</p>;

  return (
    <div>
      {data?.pages?.map((indElem, idx) => {
        return (
          <ul key={idx}>
            {indElem?.map((elem, idx) => {
              return (
                <li
                  key={elem.id}
                  style={{
                    padding: "10px",
                    border: "2px solid black",
                    margin: "10px",
                  }}
                >
                  <p>{elem.id}</p>
                  <h1>{elem.title}</h1>
                  <p>{elem.body}</p>
                </li>
              );
            })}
          </ul>
        );
      })}
      <div className="" ref={ref}>
        {isFetchNextPage && <p>Loading More...</p>}
      </div>
    </div>
  );
}

export default InfiniteScroll;
