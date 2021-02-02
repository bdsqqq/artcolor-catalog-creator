export default function PdfDocument({}) {
  const [shortProdsArray, setShortProdsArray] = useState<
    {
      id: string;
      img: string;
      name: string;
      desc: string;
    }[][]
  >([]);
  let isFirst = true;
  useEffect(() => {
    let shortArrays: any[] = [];

    for (let i = 0; i < prods.length; i += 3) {
      shortArrays.push(prods.slice(i, i + 3));
    }

    setShortProdsArray(shortArrays);
  }, []);

  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          ARTCOLOR APLIQUES
        </Text>

        {shortProdsArray.map((prods, i) => {
          i != 0 && isFirst && (isFirst = false);
          return (
            <View
              break={!isFirst && i % 3 === 0}
              key={`row-${i}`}
              style={styles.row}
            >
              {prods.map((prod, j) => {
                return (
                  <View key={`card-${j}-row-${i}`} style={styles.card}>
                    <Image style={styles.image} src={prod.img} />
                    <Text>{prod.id}</Text>
                    <Text>{prod.name}</Text>
                    <Text>{prod.desc}</Text>
                  </View>
                );
              })}
            </View>
          );
        })}

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  col: {
    flexDirection: "column",
  },
  row: {
    width: "100%",
    marginTop: "4vh",
    flexDirection: "row",
    backgroundColor: "#f00",
  },
  card: {
    flex: 1,
    marginHorizontal: "2vw",
    backgroundColor: "#0f0",
  },
  text: {
    paddingVertical: "1vh",
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    width: 140,
    height: 140,
    objectFit: "cover",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

import prods from "../dummy/prods";
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { useEffect, useState } from "react";
