import { Document, Image, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import React from 'react'
import data from './ZomatoData';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: 20
    },
    section: {
        margin: 10,
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center'
    },
    restaurantImage: {
        width: 200,
        height: 200,
        marginBottom: 10
    },
    restaurantName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    rating: {
        fontSize: 14,
        color: '#555555'
    },
    footer: {
        position: "absolute",
        bottom: "10%",
        left: "47%",
    },
});

function Zomatopdf() {
    return (
        <>
            <Document>
                <Page size="A4" style={styles.page}>
                    {
                        data.map(((elem, idx) => {
                            return (
                                <View
                                    key={idx}
                                    style={styles.section}
                                    break={idx > 0}
                                >
                                    {/* I don't know mam image load nahi ho rahi ha. */}
                                    <Image
                                        src={elem.info.image.url}
                                        style={styles.restaurantImage}
                                        cache={true}
                                    />
                                    <Text style={styles.restaurantName}>{elem.info.name}</Text>
                                    <Text style={styles.rating}>Rating: {elem.info.rating.rating_text}</Text>
                                </View>
                            )
                        }))
                    }
                    <View fixed style={styles.footer}>
                        <Text
                            render={({ pageNumber, totalPages }) =>
                                `${pageNumber}/${totalPages}`
                            }
                        />
                    </View>
                </Page>
            </Document>
        </>
    )
}

export default Zomatopdf