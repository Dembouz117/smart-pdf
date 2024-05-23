import React from 'react';
import { Page, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  image: {
    margin: 10,
    width: '80%',
    height: 'auto',
  },
});

interface PdfDocumentProps {
  chartImage: string;
}

const PDFChartHolder: React.FC<PdfDocumentProps> = ({ chartImage }) => (
    <Page size="A4" >
      <Image style={styles.image} src={chartImage} />
    </Page>
);

export default PDFChartHolder;
