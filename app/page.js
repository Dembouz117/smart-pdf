"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import React from 'react';
import { Page, Text, View, Image, Document, StyleSheet } from '@react-pdf/renderer';
import { tw } from "../constants";
import Performance from "./components/Performance";
import PDFCalendar from "./components/PDFCalendar";
import DeploymentTable from "./components/DeploymentTable"; 
import AlertGroup from "./components/va_alert/AlertGroup";

import IntroHero from "./components/IntroHero";

import ChartJsImage from 'chartjs-to-image';

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
const MyDocument = () => (
  <Document className="w-full h-3/4">
    <Page size="A4" className="w-full">
      <IntroHero/>
      {/* <View style={styles.row}>
        <Text style={tw("text-red-200 text-3xl")}>Section #1</Text>
        <Text>Section #2</Text>
      </View> */}
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

  const labels = ["Hey", "There", "Bro"];
  const data = [20,30,40];


  useEffect(() => {
    const myChart = new ChartJsImage();
    myChart.setConfig({
      type: 'bar',
      data: { 
        labels: labels, // Labels: Remember not to hardcode this later
        datasets: [{ label: 'Foo', data: data }]
      },
      options: {
        indexAxis: 'y',
        scales: {
          y: {
            ticks: {
              callback: function(value, index, ticks) {
                // This callback will be overridden by the plugin
                return '';
              }
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return `${data.labels[tooltipItem.dataIndex]}: ${tooltipItem.raw}`;
              }
            }
          }
        }
      },
      // plugins: [{
      //   id: 'customTicks',
      //   afterDraw: (chart) => {
      //     const ctx = chart.ctx;
      //     chart.scales.y.ticks.forEach((tick, index) => {
      //       const image = new Image();
      //       image.src = data.images[index];
      //       const x = chart.scales.y.left - 40; // Adjust x position
      //       const y = chart.scales.y.getPixelForTick(index) - 15; // Adjust y position

      //       ctx.drawImage(image, x, y, 30, 30);
      //     });
      //   }
      // }]
    });
    
    myChart.toDataUrl().then((data) => setImageSrc(data));
  }, []);

  return (
  <>
      <PDFViewer className="w-screen h-screen bg-red-200">
        {/* <MyDocument/> */}
        <Document className="w-full h-3/4">
          <Page size="A4" className="w-full">
            <IntroHero/>
            <Performance/>
            <DeploymentTable/>
            <AlertGroup/>
            <View style={tw("flex flex-col items-center justify-center bg-red-200")}>
              <Image src={`${imageSrc}`} style={graphStyles.graph}/>
            </View>
            
          </Page>
    <PDFCalendar year={2022} month={0}/>

  </Document>
      </PDFViewer>
      

  </>
  );
}
