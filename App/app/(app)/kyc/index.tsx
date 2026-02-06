import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import StackContainer from "../../../Components/StackContainer";
import tw from "../../../tailwind.config";
import Driver from "../../../Components/KYC/Driver";
import User from "../../../Components/KYC/User";
import { accountState } from "../../../store/stateStore";

const Index = () => {
  const { role } = accountState();
  return (
    <StackContainer title="KYC" desc="Setup your KYC">
      <ScrollView style={tw`p-5 pb-10`} showsVerticalScrollIndicator={false}>
        {role === "individual/business" && <User />}
        {role === "driver" && <Driver />}
      </ScrollView>
    </StackContainer>
  );
};

export default Index;
