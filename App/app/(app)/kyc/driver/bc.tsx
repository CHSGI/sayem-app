import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import StackContainer from "../../../../Components/StackContainer";
import tw from "../../../../tailwind.config";

const Bc = () => {
  return (
    <StackContainer title="Background Check" desc="">
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <ScrollView style={tw`p-5`} showsVerticalScrollIndicator={false}>
          <View style={tw`p-5 bg-white rounded-lg shadow-lg `}></View>
        </ScrollView>
      </KeyboardAvoidingView>
    </StackContainer>
  );
};

export default Bc;
