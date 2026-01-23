import {
  View,
  Text,
  KeyboardTypeOptions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "../tailwind.config";
import { Feather } from "@expo/vector-icons";

interface TIProps {
  title?: string;
  placeholder: string;
  keyboard: KeyboardTypeOptions;
  password?: boolean;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  viewPassword?: boolean;
  setViewPassword?: () => void;
}

const TextInputComp = (props: TIProps) => {
  return (
    <View style={tw`my-2`}>
      {props.title && (
        <Text style={tw`font-Medium text-primary text-sm mb-2`}>
          {props.title}
        </Text>
      )}
      <View
        style={tw`flex flex-row items-center bg-gray-100 rounded-lg p-3 border border-gray-400`}
      >
        <View style={tw` flex-1`}>
          <TextInput
            keyboardType={props.keyboard}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            placeholderTextColor={tw.color("gray-400")}
            secureTextEntry={props.secureTextEntry}
            style={tw`font-Regular text-sm`}
          />
        </View>
        {props.password && (
          <TouchableOpacity onPress={props.setViewPassword}>
            {props.viewPassword ? (
              <Feather name="eye" size={20} color={tw.color("black")} />
            ) : (
              <Feather name="eye-off" size={20} color={tw.color("black")} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextInputComp;
