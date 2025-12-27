import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import StackContainer from "../../../../Components/StackContainer";
import tw from "../../../../tailwind.config";
import TextInputComp from "../../../../Components/TextInput";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../../../../Components/CustomButton";

const Adv = () => {
  return (
    <StackContainer
      title="Address Verification"
      desc="Upload proof of address (utility bill, bank statement)"
    >
      <ScrollView style={tw`p-5`} showsVerticalScrollIndicator={false}>
        <View style={tw`p-5 bg-white rounded-lg shadow-lg gap-2`}>
          <Text style={tw`font-SemiBold text-primary text-lg`}>
            Upload Proof of Address
          </Text>
          <Text style={tw`font-Regular text-xs`}>
            Document must be dated within the last 3 months
          </Text>
          <View>
            <TextInputComp
              title="Residential Address"
              placeholder="Enter your full address"
              keyboard="default"
            />
          </View>
          {/* info  */}
          <View
            style={tw`border border-dashed border-gray-300 p-3 my-3 rounded-lg flex flex-row items-center gap-3`}
          >
            <AntDesign name="warning" size={18} color={tw.color("gray-500")} />
            <Text style={tw`text-xs font-Regular text-gray-500 flex-1`}>
              Accepted documents: Utility Bill, Bank Statement, or Rent Receipt
              (within 3 months)
            </Text>
          </View>

          <View style={tw`border border-neutral-200 rounded-xl p-3 my-3`}>
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

            {/* action buttons  */}
            <View style={tw`flex mt-10 items-center gap-6`}>
              <CustomButton
                title="Cancel"
                display="bordered"
                onPress={() => {
                  // router.back();
                }}
              />
              <CustomButton
                title="Submit for Review"
                disabled
                onPress={() => {
                  // router.push("/kyc/user/adv");
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </StackContainer>
  );
};

export default Adv;
