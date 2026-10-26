import { PDFDownloadLink, PDFViewer, StyleSheet } from "@react-pdf/renderer";
import Zomatopdf from "./Zomatopdf";

function App() {
  const style = StyleSheet.create({
    viewer: {
      width: "100%",
      height: "100vh",
    },
    downloadBtn: {
      padding: "12px 40px",
      borderRadius: "10px",
      backgroundColor: "aqua",
      position: "absolute",
      bottom: "10px",
      left: "47%",
    },
  });
  
  return (
    <>
      <PDFViewer style={style.viewer}>
        <Zomatopdf/>
      </PDFViewer>
      
    </>
  )
}

export default App
