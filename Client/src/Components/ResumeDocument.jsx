import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// --- Styles for ATS-friendly and readable resume ---
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
    color: "#333",
  },
  header: {
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 12,
    marginBottom: 5,
    marginTop: 5,
  },
  contact: {
    fontSize: 10,
    marginBottom: 10,
    color: "#555",
  },
  section: {
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 2,
  },
  subHeader: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 3,
  },
  text: {
    marginBottom: 4,
  },
  listItem: {
    marginLeft: 10,
    marginBottom: 2,
  },
});

// --- Resume Document Component ---
const ResumeDocument = ({ resumeData }) => {
  return (
    <Document>
      <Page style={styles.page}>

        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.name}>{resumeData.name || "Your Name"}</Text>
          <Text style={styles.title}>{resumeData.title || "Professional Title"}</Text>
          <Text style={styles.contact}>
            {resumeData.address || "Address"} | {resumeData.email || "email@example.com"} | {resumeData.website || "website.com"}
          </Text>
        </View>

        {/* Summary Section */}
        {resumeData.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Summary</Text>
            <Text style={styles.text}>{resumeData.summary}</Text>
          </View>
        )}

        {/* Skills Section */}
        {resumeData.skills?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Professional Skills</Text>
            {resumeData.skills.map((skill, idx) => (
              <Text key={idx} style={styles.listItem}>• {skill}</Text>
            ))}
          </View>
        )}

        {/* Experience Section */}
        {resumeData.experience?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Professional Experience</Text>
            {resumeData.experience.map((exp, idx) => (
              <View key={idx} style={{ marginBottom: 5 }}>
                <Text style={styles.subHeader}>
                  {exp.role || "Role"}, {exp.company || "Company"} ({exp.duration || "Duration"})
                </Text>
                {exp.details?.length > 0 &&
                  exp.details.map((detail, i) => (
                    <Text key={i} style={styles.listItem}>• {detail}</Text>
                  ))}
              </View>
            ))}
          </View>
        )}

        {/* Projects Section */}
        {resumeData.projects?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Projects</Text>
            {resumeData.projects.map((proj, idx) => (
              <View key={idx} style={{ marginBottom: 4 }}>
                <Text style={styles.subHeader}>{proj.name || "Project Name"}</Text>
                <Text style={styles.listItem}>{proj.description || "Project Description"}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Education Section */}
        {resumeData.education?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Education</Text>
            {resumeData.education.map((edu, idx) => (
              <View key={idx} style={{ marginBottom: 5 }}>
                <Text style={styles.subHeader}>
                  {edu.degree || "Degree"}, {edu.institution || "Institution"} ({edu.duration || "Duration"})
                </Text>
                <Text style={styles.listItem}>{edu.details || "Details about education"}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Certifications Section */}
        {resumeData.certifications?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Certifications</Text>
            {resumeData.certifications.map((cert, idx) => (
              <Text key={idx} style={styles.listItem}>
                {cert.name || "Certification"} - {cert.issuer || "Issuer"} ({cert.date || "Date"})
              </Text>
            ))}
          </View>
        )}

        {/* Awards Section */}
        {resumeData.awards?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Awards & Achievements</Text>
            {resumeData.awards.map((award, idx) => (
              <Text key={idx} style={styles.listItem}>{award}</Text>
            ))}
          </View>
        )}

      </Page>
    </Document>
  );
};

export default ResumeDocument;
