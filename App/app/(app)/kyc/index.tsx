import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import StackContainer from "../../../Components/StackContainer";
import tw from "../../../tailwind.config";
import Driver from "../../../Components/KYC/Driver";
import User from "../../../Components/KYC/User";

const Index = () => {
  return (
    <StackContainer title="KYC" desc="Setup your KYC">
      <ScrollView style={tw`p-5 pb-10`} showsVerticalScrollIndicator={false}>
        <Driver />
        {/* <User /> */}
      </ScrollView>
    </StackContainer>
  );
};

export default Index;
