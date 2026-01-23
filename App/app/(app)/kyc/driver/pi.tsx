import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import StackContainer from "../../../../Components/StackContainer";
import tw from "../../../../tailwind.config";
import TextInputComp from "../../../../Components/TextInput";
import CustomButton from "../../../../Components/CustomButton";

const PersonalInformation = () => {
  return (
    <StackContainer
      title="Personal Information"
      desc="Tell us a little about yourself to get started"
    >
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <ScrollView style={tw`p-5`} showsVerticalScrollIndicator={false}>
          <View style={tw`p-5 bg-white rounded-lg shadow-lg `}>
            <TextInputComp
              title="Full Name"
              placeholder="Full Name"
              keyboard="default"
            />
            <TextInputComp
              title="Email Address"
              placeholder="Email Address"
              keyboard="email-address"
            />
            <TextInputComp
              title="Phone Number"
              placeholder="Phone Number"
              keyboard="phone-pad"
            />
            <TextInputComp
              title="Date of Birth"
              placeholder="DD/MM/YYYY"
              keyboard="numbers-and-punctuation"
            />
            <Text style={tw`text-base font-SemiBold text-primary my-2 mb-3`}>
              Next of Kin
            </Text>
            <TextInputComp
              title="Full Name"
              placeholder="Full Name"
              keyboard="default"
            />
            <TextInputComp
              title="Phone Number"
              placeholder="Phone Number"
              keyboard="phone-pad"
            />
            <View style={tw`mt-5`}>
              <CustomButton title="Submit for Review" onPress={() => {}} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </StackContainer>
  );
};

export default PersonalInformation;
