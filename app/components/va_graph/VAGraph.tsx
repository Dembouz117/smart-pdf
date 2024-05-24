import { Chart, registerables } from 'chart.js';
import ChartJsImage from 'chartjs-to-image';
import { tw } from '../../../constants';
import { View, Image, Text } from '@react-pdf/renderer';
import { mockGraphData } from '../../data/graph';
import { createVaGraphConfig } from '../../data/graph/config';

Chart.register(...registerables);

const VaTitle = () => {
    return (
        <View style={tw("w-full p-4")}>
            <Text style={tw("text-lg font-bold")}>VA Detections</Text>
        </View>
    )

}

const getImageUrl = async (chart) => {
    const chartImageUrl = await chart.toDataUrl();
    return chartImageUrl;
}

const VaChart = () => {
    // const [chartImageUrl, setChartImageUrl] = useState("");
    const vaChart = new ChartJsImage();


    const labels = mockGraphData.map(item => `${item.date.format('DD')} \n ${item.date.format('ddd')}`);
    const data = mockGraphData.map(item => item.detections);

    // Calculate the maximum value in the dataset
    const maxDataValue = Math.max(...data);

    // Define the ceiling value (maximum value or another value of your choice)
    const ceiling = Math.ceil(maxDataValue / 10) * 10; 

    // Calculate the differences between the ceiling and the actual data
    const differenceDataSet = data.map(value => ceiling - value);
    const dataset = [data, differenceDataSet];
    const VaGraphConfig = createVaGraphConfig(labels, dataset);

    vaChart.setConfig(VaGraphConfig);

    vaChart.setWidth(500).setHeight(300).setChartJsVersion("4.3.3");
    const chartImageUrl = getImageUrl(vaChart);
    

  return (
    <View style={tw("w-3/4 h-64 rounded-lg shadow-3xl drop-shadow-md border border-2 border-gray-200 p-4")}>
        <Image src={chartImageUrl} style={tw("w-full aspect-square")}/>
    </View>

  )
};

const VaGraph = () => {

    return (
        <View>
            <VaTitle />
            <View style={tw("flex flex-col items-center justify-center w-full")}>
                <VaChart />
            </View> 
        </View>

    )
}


export default VaGraph;
