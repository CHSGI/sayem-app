import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import StackContainer from "../../../../../Components/StackContainer";
import tw from "../../../../../tailwind.config";
import ImageSelect from "../../../../../Components/ImageSelect";
import TextInputComp from "../../../../../Components/TextInput";
import CustomButton from "../../../../../Components/CustomButton";

const Delivery = () => {
  return (
    <StackContainer
      title="Proof of Delivery"
      desc="Complete your delivery task."
    >
      <KeyboardAvoidingView
        behavior="padding"
        style={tw`flex-1`}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <ScrollView style={tw`flex-1 p-5`} showsVerticalScrollIndicator={false}>
          {/* title  */}
          <Text style={tw`font-Medium text-lg`}>Booking ID</Text>
          <Text style={tw`font-Regular text-xs`}>ETTO-2025-0114</Text>
          <View style={tw`flex flex-row items-center my-2`}>
            <Text
              style={tw`font-Regular text-xs bg-orange-200 text-orange-800 p-2 rounded-lg`}
            >
              Awaiting Pickup
            </Text>
          </View>
          {/* pickup contact  */}
          <View style={tw`gap-2 flex-1 mt-5`}>
            <Text style={tw`font-Regular text-xs`}>Pick up Contact</Text>
            <Text style={tw`font-Medium text-sm`}>Abiola Fadegesin</Text>
          </View>
          {/* body  */}
          <View style={tw`p-5 shadow-xl rounded-lg bg-white my-5`}>
            <View>
              <Text style={tw`font-Medium text-lg text-primary`}>
                Proof of Delivery
              </Text>
              <Text style={tw`font-Regular text-xs`}>Proof of Delivery</Text>
            </View>
            <View style={tw`mb-5`}>
              <ImageSelect title="Recipient Signature" setImage={() => {}} />
              <ImageSelect title="Delivery Photos" setImage={() => {}} />
              <TextInputComp
                title="Delivery Notes (Optional)"
                placeholder="Add any notes about the delivery...."
                keyboard="default"
                onChangeText={() => {}}
              />
            </View>
            <CustomButton title="Complete Delivery" onPress={() => {}} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </StackContainer>
  );
};

export default Delivery;
