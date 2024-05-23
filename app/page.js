"use client";

import dynamic from "next/dynamic";
import React, { useState } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Performance from "./components/Performance";
import PDFCalendar from "./components/PDFCalendar";
import DeploymentTable from "./components/DeploymentTable"; 
import AlertGroup from "./components/va_alert/AlertGroup";
import PDFChartHolder from "./components/charts/PDFChartHolder";
import AlertChart from "./components/charts/AlertChart";

import IntroHero from "./components/IntroHero";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  row: {
    flexDirection: 'row',
  }
});



// Create Document Component
const MyDocument = () => {
  const [chartImage, setChartImage] = useState(null);
  
  return (
  <Document className="w-full h-3/4">
    <Page size="A4" className="w-full">
      <IntroHero/>
      <Performance/>
      <DeploymentTable/>
      <AlertGroup/>

      
    <PDFCalendar year={2022} month={0}/>
  </Page>
  </Document>
)};
export default function Home() {
  const [chartImage, setChartImage] = useState(null);

  return (
  <>
      <AlertChart setChartImage={setChartImage} />
      
      <PDFViewer className="w-screen h-screen bg-red-200">
        {/* <MyDocument/> */}
        <Document className="w-full h-3/4">
        <Page size="A4" className="w-full">
          <IntroHero/>
          <Performance/>
          <DeploymentTable/>
          <AlertGroup/>
          {/* {chartImage && <PDFChartHolder chartImage={chartImage} />} */}
          
        <PDFCalendar year={2022} month={0}/>
      </Page>
      </Document>
      </PDFViewer>

  </>
  );
}
