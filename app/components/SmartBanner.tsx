import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { tw } from "../../constants"

interface bannerProps {
  text?: string;

}
const SmartBanner = ({ text }: bannerProps) => {

  return (
    <View style={tw("bg-kabam-default h-16 px-6 py-4 mb-6")}>
      <Text style={tw("text-red-200 text-white")}>{text ? text : "Smart+ Report"}</Text>
    </View>
  );
};

export default SmartBanner;

