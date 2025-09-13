import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// --- Professional & Compact Stylesheet ---
// Tuned for a clean, modern look that fits comfortably on a single page.
const styles = StyleSheet.create({
  page: {
    padding: '0.4in 0.5in', // Standard resume margins
    fontSize: 10,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
    color: "#2d3748", // Dark gray for text
    backgroundColor: "#ffffff",
  },
  header: {
    textAlign: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 16,
  },
  name: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
    color: "#1a202c", // Near-black for high contrast
  },
  title: {
    fontSize: 12,
    marginBottom: 6,
    color: "#4a5568",
  },
  contact: {
    fontSize: 9,
    color: "#718096",
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#2d3748",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#cbd5e0',
    paddingBottom: 4,
  },
  itemContainer: {
    marginBottom: 12,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  itemTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: '#2d3748',
  },
  itemSubtitle: {
    fontSize: 10,
    color: '#4a5568',
  },
  itemDate: {
    fontSize: 10,
    color: '#718096',
    textAlign: 'right',
  },
  bulletPoint: {
    flexDirection: 'row',
    marginLeft: 6,
    marginBottom: 3,
  },
  bullet: {
    width: 10,
    fontSize: 10,
    color: '#4a5568',
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
  },
  summaryText: {
    fontSize: 10,
    color: "#4a5568",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 4,
  },
  skillItem: {
    backgroundColor: "#edf2f7",
    color: "#2d3748",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    fontSize: 9,
    marginRight: 6,
    marginBottom: 6,
  },
  noItemsText: {
    fontSize: 10,
    color: "#a0aec0",
    fontStyle: "italic",
  },
});


// --- Reusable & Memoized Components for Cleanliness ---

const ResumeSection = React.memo(({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
));

const ResumeHeader = React.memo(({ name, title, address, email, website }) => (
  <View style={styles.header}>
    <Text style={styles.name}>{name || "Your Name"}</Text>
    <Text style={styles.title}>{title || "Professional Title"}</Text>
    <Text style={styles.contact}>
      {address ? `${address} | ` : ""}
      {email ? `${email} | ` : ""}
      {website || "yourwebsite.com"}
    </Text>
  </View>
));

const ExperienceItem = React.memo(({ role, company, duration, details = [] }) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemHeader}>
      <Text style={styles.itemTitle}>{`${role || "Role"} at ${company || "Company"}`}</Text>
      <Text style={styles.itemDate}>{duration || "Date Range"}</Text>
    </View>
    {details.map((detail, i) => (
      <View key={i} style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>{detail}</Text>
      </View>
    ))}
  </View>
));

const EducationItem = React.memo(({ degree, institution, duration, details = "" }) => (
  <View style={styles.itemContainer}>
     <View style={styles.itemHeader}>
      <Text style={styles.itemTitle}>{degree || "Degree"}</Text>
      <Text style={styles.itemDate}>{duration || "Date Range"}</Text>
    </View>
    <Text style={styles.itemSubtitle}>{institution || "Institution"}</Text>
    {details && <Text style={styles.bulletText}>{details}</Text>}
  </View>
));

const ProjectItem = React.memo(({ name, description, duration }) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemHeader}>
      <Text style={styles.itemTitle}>{name || "Untitled Project"}</Text>
      {duration && <Text style={styles.itemDate}>{duration}</Text>}
    </View>
    <Text style={styles.bulletText}>{description || "No description provided."}</Text>
  </View>
));

// --- Main Document Component ---
const ResumeDocument = ({ resumeData }) => {
  const {
    name, title, address, email, website,
    summary, experience = [], education = [],
    skills = [], projects = [], certifications = []
  } = resumeData || {};

  return (
    <Document author={name || "User"} title={`${name || 'Resume'} - ${title || 'Professional'}`}>
      <Page size="A4" style={styles.page}>
        <ResumeHeader
          name={name}
          title={title}
          address={address}
          email={email}
          website={website}
        />

        {summary && (
          <ResumeSection title="Professional Summary">
            <Text style={styles.summaryText}>{summary}</Text>
          </ResumeSection>
        )}

        {experience.length > 0 && (
          <ResumeSection title="Experience">
            {experience.map((exp, i) => <ExperienceItem key={i} {...exp} />)}
          </ResumeSection>
        )}
        
        {skills.length > 0 && (
          <ResumeSection title="Skills">
            <View style={styles.skillsContainer}>
              {skills.map((skill, i) => <Text key={i} style={styles.skillItem}>{skill}</Text>)}
            </View>
          </ResumeSection>
        )}

        {projects.length > 0 && (
          <ResumeSection title="Projects">
            {projects.map((proj, i) => <ProjectItem key={i} {...proj} />)}
          </ResumeSection>
        )}

        {education.length > 0 && (
          <ResumeSection title="Education">
            {education.map((edu, i) => <EducationItem key={i} {...edu} />)}
          </ResumeSection>
        )}

        {certifications.length > 0 && (
          <ResumeSection title="Certifications">
            {certifications.map((cert, i) => (
              <View key={i} style={styles.itemContainer}>
                 <View style={styles.itemHeader}>
                   <Text style={styles.itemTitle}>{cert.name || "Certification Name"}</Text>
                   <Text style={styles.itemDate}>{cert.date || "Date"}</Text>
                 </View>
                 <Text style={styles.itemSubtitle}>{cert.issuer || "Issuing Organization"}</Text>
              </View>
            ))}
          </ResumeSection>
        )}

      </Page>
    </Document>
  );
};

export default ResumeDocument;