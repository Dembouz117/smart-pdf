import * as React from 'react';
import { AlertGroupSchema, AlertCardSchema }  from '../../schemas';
import { alertGroupItems } from '../../data';
import { View, Text, Image } from '@react-pdf/renderer';
import { tw } from '../../../constants';

const AlertHeader: React.FC<Omit<AlertGroupSchema, "alerts">> = ({ location, locationId}) => (
  <View style={tw("flex flex-col flex-wrap w-64 max-w-full p-4 rounded-xl items-center justify-center")}>
    <View style={tw("flex flex-row gap-4 px-5 text-xs text-black items-center justify-center")}>
      <View style={tw("justify-center items-center w-8 h-8 font-extrabold whitespace-nowrap rounded-full min-w-[2rem] min-h-[2rem] border border-solid bg-kabam-default border-white border-opacity-80 ")}>
        <Text style={tw("text-white")}>{locationId}</Text>
      </View>
      <Text style={tw("relative top-2 my-auto text-xl text-black")}>{location}</Text>
    </View>
  </View>
);

const AlertCard: React.FC<AlertCardSchema> = ({ id, title, time, src1, src2 }) => (
  <View style={tw("flex flex-col p-2 mx-auto bg-white rounded-md border border-solid border-zinc-200 h-[120px] w-[120px]")}>
    <View style={tw("flex items-center justify-center px-12 py-6 rounded-sm bg-zinc-200 max-md:px-5")}>
      <Image src={src1} style={tw("w-3.5 aspect-[0.93]")} />
    </View>
    <View style={tw("mt-1 text-xs font-semibold leading-3 tracking-normal text-zinc-800")}>{title}</View>
    <View style={tw("flex justify-between gap-3")}>
      <Text style={tw("my-auto text-xs font-medium leading-relaxed tracking-normal text-zinc-500")}>{time}</Text>
      <View style={tw("flex justify-center items-center px-2 py-0.5 rounded-3xl bg-slate-100")}>
        <Image src={src2} style={tw("aspect-square w-[11px]")} />
      </View>
    </View>
  </View>
);

const AlertGroupItem: React.FC<AlertGroupSchema> = ({ location, locationId, alerts }) => {
  return (
    <View style={tw("flex flex-col gap-2 w-full")}>
      <AlertHeader location={location} locationId={locationId}/>
      <View style={tw("w-full flex flex-row flex-wrap")}>
        {alerts.map((alert) => (
          <AlertCard key={alert.id} {...alert} />
        ))}
      </View>
    </View>
  );

}

const AlertGroup = () => {
  //  Mock fetch: alertGroupItems
  const alertItems = alertGroupItems;

  return (
    <View style={tw("flex flex-col pb-9 max-w-[521px]")}>
      {alertItems.map(({ location, locationId, alerts }) => (
        <AlertGroupItem key={locationId} location={location} locationId={locationId} alerts={alerts} />
      ))}
      <Text style={tw("w-full text-xs font-medium text-zinc-600 max-md:max-w-full")}>
        *To view complete list of alerts, please login to Smart+ and visit alert page.
      </Text>
    </View>
  );
};

export default AlertGroup;