import React from "react";
import image from "./image.png";
import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

function PdfPage() {
  const style = StyleSheet.create({
    header: {
      textAlign: "center",
      fontSize: "30px",
      margin: "16px 0px",
      borderBottom: "2px solid black",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
      width: "50px",
    },
    footer: {
      position: "absolute",
      bottom: "10%",
      left: "47%",
    },
  });
  return (
    <>
      <Document>
        <Page size="A4">
          <View fixed style={style.header}>
            {/* Image tag is to load the images: */}
            <Image src={image} style={style.img} />
            <Text>ReactPdf:</Text>
          </View>
          {/* View is similar like div in html. */}
          <View>
            <Text>Hello World</Text>
          </View>
          {/* Break Attribute is used to break the content in different pages: */}
          <View break>
            <Text>Hello World</Text>
          </View>
          <View break>
            <Text>Hello World</Text>
          </View>
          <View break>
            <Text>Hello World</Text>
          </View>
          <View break>
            <Text>Hello World</Text>
          </View>

          <View fixed style={style.footer}>
            <Text
              render={({ pageNumber, totalPages }) =>
                `${pageNumber}/${totalPages}`
              }
            />
          </View>
        </Page>
      </Document>
    </>
  );
}

export default PdfPage;
