import { View, Text } from "@react-pdf/renderer";
import React from "react";
import { tw } from "../../constants";
import { deploymentData } from "../data";
import { DeploymentSchema } from "../schemas";


const InfoRow: React.FC<DeploymentSchema> = ({label, info}) => (
    <View style={tw("flex flex-row")}>
        <View style={tw("flex flex-col text-xs font-semibold leading-3 tracking-normal grow w-1/2")}>
            <View style={tw("px-2.5 py-3.5 border-t border-l border-solid bg-blue-200 bg-opacity-10 border-zinc-400")}>
                <Text style={tw("text-black")}>{label}</Text>
            </View>
        </View>
            <View style={tw("flex flex-col text-xs leading-3 tracking-normal text-black grow w-1/2")}>
            <View style={tw("px-2.5 py-3.5 border border-solid border-zinc-400")}>
                <Text style={tw("text-black")}>{info}</Text>
            </View>
        </View>
    </View>
)

const InfoBlock: React.FC<{tableData : DeploymentSchema[]}> = ( { tableData } ) => (
  <View style={tw("flex flex-col max-md:w-full")}>
    {tableData.map((data, index) => <InfoRow key={index} label={data.label} info={data.info} />)}
  </View>
);

function DeploymentTable() {
    return (
        <View style={tw("flex flex-col px-5 max-w-full")}>
        <View style={tw("w-full text-base font-bold leading-6 tracking-normal text-blue-950 max-md:max-w-full")}>
            <Text>Deployment Details</Text>
        </View>
        <View style={tw("self-start mt-4 max-md:max-w-full")}>
            <View style={tw("flex flex-row gap-5 space-x-2 ")}>
                <InfoBlock tableData={deploymentData}/>
                <InfoBlock tableData={deploymentData}/>
            </View>
        </View>
        </View>
    );
}

export default DeploymentTable;