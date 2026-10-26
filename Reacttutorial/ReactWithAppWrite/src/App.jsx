import { useEffect, useState } from "react";
import config from "./Config/Config";
import { useDispatch } from "react-redux";
import authService from "./Services/Auth";
import { login, logOut } from "./Store/AuthSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

   useEffect(()=>{
      authService.getCurrentUser().then(res=>{
        if(res){
          dispatch(login(res));
        }
        else{
          dispatch(logOut());
        }
      }).finally(()=>{
        setLoading(false);
      })
   },[]);

  if (loading) return <p className="text-3xl font-bold absolute top-[50%] left-[46%]">Loading...</p>;

  return (
    <>
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  );
}

export default App;
