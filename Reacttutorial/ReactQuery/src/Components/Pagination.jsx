import React, { useState } from "react";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { deletePost, getPagination, updatePost } from "../Services/Ap";

function Pagination() {
  const [pg, setPg] = useState(0);

  // 1. When you need to read the data or get data only then you use the useQuery() method:
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["pgPost", pg],
    queryFn: () => getPagination(pg),
    // Needed to not show the laoding state again and again:
    placeholderData: keepPreviousData,
  });
  //   console.log(data, isPending, isError, error);

  // 2. When you need to do post,patch,put request then use useMutation({mutationFn,optionalConfiguration Properties :
  // 1. onSuccess =It runs when the api call is successfull. It takes an callback function in which have two parameters one is "data" which is given by the api response if the request is successfull and second is "id" which is given my the mutate() method.
  // 2. onError =It runs when the api call is unsuccessfull. It takes an callback function in which have two parameters one is "data" which is given by the api response if the request is unsuccessfull and second is "id" which is given my the mutate() method.
  // 3. onSettled =It runs on no matter what. It takes an callback function in which have data comes from the api response.
  //});

  // Now inorder to access the specific cache data you have useQueryClient() hook:
  const queryRef = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (deleteId) => deletePost(deleteId),
    onSuccess: (data, id) => {
      console.log(data, id);
      // Now setQueryData() is used to set the updated cache data, it takes two arguments first the dependency array or queryKey , second the callback function which give you the actual specific cache data and return the updated value.
      queryRef.setQueryData(["pgPost", pg], (data) => {
        return data.filter((elem) => elem.id != id);
      });
    },
    onError: (data, id) => {
      console.log(data, id);
    },
    onSettled: (data, id) => {
      console.log(data, id);
    },
  });

  const updateMutation = useMutation({
    mutationFn: (id) => updatePost(id),
    onSuccess: (data, id) => {
      console.log(data, id);
      queryRef.setQueryData(["pgPost", pg], (postData) => {
        return postData.map((elem) => (elem.id === id ? data : elem));
      });
    },
  });

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>{error}</p>;
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
            >
              <div className="card-body">
                <h5 className="card-title">{id}</h5>
                <h6 className="card-subtitle mb-2 ">{title}</h6>
                <p className="card-text">{body}</p>
                {/* mutate() Function is used to call the mutationFn inside your useMutation() hook: */}
                <button onClick={() => deleteMutation.mutate(id)}>
                  Delete
                </button>
                <button onClick={() => updateMutation.mutate(id)}>
                  Update
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="pagiantionContainer"
        style={{ display: "flex", gap: "10px", marginTop: "10px" }}
      >
        <button
          disabled={pg === 0 ? true : false}
          className="btn-btn-primary"
          onClick={() => setPg((prev) => prev - 5)}
        >
          Prev
        </button>
        <p>{pg / 5 + 1}</p>
        <button
          disabled={pg === 95 ? true : false}
          className="btn-btn-primary"
          onClick={() => setPg((prev) => prev + 5)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
