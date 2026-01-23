import { View, Text } from "react-native";
import React from "react";
import tw from "../tailwind.config";

const DetailsView = (props: { title: string; body: string }) => {
  return (
    <View style={tw`gap-2 my-2`}>
      <Text style={tw`font-Medium text-sm`}>{props.title}</Text>
      <Text style={tw`font-Regular text-xs bg-gray-100 p-3 rounded-lg`}>
        {props.body}
      </Text>
    </View>
  );
};

export default DetailsView;
