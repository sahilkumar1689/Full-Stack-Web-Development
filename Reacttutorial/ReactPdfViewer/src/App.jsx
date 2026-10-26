import { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function App() {
  const [pdfFile, setPdfFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);

  function handleInput(e) {
    const fileObj = e.target.files[0];
    if (fileObj) {
      if (fileObj && fileObj.type === "application/pdf") {
        const reader = new FileReader();
        reader.readAsDataURL(fileObj);
        reader.onload = (e) => {
          // console.log(e.target.result);
          setPdfFile(e.target.result);
        };
      } else {
        alert("Please Select the Pdf File.");
        setPdfFile(null);
      }
    } else {
      alert("Someting went Wrong.");
    }
  }
  function handleClick(e) {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else alert("Please select the file.");
  }

  const newplugin = defaultLayoutPlugin();
  return (
    <>
      <div className="container">
        <form
          style={{
            display: "flex",
            flexFlow: "column wrap",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <input type="file" onChange={handleInput} />
          <button type="submit" onClick={handleClick}>
            View Pdf
          </button>
        </form>
      </div>
      <h1 style={{ textAlign: "center" }}>View Pdf:</h1>
      <div
        className="pdfContainer"
        style={{
          width: "100%",
          height: "750px",
          border: "2px solid black",
          margin: "auto",
        }}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          {viewPdf ? (
            <Viewer
              theme={{ theme: "dark" }}
              fileUrl={viewPdf}
              plugins={[newplugin]}
            />
          ) : (
            <p>No Pdf</p>
          )}
        </Worker>
      </div>
    </>
  );
}

export default App;
