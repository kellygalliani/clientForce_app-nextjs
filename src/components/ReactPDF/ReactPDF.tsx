import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { useContacts } from "../../hooks/useAuth";
import { Contact } from "../../providers/interfaces";

const styles = StyleSheet.create({
  page: { flexDirection: "row" },
  section: { flexGrow: 1 },
});

interface MyDocumentProps {
  contacts: Contact[];
}

const MyDocument = ({ contacts }: MyDocumentProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        {contacts.map((contact: Contact) => (
          <Text>{contact.name}</Text>
        ))}
      </View>
    </Page>
  </Document>
);

export const ReactPDF = () => {
  const { contacts } = useContacts();

  return (
    <PDFDownloadLink
      document={<MyDocument contacts={contacts} />}
      fileName="contacts.pdf"
    >
      {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
    </PDFDownloadLink>
  );
};
