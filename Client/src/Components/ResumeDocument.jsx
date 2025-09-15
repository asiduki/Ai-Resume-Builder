import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

// --- Register Fonts if needed (optional) ---
// Font.register({
//   family: 'Inter',
//   fonts: [
//     { src: '/path/to/Inter-Regular.ttf' },
//     { src: '/path/to/Inter-Bold.ttf', fontWeight: 'bold' },
//   ],
// });

// --- Styles for the Two-Column Layout ---
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    fontFamily: "Helvetica",
    fontSize: 9,
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: "row",
  },
  leftColumn: {
    width: "70%",
    paddingRight: 15,
  },
  rightColumn: {
    width: "30%",
    paddingLeft: 15,
  },
  // Header
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    color: "#222",
  },
  title: {
    fontSize: 12,
    color: "#444",
    marginTop: 4,
  },
  contactInfo: {
    marginTop: 10,
    fontSize: 8,
    color: '#666',
  },
  contactItem: {
    marginBottom: 3,
  },
  link: {
    color: "#666",
    textDecoration: "none",
  },
  // Sections
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    color: "#222",
    marginBottom: 2,
    marginTop:30,
  },
  sectionLine: {
    borderBottomWidth: 2,
    borderBottomColor: "#222",
    marginBottom: 8,
    width: '100%',
  },
  // Right Column Specifics
  initialsCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'flex-end',
  },
  initialsText: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'Helvetica-Bold',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  skillTag: {
    backgroundColor: '#F3F4F6',
    color: '#111827',
    padding: '4px 8px',
    borderRadius: 4,
    fontSize: 8,
    marginRight: 6,
    marginBottom: 6,
  },
  // General Entry Styles
  entryContainer: {
    marginBottom: 10,
  },
  entryTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
  },
  entrySubTitle: {
    fontSize: 9,
    color: '#555',
  },
  entryDate: {
    fontSize: 8,
    color: '#888',
    marginTop: 2,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginTop: 4,
    paddingRight: 10,
  },
  bullet: {
    marginRight: 5,
  },
  bulletText: {
    fontSize: 9,
    flex: 1,
  },
  projectLink: {
    fontSize: 8,
    color: '#007BFF',
    textDecoration: 'none',
    marginTop: 2,
  },
});

// Helper function to get initials from a name
const getInitials = (name) => {
  if (!name) return "";
  const parts = name.split(" ");
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

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
        <View style={styles.container}>
          {/* Left Column */}
          <View style={styles.leftColumn}>
            <View style={styles.header}>
              <Text style={styles.name}>{name || "Your Name"}</Text>
              <Text style={styles.title}>{title || "Professional Title"}</Text>
              <Text style={styles.contactInfo}>
                <Text style={styles.contactItem}>{number || "+91 12345 67890"}{"\n"}</Text>
                <Text style={styles.contactItem}><Link src={`mailto:${email}`} style={styles.link}>{email || "your.email@example.com"}</Link>{"\n"}</Text>
                <Text style={styles.contactItem}><Link src={website} style={styles.link}>{website || "yourportfolio.com"}</Link>{"\n"}</Text>
                <Text style={styles.contactItem}>{address || "City, Country"}</Text>
              </Text>
            </View>

            {summary && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Summary</Text>
                <View style={styles.sectionLine} />
                <Text style={styles.bulletText}>{summary}</Text>
              </View>
            )}

            {education.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Education</Text>
                <View style={styles.sectionLine} />
                {education.map((edu, idx) => (
                  <View key={idx} style={styles.entryContainer}>
                    <Text style={styles.entryTitle}>{edu.schoolName}</Text>
                    <Text style={styles.entrySubTitle}>{`${edu.degree}${edu.fieldOfStudy ? `, ${edu.fieldOfStudy}` : ''}`}</Text>
                    <Text style={styles.entryDate}>{`${edu.startDate} - ${edu.endDate}`}</Text>
                  </View>
                ))}
              </View>
            )}

            {experience.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Experience</Text>
                <View style={styles.sectionLine} />
                {experience.map((exp, idx) => (
                  <View key={idx} style={styles.entryContainer}>
                    <Text style={styles.entryTitle}>{exp.role} at {exp.company}</Text>
                    <Text style={styles.entryDate}>{exp.duration}</Text>
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

            {projects.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Projects</Text>
                <View style={styles.sectionLine} />
                {projects.map((proj, idx) => (
                  <View key={idx} style={styles.entryContainer}>
                    <Text style={styles.entryTitle}>{proj.name}</Text>
                    <View style={styles.bulletPoint}>
                      <Text style={styles.bullet}>•</Text>
                      <Text style={styles.bulletText}>{proj.description}</Text>
                    </View>
                    <Link src={proj.link} style={styles.projectLink}>Repository</Link>
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            <View style={styles.initialsCircle}>
              <Text style={styles.initialsText}>{getInitials(name)}</Text>
            </View>

            {skills.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Skills</Text>
                <View style={styles.sectionLine} />
                <View style={styles.skillsContainer}>
                  {skills.map((skill, idx) => (
                    <Text key={idx} style={styles.skillTag}>{skill}</Text>
                  ))}
                </View>
              </View>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ResumeDocument;