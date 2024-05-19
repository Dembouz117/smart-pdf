import * as React from "react";
import { Image, View, Text } from "@react-pdf/renderer";

import { tw } from "../../constants";
interface ImageProps {
  source: string;
  className: string;
}

const ImageComp: React.FC<ImageProps> = ({ source, className }) => (
  <Image source={source} style={tw(className)} />
);

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
  return (
    <View style={tw("flex flex-col items-start py-4 pl-4 text-base font-bold tracking-normal leading-5 text-white bg-kabam-default max-w-full")}>
      <ImageComp
        source="https://cdn.builder.io/api/v1/image/assets/TEMP/aba54c2e4bfa0253889a554b2dc75db7a39f34699a67078ef1ac2fd3c0544102?apiKey=6ca49164264f4746a071786d12c61052&"
        className="self-end max-w-full aspect-[2.44] w-[124px]"
      />
      <ImageComp
        source="https://cdn.builder.io/api/v1/image/assets/TEMP/6ef805c7a1d2677334e722a692107d150e52a4596a779d9ec1e071a6275892e1?apiKey=6ca49164264f4746a071786d12c61052&"
        className="mt-2 max-w-full aspect-[3.45] w-[124px]"
      />
      <Text style={tw("mt-4 text-3xl")}>Smart+ Report</Text>
    </View>
  );
};

export default MyComponent;