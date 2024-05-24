import { View, Text, Image, Svg } from '@react-pdf/renderer';
import { tw } from '../../../constants';
import { FaBeer } from 'react-icons/fa';
import { vaAlertSummaryData } from '../../data/va_alert_summary';
import { renderToStaticMarkup } from 'react-dom/server';

const SummaryTitle = () => {
  return (
    <View style={tw("p-4 w-full")}>
      <Text style={tw("text-lg")}>Video Analytics Alerts by Category</Text>
    </View>
  )
}

const svgToDataUrl = (svg: string): string => {
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  };
  

const AlertImage = ({ src }) => {
    const beerIconSvgString = renderToStaticMarkup(<FaBeer />);
    console.log(beerIconSvgString);

    // Convert the SVG string to a data URL
    const beerIconDataUrl = svgToDataUrl(beerIconSvgString);
    console.log(beerIconDataUrl);
    return (
        <Image src={src} style={tw("w-1/4 mx-2 h-full")}/>
    )

}

const SliderBar = ({ percentage }: { percentage: number}) => {
    const sliderWidth = `${percentage}%`;
    const sliderFullWidth = `${100}%`;
    return (
        <View style={tw("w-full h-full flex flex-row")}>
            {/* Orange slider */}
            <View style={tw(`w-[${sliderFullWidth}] inset-0 absolute bg-status-good rounded-xl`)}/>
            <View style={tw(`w-[${sliderWidth}] inset-0 absolute bg-status-warning rounded-xl`)}/>
            {/* Green slider */}
            
        </View>
    )
}

interface VaAlertsColumnProps {
    
    totalDetections: number;
    detections: number;
}

const VaDetectionsColumn = ({totalDetections, detections}: VaAlertsColumnProps) => {
    const color = detections > 0 ? "text-status-warning" : "text-status-good";
    return (
        <View style={tw("flex flex-col w-1/2 ml-2 h-full gap-2 relative bottom-2 ")}>
            <Text style={(tw("text-xs"))}>{totalDetections} VA Tasks</Text>
            <Text style={tw(`${color} text-xs`)}>{detections} Detections</Text>
        </View>
    )

}



const VaAlertSummary = () => {
        //  Mock fetch: vaAlertSummaryData
        const { alerts } = vaAlertSummaryData;
        const totalDetections = alerts.reduce((acc, alert) => acc + alert.detections, 0);
        return (
        <View style={tw("flex-col gap-4")}>
            <SummaryTitle/>
            <View style={tw("w-full flex flex-col justify-center items-center gap-4 mb-2 h-auto")}>
                {alerts.map((alert) => {
                    const percentage = (alert.detections / totalDetections) * 100;
                    return (
                    <View style={tw("w-3/4 flex-row flex h-6")}>
                        <AlertImage src = {alert.alertImageUrl}/>
                        <SliderBar percentage={percentage}/>
                        <VaDetectionsColumn totalDetections={totalDetections} detections={alert.detections}/>
                    </View>
                )})
                }
            </View>
        </View>

  )
}

export default VaAlertSummary;