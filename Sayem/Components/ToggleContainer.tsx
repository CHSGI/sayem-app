import { View, Text } from "react-native";
import { Switch } from "react-native-switch";
import React from "react";
import tw from "../tailwind.config";

interface ToggleProps {
  value: boolean;
  title: string;
  sub: string;
  onChange: () => void;
}
const ToggleContainer = (props: ToggleProps) => {
  return (
    <View
      style={tw`flex flex-row items-center justify-between pb-3 border-b-[1px] border-b-primary border-opacity-20 my-2`}
    >
      <View style={tw`gap-1`}>
        <Text style={tw`font-Medium text-base text-primary`}>
          {props.title}
        </Text>
        <Text style={tw`font-Regular text-xs`}>{props.sub}</Text>
      </View>
      <Switch
        backgroundActive={tw.color("primary")}
        backgroundInactive="#fff"
        circleActiveColor="#fff"
        circleInActiveColor={tw.color("primary")}
        containerStyle={tw`border-[1.5px] border-primary`}
        // outerCircleStyle={tw`border-primary border-2`}
        switchWidthMultiplier={2.4}
        circleSize={20}
        barHeight={28}
        renderActiveText={false}
        renderInActiveText={false}
        onValueChange={props.onChange}
        value={props.value}
      />
    </View>
  );
};

export default ToggleContainer;
