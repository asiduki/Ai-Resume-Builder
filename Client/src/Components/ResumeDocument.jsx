import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#333333",
    backgroundColor: "#ffffff",
    lineHeight: 1.5,
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontFamily: "Helvetica-Bold",
    color: "#222222",
  },
  title: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 10,
    marginTop:10,
  },
  contactInfo: {
    fontSize: 9,
    color: "#555555",
  },
  link: {
    color: "#333333",
    textDecoration: "none",
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a1a",
    marginBottom: 8,
    textTransform: "uppercase",
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },
  summaryText: {
    fontSize: 10,
    textAlign: "justify",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skill: {
    backgroundColor: "#f5f5f5",
    color: "#333333",
    padding: '4 8',
    borderRadius: 4,
    marginRight: 6,
    marginBottom: 6,
    fontSize: 9,
  },
  itemContainer: {
    marginBottom: 12,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginBottom: 4,
  },
  itemTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
  },
  itemDuration: {
    fontSize: 9,
    color: "#777777",
  },
  bulletPoint: {
    flexDirection: "row",
    marginLeft: 12,
    marginBottom: 4,
  },
  bullet: {
    width: 8,
    fontSize: 10,
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
  },
  projectLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkSeparator: {
    marginHorizontal: 4,
    color: '#777777',
    fontSize: 9,
  },
});

const ResumeDocument = ({ resumeData }) => {
  const {
    name,
    title,
    number,
    address,
    email,
    website,
    summary,
    skills = [],
    experience = [],
    projects = [],
    education = [],
  } = resumeData || {};

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* --- Header Section (No Changes) --- */}
        <View style={styles.header}>
          <Text style={styles.name}>{name || "Your Name"}</Text>
          <Text style={styles.title}>{title || "Professional Title"}</Text>
          <Text style={styles.contactInfo}>
            {number || "+91 12345 67890"} |{" "}
            <Link src={`mailto:${email}`} style={styles.link}>{email || "your.email@example.com"}</Link> |{" "}
            <Link src={website} style={styles.link}>{website || "yourportfolio.com"}</Link> |{" "}
            {address || "Ghaziabad, UP"}
          </Text>
        </View>

        {/* --- Other Sections (No Changes) --- */}
        {summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={styles.summaryText}>{summary}</Text>
          </View>
        )}

        {skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsContainer}>
              {skills.map((skill, idx) => (
                <Text key={idx} style={styles.skill}>{skill}</Text>
              ))}
            </View>
          </View>
        )}

        {experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Experience</Text>
            {experience.map((exp, idx) => (
              <View key={idx} style={styles.itemContainer}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{`${exp.role || "Job Role"} at ${exp.company || "Company"}`}</Text>
                  <Text style={styles.itemDuration}>{exp.duration || "Date Range"}</Text>
                </View>
                {exp.details?.map((detail, i) => (
                  <View key={i} style={styles.bulletPoint}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.bulletText}>{detail}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* --- UPDATED PROJECTS SECTION (Simple Label Change) --- */}
        {projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {projects.map((proj, idx) => (
              <View key={idx} style={styles.itemContainer}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{proj.name || "Project Name"}</Text>
                  <View style={styles.projectLinks}>
                    {proj.link && (
                      <Link src={proj.link} style={styles.link}>
                        Repository
                      </Link>
                    )}
                    {proj.link && proj.deploymentLink && (
                      <Text style={styles.linkSeparator}>|</Text>
                    )}
                    {proj.deploymentLink && (
                      <Link src={proj.deploymentLink} style={styles.link}>
                        Live URL
                      </Link>
                    )}
                  </View>
                </View>
                <View style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>{proj.description || "No description available"}</Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu, idx) => (
              <View key={idx} style={styles.itemContainer}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{`${edu.degree || "Degree"} - ${edu.institution || "Institution"}`}</Text>
                  <Text style={styles.itemDuration}>{edu.duration || "Date Range"}</Text>
                </View>
                <Text style={styles.bulletText}>{edu.details || "Details"}</Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};

export default ResumeDocument;