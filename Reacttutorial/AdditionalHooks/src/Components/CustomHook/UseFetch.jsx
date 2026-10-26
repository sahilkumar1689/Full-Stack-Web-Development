import React from "react";
import UseGetHook from "./UsefetchHook";

function UseFetch() {
  // 1. Constom hook is nothing but a javascript function which is used to avoid the repetition of loagin in the website, it means whenever you feel you need some particular login repeation in different different components you definatily create a custom hook for it. The name of the custom hook is started from the "use" keyword althought it's not compulsary but it recommended. After that you can use that hook, in a similar way you use other hooks. You can also use more that one react hooks inside the custom hooks , it's is the one more advantages of custom hook.

  // e.g. Try to create a custom hook name called "useGet" which generaly take the "url" from where data need to fetch and it return two thing the data after fetched and the loading state in order to handle the loader.
  const { data, loading } = UseGetHook("https://dummyjson.com/posts");
  if (!loading) console.log(data, loading);
  else console.log("Data Fetching.");

  // The benefit of this hook is you can reuse it in different different components and also no need to handle the laoding useState,it automatically handle it.
  // Note = You can also try to create a generic custom hook that takes the fetching methods as well like get,post,delete,etc. And they internally handle all the functionallity, and return the data or the response to the user.
  return <div>UseFetch</div>;
}

export default UseFetch;
