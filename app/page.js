"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import React from 'react';
import { Page, View, Image, Document, StyleSheet } from '@react-pdf/renderer';
import { tw } from "../constants";
import Performance from "./components/Performance";
import PDFCalendar from "./components/PDFCalendar";
import DeploymentTable from "./components/DeploymentTable"; 
import AlertGroup from "./components/va_alert/AlertGroup";

import IntroHero from "./components/IntroHero";
import VaAlertSummary from "./components/va_alert_summary/VaAlertSummary";

import ChartJsImage from 'chartjs-to-image';
import { multiColorChartData, multiColorOptions } from "./graphConfig";

import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);


// Create Document Component
const MyDocument = () => (
  <Document className="w-full h-3/4">
    <Page size="A4" className="w-full">
      <IntroHero/>
      <Performance/>
      <DeploymentTable/>
      <AlertGroup/>
    </Page>
    <PDFCalendar year={2022} month={0}/>

  </Document>
);

export default function Home() {
  const [imageSrc, setImageSrc] = useState(null);

  const graphStyles = StyleSheet.create({
    graph: {
      width: 200,
      height: 200,
    },
  
  });


  // useEffect(() => {
    const myChart = new ChartJsImage();
    myChart.setConfig({
      type: 'bar',
      data: multiColorChartData,
      options: multiColorOptions
    });
    myChart.setWidth(500).setHeight(300).setChartJsVersion("4.3.3");
    myChart.toDataUrl().then((data) => setImageSrc(data));
    // const createChart = async () => {
    //   const chart = new ChartJsImage();
    //   chart.setConfig(horizontalOptions);
    //   const dataUrl = await chart.getShortUrl();
    //   setChartImageURL(dataUrl);
    // };
    // createChart();
  // }, []);

  return (
  <>
  <div className="w-full h-32 bg-red-200"></div>
      <PDFViewer className="w-screen h-screen bg-red-200">
        {/* <MyDocument/> */}
        <Document className="w-full h-3/4">
          <Page size="A4" className="w-full">
            <IntroHero/>
            <Performance/>
            <DeploymentTable/>
            <AlertGroup/>
            <VaAlertSummary/>
            {/* <View style={tw("flex flex-col items-center justify-center bg-red-200")}>
              <Image src={imageSrc} style={graphStyles.graph}/>
            </View> */}
            
          </Page>
    <PDFCalendar year={2022} month={0}/>

  </Document>
      </PDFViewer>
      

  </>
  );
}
