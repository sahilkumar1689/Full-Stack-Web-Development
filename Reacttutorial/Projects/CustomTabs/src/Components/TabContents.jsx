import React, { useState } from "react";

function TabContents({ data }) {
  return (
    <>
      <h2>{data.title}</h2>
      <p className="description">{data.description}</p>

      <h3>Syntax:</h3>
      <pre className="syntax-block">
        <code>{data.syntax}</code>
      </pre>
    </>
  );
}

export default TabContents;
