import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
    color: "#000",
  },
  header: {
    textAlign: "center",
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 12,
    marginBottom: 4,
  },
  contact: {
    fontSize: 10,
    color: "gray",
  },
  section: {
    marginTop: 12,
  },
  sectionTitle: {
    backgroundColor: "#e0e0e0",
    padding: 4,
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 6,
  },
  text: {
    marginBottom: 3,
  },
  bulletPoint: {
    marginLeft: 10,
    marginBottom: 2,
  },
  bold: {
    fontWeight: "bold",
  },
});

// Resume Document
const ResumeDocument = ({ resumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{resumeData.name}</Text>
        <Text style={styles.title}>{resumeData.title}</Text>
        <Text style={styles.contact}>
          {resumeData.address} | {resumeData.email} | {resumeData.website}
        </Text>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SUMMARY</Text>
        <Text>{resumeData.summary}</Text>
      </View>

      {/* Technical Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>
        <View>
          {resumeData.skills.map((skill, i) => (
            <Text key={i} style={styles.text}>• {skill}</Text>
          ))}
        </View>
      </View>

      {/* Professional Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</Text>
        {resumeData.experience.map((exp, i) => (
          <View key={i} style={{ marginBottom: 8 }}>
            <Text style={styles.bold}>
              {exp.role}, {exp.company} — {exp.duration}
            </Text>
            {exp.details.map((d, j) => (
              <Text key={j} style={styles.bulletPoint}>• {d}</Text>
            ))}
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EDUCATION</Text>
        {resumeData.education.map((edu, i) => (
          <View key={i} style={{ marginBottom: 6 }}>
            <Text style={styles.bold}>
              {edu.degree}, {edu.institution} — {edu.duration}
            </Text>
            <Text>{edu.details}</Text>
          </View>
        ))}
      </View>

      {/* Additional Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ADDITIONAL INFORMATION</Text>
        <Text style={styles.text}><Text style={styles.bold}>Languages:</Text> {resumeData.languages.join(", ")}</Text>
        <Text style={styles.text}><Text style={styles.bold}>Certifications:</Text> {resumeData.certifications.join(", ")}</Text>
        <Text style={styles.text}><Text style={styles.bold}>Awards/Activities:</Text> {resumeData.awards.join(", ")}</Text>
      </View>
    </Page>
  </Document>
);

export default ResumeDocument;
