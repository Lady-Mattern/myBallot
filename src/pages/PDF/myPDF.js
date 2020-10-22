import React, { useContext } from "react";
import { DataContext } from "../../App";
import font from '../../images/Roboto/Roboto-Regular.ttf'



import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
  PDFViewer,
} from "@react-pdf/renderer";

import dklogo from "../../images/testpng.png";

Font.register({ family: 'Roboto', src: font, fontStyle: 'normal', fontWeight: 'normal'});

const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: 'Roboto',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  viewer: {
    width: "90%",
    height: "100vh",
    paddingTop: "10px",
  },
  image: {
    width: "100",
    margin: "25 25",
  },
  category: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 20
  },
  candidateCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E4E4E4",
    color: "black",
    fontSize: 14,
    padding: 10,
    margin: "5 auto",
    borderRadius: 5,
  },
  positionTitle: {
    color: "black",
    fontWeight: "bold",
  },
  candidateName: {
    color: "#518E71",
  },
});

function MyDocument({ ballot }) {
  console.log("ballot in myPDF", ballot);
  return (
    <Document>
      <Page style={styles.page} size="A4" wrap>
        <Image style={styles.image} src={dklogo} alt="myBallot logo" />
        <View className="catCard">
          <Text style={styles.category}>Federal Candidates</Text>
          {ballot.FederalCandidates.map((candidate) => (
            <View wrap={false} style={styles.candidateCard} className="infoCard">
              <Text style={styles.positionTitle} className="position">
                {candidate.position}
              </Text>
              <Text style={styles.candidateName} className="name">
                {candidate.name}
              </Text>
            </View>
          ))}
        </View>
        <View className="catCard">
          <Text style={styles.category}>Judicial Candidates</Text>
          {ballot.JudicialCandidates.map((candidate) => (
            <View wrap={false} style={styles.candidateCard} className="infoCard">
              <Text style={styles.positionTitle} className="position">
                {candidate.position}
              </Text>
              <Text style={styles.candidateName} className="name">
                {candidate.name}
              </Text>
            </View>
          ))}
        </View>
        <View className="catCard">
          <Text style={styles.category}>Legislative Candidates</Text>
          {ballot.LegislativeCandidates.map((candidate) => (
            <View wrap={false} style={styles.candidateCard} className="infoCard">
              <Text style={styles.positionTitle} className="position">
                {candidate.position}
              </Text>
              <Text style={styles.candidateName} className="name">
                {candidate.name}
              </Text>
            </View>
          ))}
        </View>
        <View className="catCard">
          <Text style={styles.category}>Statewide Candidates</Text>
          {ballot.StatewideCandidates.map((candidate) => (
            <View wrap={false} style={styles.candidateCard} className="infoCard">
              <Text style={styles.positionTitle} className="position">
                {candidate.position}
              </Text>
              <Text style={styles.candidateName} className="name">
                {candidate.name}
              </Text>
            </View>
          ))}
        </View>
        <View className="catCard">
          <Text style={styles.category}>Measures</Text>
          {ballot.Measures.map((measure) => (
            <View wrap={false} style={styles.candidateCard} className="infoCard">
              <Text style={styles.positionTitle} className="position">
                {measure.name}
              </Text>
              <Text style={styles.candidateName} className="name">
                {measure.isApproved ? "Approved" : "Rejected"}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

const ViewPDF = () => {
  const { ballot, setBallot } = useContext(DataContext);

  return (
    <PDFViewer style={styles.viewer}>
      <MyDocument ballot={ballot} />
    </PDFViewer>
  );
};

export default ViewPDF;
