import { Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../tailwind.config";
interface ButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={tw`w-full bg-primary py-2 rounded-xl p-5`}
      onPress={props.onPress}
    >
      <Text style={tw`font-semibold text-white text-center`}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
