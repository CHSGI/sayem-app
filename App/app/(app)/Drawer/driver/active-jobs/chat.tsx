import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import StackContainer from "../../../../../Components/StackContainer";
import tw from "../../../../../tailwind.config";
import TextInputComp from "../../../../../Components/TextInput";
import { Ionicons } from "@expo/vector-icons";

const HeaderComponent = () => {
  return (
    <View style={tw``}>
      <View
        style={tw`bg-white border border-gray-400 rounded-xl w-9/10 mx-auto p-2 flex-row items-center gap-4`}
      >
        {/* icon  */}
        <View
          style={tw`w-20 h-20 bg-primary/10 rounded-full items-center justify-center`}
        >
          <Text>IM</Text>
        </View>
        {/* right text  */}
        <View>
          <Text style={tw`font-SemiBold text-lg text-gray-600`}>
            ABC Trading Ltd
          </Text>
          <Text style={tw`font-Regular text-sm text-gray-600`}>
            Electronics Dealer
          </Text>
        </View>
      </View>
    </View>
  );
};

const RenderComponent = ({
  item,
}: {
  item: { id: number; message: string; sender: string };
}) => {
  return (
    <View
      style={tw`p-3 flex flex-row items-center ${
        item.sender === "customer" ? "justify-start" : "justify-end"
      }`}
    >
      <View
        style={tw`p-3 ${
          item.sender === "customer" ? "bg-primary/10" : "bg-primary"
        } rounded-lg`}
      >
        <Text
          style={tw`font-Medium text-sm ${
            item.sender === "customer" ? "text-primary" : "text-white"
          }`}
        >
          {item.message}
        </Text>
        <View
          style={tw`mt-3 flex-row ${
            item.sender === "customer" ? "justify-start " : "justify-end"
          }`}
        >
          <Text
            style={tw`text-[10px] font-Regular ${
              item.sender === "customer" ? "text-gray-600" : "text-white"
            }`}
          >
            10:02 PM
          </Text>
        </View>
      </View>
    </View>
  );
};

const Chat = () => {
  return (
    <StackContainer title="Chat" desc="Communicate with the customer.">
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        style={tw`flex-1`}
      >
        <HeaderComponent />
        {/* scroll element */}
        <FlatList
          data={[
            {
              id: 1,
              message: "Hello is my order ready?",
              sender: "customer",
            },
            { id: 2, message: "Yes im at your location.", sender: "driver" },
          ]}
          inverted
          style={tw`flex-1 p-5`}
          renderItem={({ item }) => <RenderComponent item={item} />}
        />
        {/* messaging section */}
        <View style={tw`px-5 flex flex-row items-center gap-2`}>
          <View style={tw`flex-1`}>
            <TextInputComp placeholder="Type your message" keyboard="default" />
          </View>
          <TouchableOpacity
            style={tw`bg-primary p-2 rounded-xl w-10 h-10 items-center justify-center`}
          >
            <Ionicons name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </StackContainer>
  );
};

export default Chat;
