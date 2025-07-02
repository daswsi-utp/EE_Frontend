import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles for the PDF
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    borderBottom: '2px solid #0d9488',
    paddingBottom: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0d9488',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#0d9488',
  },
  text: {
    fontSize: 10,
    marginBottom: 4,
  },
  table: {
    display: 'table',
    width: 'auto',
    marginBottom: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#0d9488',
    backgroundColor: '#0d9488',
    padding: 5,
    textAlign: 'left',
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    textAlign: 'left',
  },
  tableCellHeader: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  tableCell: {
    fontSize: 9,
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 15,
    color: '#0d9488',
  },
});

const RootGreenReceipt = ({ order }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {/* Replace 'path/to/your/logo.png' with the actual path to your logo */}
          {/* Make sure the logo is accessible via a public URL or imported correctly */}
          <Image src="/images/root-green-logo.png" style={styles.logo} />
          <Text style={styles.companyName}>Root Green</Text>
        </View>
        <Text style={{ fontSize: 16, color: '#333' }}>BOLETA DE VENTA</Text>
      </View>

      <Text style={styles.title}>{order.seriesNumber}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Información del Cliente</Text>
        <Text style={styles.text}>
          Cliente: {order.customer.firstName} {order.customer.lastName}
        </Text>
        <Text style={styles.text}>Email: {order.customer.email}</Text>
        <Text style={styles.text}>Teléfono: {order.customer.phone}</Text>
        <Text style={styles.text}>Dirección: {order.shippingAddress}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Detalles del Pedido</Text>
        <Text style={styles.text}>Fecha: {new Date(order.issuedAt).toLocaleDateString('es-PE')}</Text>
        <Text style={styles.text}>Estado: {order.estate}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Productos</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Producto</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Cantidad</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Precio Unit.</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Subtotal</Text>
            </View>
          </View>
          {order.details.map((detail) => (
            <View style={styles.tableRow} key={detail.id}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{detail.product.name}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{detail.quantity}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>S/ {detail.unitPrice.toFixed(2)}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>S/ {detail.subtotal.toFixed(2)}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.total}>TOTAL: S/ {order.totalAmount.toFixed(2)}</Text>
    </Page>
  </Document>
);

export default RootGreenReceipt;
