import PdfPage from "./PdfPage";
import { PDFDownloadLink, PDFViewer, StyleSheet } from "@react-pdf/renderer";
function App() {
  // In react pdf you can give styling using StyleSheet.create() method:
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
      {/* It is important to wrap inside the conponent in the pdfViewer in order to show in the pdf format: */}
      <PDFViewer style={style.viewer}>
        <PdfPage />
      </PDFViewer>

      {/* This is the method in order to download the pdf manually: */}
      <PDFDownloadLink
        document={<PdfPage />}
        style={style.downloadBtn}
        fileName="temp.pdf"
      >
        {(blob, url, loading, error) => {
          return loading ? "Loading Document" : "Download Now";
        }}
      </PDFDownloadLink>
    </>
  );
}

export default App;
