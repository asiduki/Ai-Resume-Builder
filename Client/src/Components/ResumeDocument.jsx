import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles for the PDF (updated design)
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
    color: "#000",
  },
  headerSection: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderBottomStyle: "solid",
    paddingBottom: 8,
  },
  headerName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerTitle: {
    fontSize: 12,
    marginTop: 2,
  },
  contactInfo: {
    fontSize: 10,
    color: "#555",
    marginTop: 1,
  },
  section: {
    marginBottom: 12,
  },
  subHeader: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1f4e79",
    marginBottom: 6,
    textTransform: "uppercase",
  },
  text: {
    marginBottom: 2,
  },
  smallText: {
    fontSize: 10,
    color: "#555",
  },
  listItem: {
    marginLeft: 12,
    marginBottom: 2,
  },
  bold: {
    fontWeight: "bold",
  },
  projectDate: {
    fontSize: 10,
    color: "#777",
    marginBottom: 2,
  },
});

const ResumeDocument = ({ resumeData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.headerName}>{resumeData.name}</Text>
          <Text style={styles.headerTitle}>{resumeData.title}</Text>
          <Text style={styles.contactInfo}>{resumeData.address}</Text>
          <Text style={styles.contactInfo}>{resumeData.email}</Text>
          <Text style={styles.contactInfo}>{resumeData.website}</Text>
        </View>

        {/* Technical Skills */}
        {resumeData.skills?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Technical Skills</Text>
            <Text style={styles.text}>{resumeData.skills.join(" • ")}</Text>
          </View>
        )}

        {/* Projects */}
        {resumeData.projects?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Projects</Text>
            {resumeData.projects.map((proj, index) => (
              <View key={index} style={styles.section}>
                <Text style={styles.bold}>{proj?.name || "Unnamed Project"}</Text>
                {proj?.date && <Text style={styles.projectDate}>{proj.date}</Text>}
                <Text style={styles.listItem}>{proj?.description || "No description available"}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {resumeData.education?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Education</Text>
            {resumeData.education.map((edu, index) => (
              <View key={index} style={styles.section}>
                <Text style={styles.bold}>{edu.degree}</Text>
                <Text style={styles.text}>{edu.institution}</Text>
                <Text style={styles.smallText}>{edu.duration}</Text>
                <Text style={styles.listItem}>{edu.details}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Work Experience */}
        {resumeData.experience?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Work Experience</Text>
            {resumeData.experience.map((exp, index) => (
              <View key={index} style={styles.section}>
                <Text style={styles.bold}>
                  {exp.role} - {exp.company}
                </Text>
                <Text style={styles.smallText}>{exp.duration}</Text>
                {exp.details?.map((detail, i) => (
                  <Text key={i} style={styles.listItem}>• {detail}</Text>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* Awards & Achievements */}
        {resumeData.awards?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Awards & Achievements</Text>
            {resumeData.awards.map((award, index) => (
              <Text key={index} style={styles.listItem}>• {award}</Text>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};

export default ResumeDocument;
