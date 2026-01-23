import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../tailwind.config";
import CustomButton from "./CustomButton";
import { AntDesign } from "@expo/vector-icons";

interface ISProps {
  title: string;
  placeholder?: string;
  pickImage?: () => void;
  setImage: (image: string) => void;
}

const ImageSelect = (props: ISProps) => {
  return (
    <View style={tw`my-2`}>
      <Text style={tw`font-Medium text-primary text-sm mb-2`}>
        {props.title}
      </Text>
      {/* button  */}
      <TouchableOpacity
        style={tw`flex items-center justify-center gap-2 min-h-32 border border-neutral-300 border-dashed p-4 rounded-xl`}
      >
        <AntDesign name="camera" size={25} color={tw.color("gray-500")} />
        <Text style={tw`font-Regular text-gray-500 text-xs`}>
          Click to browse
        </Text>
        <View
          style={tw`my-3 bg-neutral-200 p-3 rounded-xl w-full flex flex-row items-center justify-center`}
        >
          <Text style={tw`font-SemiBold text-gray-500 text-sm`}>
            Choose Files:{" "}
          </Text>
          <Text style={tw`font-Regular text-gray-500 text-sm`}>
            No files chosen
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ImageSelect;
