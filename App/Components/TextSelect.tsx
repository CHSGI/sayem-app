import { View, Text, TouchableOpacity, Modal, Platform } from "react-native";
import React from "react";
import tw from "../tailwind.config";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { StatusBar } from "expo-status-bar";

interface textSelectProps {
  title?: string;
  placeholder?: string;
  selectState?: boolean;
  setSelectState?: () => void;
  selectedValue: string;
  onValueChange: ({
    itemValue,
    itemIndex,
  }: {
    itemValue: string;
    itemIndex: number;
  }) => void;
  data?: { label: string; value: string }[];
}

const TextSelect = (props: textSelectProps) => {
  return (
    <View style={tw`my-2 `}>
      {props.title && (
        <Text style={tw`font-Medium text-primary text-sm mb-2`}>
          {props.title}
        </Text>
      )}
      {Platform.OS === "ios" ? (
        <View style={tw`border border-gray-400 py-1 rounded-lg`}>
          <TouchableOpacity
            style={tw`bg-gray-100 rounded-lg p-2 flex flex-row items-center`}
            onPress={props.setSelectState}
          >
            <Text style={tw`font-Regular text-sm text-gray-600 flex-1`}>
              {props.selectedValue || props.placeholder}
            </Text>
            <Feather
              name="chevron-down"
              size={20}
              color={tw.color("gray-400")}
            />
          </TouchableOpacity>
          {/* modal for selecting state  */}
          <Modal
            visible={props.selectState}
            animationType="slide"
            transparent={true}
            onRequestClose={props.setSelectState}
          >
            <StatusBar style="auto" />
            <View style={tw`flex-1 items-center justify-center bg-white/80`}>
              <TouchableOpacity
                onPress={props.setSelectState}
                style={tw`w-full px-5 flex-row justify-end`}
              >
                {/* <Text
                  style={tw`font-Medium text-primary text-center text-lg mt-4`}
                >
                  Close
                </Text> */}
                <Ionicons
                  name="close-outline"
                  size={50}
                  color={tw.color("gray-600")}
                />
              </TouchableOpacity>
              <View
                style={tw`w-11/12 mx-auto min-h-10 rounded-lg shadow-lg bg-white p-5`}
              >
                <Text
                  style={tw`font-Medium text-primary text-center text-lg mt-2`}
                >
                  {props.title && "Select " + props.title}
                </Text>
                <View style={tw`my-2`}>
                  <Picker
                    onValueChange={(itemValue: string, itemIndex: number) =>
                      props.onValueChange({ itemValue, itemIndex })
                    }
                    selectedValue={props.selectedValue!}
                    itemStyle={tw`font-Regular text-sm`}
                    style={tw`w-full`}
                  >
                    <Picker.Item
                      label={props.placeholder}
                      value=""
                      color="black"
                    />
                    {props.data?.map((item, index) => (
                      <Picker.Item
                        key={index}
                        color="black"
                        label={item.label}
                        value={item.value}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      ) : (
        <View
          style={tw`bg-gray-100 rounded-lg p-2 flex flex-row items-center border border-gray-400 py-1`}
        >
          <Picker
            onValueChange={(itemValue: string, itemIndex: number) =>
              props.onValueChange({ itemValue, itemIndex })
            }
            selectedValue={props.selectedValue!}
            itemStyle={tw`font-Regular text-sm`}
            style={tw`w-full`}
          >
            <Picker.Item label={props.placeholder} value="" color="black" />
            {props.data?.map((item, index) => (
              <Picker.Item
                key={index}
                color="black"
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </View>
      )}
    </View>
  );
};

export default TextSelect;
