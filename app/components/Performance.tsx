import * as React from "react"
import { performanceData } from "../data"
import { View, Text } from "@react-pdf/renderer"
import { tw } from "../../constants"
import { PerformanceData } from "../schemas"

const PerformanceCard: React.FC<PerformanceData> = ({ label, value, unit, description, critical }) => (
  <View style={tw("flex flex-col justify-center px-6 py-4 rounded-lg bg-kabam-default max-md:pl-5 grow max-w-1/2 gap-6")}>
    <Text style={tw("text-xs font-medium leading-3 tracking-normal text-zinc-100")}>{label}</Text>
    <View style={tw("text-white")}>
      <Text style={tw("text-3xl font-semibold tracking-wider")}>{value} </Text>
      {unit && <Text style={tw("my-auto text-sm font-medium tracking-normal")}>{unit}</Text>}
      <Text style={tw("text-xs font-medium tracking-normal text-gray-500")}>{description}</Text>
    </View>

  </View>
)

const SummaryRow: React.FC<{ leftLabel: string, rightValue: string | number }> = ({ leftLabel, rightValue }) => (
  <View style={tw("flex justify-between gap-5 px-6 mt-4 bg-opacity-0 rounded-lg max-md:px-5")}>
    <Text style={tw("my-auto text-xs font-medium tracking-normal text-zinc-100")}>{leftLabel}</Text>
    <Text style={tw("text-xl font-semibold tracking-tight text-right text-white")}>{rightValue}</Text>
  </View>
)

const PerformaceTable: React.FC <{performanceMetrics : PerformanceData[]}> = ({ performanceMetrics }) => {
  return (
    <View style={tw("flex flex-col w-1/2 mx-2")}>
      <View style={tw("flex flex-col grow justify-center py-2 mx-auto w-full rounded-lg bg-kabam-default leading-[160%] max-md:mt-4")}>
        {performanceMetrics.map((data, idx) => (<SummaryRow key={idx} leftLabel={data.label} rightValue={data.value} />))}
      </View>
    </View>
  )

}


const Performance: React.FC = () => {
  
  const maxRowsPerTable = 4;
  const listValues = Object.values(performanceData);

  //  create a table for each 4 rows for the non-critical data
  const tables: PerformanceData[][] = listValues.filter(value => value.critical == false).reduce((acc, value, index) => {
    if (index % maxRowsPerTable === 0) {
      acc.push([]);
    }
    acc[acc.length - 1].push(value);
    return acc;
  }, []);

  return (
  <View style={tw("flex flex-col px-5 max-w-full")}>
    <Text style={tw("w-full text-base font-bold leading-6 tracking-normal text-kabam-default max-md:max-w-full")}>Robot Performance</Text>
    
    {/* if critical, use map to render the performance data */}
    <View style={tw("flex flex-row flex-wrap gap-3 px-0.5 mt-4 max-md:flex-wrap justify-center")}>
      {Object.values(performanceData).filter(data => data.critical == true).map((data, index) => (
        <PerformanceCard key={index} {...data} />
      ))}
    </View>
    
    <View style={tw("w-full mt-4 max-md:max-w-full")}>
      <View style={tw("flex flex-row gap-5 max-md:gap-0 justify-between")}>
        
        {tables.map((table, index) => (
          <PerformaceTable key={index} performanceMetrics={table} />
        ))}        
      </View>
    </View>
    
    <View style={tw("flex gap-5 self-end mt-1.5 text-xs text-gray-500 max-md:flex-wrap max-md:max-w-full")}>
      <View style={tw("self-start flex-auto")}>
        <Text>*Number of times it charged to 100% since deployment</Text>
      </View>
      <View style={tw("flex flex-col font-medium")}>
        <Text>*These could include client requests, maintenance/repair, weather etc.</Text>
        <Text style={tw("mt-1.5")}>**The lower the percentage, the better the robot’s performance.</Text>
      </View>
    </View>
    
  </View>
)
}

export default Performance;