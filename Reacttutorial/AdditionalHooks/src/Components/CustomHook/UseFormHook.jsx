import React from "react";
import UseCustomForm from "./UseCustomForm";

function UseFormHook() {
  const { dataObj, handleData } = UseCustomForm({ email: "", password: "" });
  return (
    <>
      <form>
        <input
          type="email"
          name="email"
          value={dataObj.email}
          onChange={handleData}
        />
        <input
          type="password"
          name="password"
          value={dataObj.password}
          onChange={handleData}
        />
      </form>
      <p>Email:{dataObj.email}</p>
      <p>Password:{dataObj.password}</p>
    </>
  );
}

export default UseFormHook;
