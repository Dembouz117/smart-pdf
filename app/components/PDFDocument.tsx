import dynamic from "next/dynamic";
import React from 'react';
import ReactPDF, { Page, Document } from '@react-pdf/renderer';
import Performance from "../components/Performance";
import PDFCalendar from "../components/PDFCalendar";
import DeploymentTable from "../components/DeploymentTable"; 
import AlertGroup from "../components/va_alert/AlertGroup";

import IntroHero from "../components/IntroHero";

export const PDFDocument = () => {
  return (
    <Document>
        <Page size="A4">
            <IntroHero/>
            <Performance/>
            <DeploymentTable/>
            <AlertGroup/>
        </Page>
        <PDFCalendar year={2022} month={0}/>
    </Document>
  )
}

// export default PDFDocument;
const createPDF = async () => {
    return await ReactPDF.renderToStream(<PDFDocument/>);
}

export default createPDF;