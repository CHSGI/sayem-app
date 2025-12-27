import { Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../tailwind.config";
interface ButtonProps {
  title: string;
  onPress: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  display?: "bordered" | "solid";
}

const CustomButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={tw`w-full bg-primary flex flex-row items-center justify-center gap-1 py-2 rounded-xl p-5 ${
        props.disabled
          ? "bg-gray-400"
          : props.display === "bordered"
          ? "border-2 border-neutral-300 bg-white p-4"
          : ""
      }`}
      disabled={props.disabled}
      onPress={props.onPress}
    >
      {props.icon && props.icon}
      <Text
        style={tw`font-Medium text-white text-center ${
          props.display === "bordered" ? "text-neutral-500" : ""
        }`}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
