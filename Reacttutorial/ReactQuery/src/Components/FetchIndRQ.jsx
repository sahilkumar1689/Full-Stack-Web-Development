import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getIndPost } from "../Services/Ap";

function FetchIndRQ() {
  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["indPost", id],
    queryFn: () => getIndPost(id),
  });

  //   console.log(data, isPending, isError, error);

  //   console.log(useParams());

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>{error}</p>;
  return (
    <>
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
      >
        <div className="card-body">
          <h5 className="card-title">{data.id}</h5>
          <h6 className="card-subtitle mb-2 ">{data.title}</h6>
          <p className="card-text">{data.body}</p>
        </div>
      </div>
    </>
  );
}

export default FetchIndRQ;
