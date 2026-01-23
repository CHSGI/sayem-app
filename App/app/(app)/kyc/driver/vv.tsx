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
import TextSelect from "../../../../Components/TextSelect";
import TextInputComp from "../../../../Components/TextInput";
import ImageSelect from "../../../../Components/ImageSelect";
import CustomButton from "../../../../Components/CustomButton";

const Vv = () => {
  const [selectState, setSelectState] = React.useState(false);
  return (
    <StackContainer
      title="Vehicle Information"
      desc="Tell us a little about yourself to get started"
    >
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <ScrollView style={tw`p-5`} showsVerticalScrollIndicator={false}>
          <View style={tw`p-5 bg-white rounded-lg shadow-lg `}>
            <Text style={tw`font-SemiBold text-primary text-lg`}>
              Upload Vehicle Information
            </Text>
            <Text style={tw`font-Regular text-xs`}>
              Document must be dated within the last 3 months
            </Text>
            {/* body  */}
            <View>
              <TextSelect
                title="Vehicle Type"
                placeholder="--Select Vehicle Type--"
                selectedValue={""}
                onValueChange={(value) => {}}
                data={[
                  { label: "Car", value: "car" },
                  { label: "Truck", value: "truck" },
                  { label: "Bus", value: "bus" },
                ]}
                selectState={selectState}
                setSelectState={() => setSelectState(!selectState)}
              />
              <TextInputComp
                title="Vehicle Model"
                placeholder="Enter vehicle Model"
                keyboard="default"
              />
              <TextInputComp
                title="Vehicle Year"
                placeholder="DD/MM/YYYY"
                keyboard="numbers-and-punctuation"
              />
              <TextInputComp
                title="Plate Number"
                placeholder="Enter Plate Number"
                keyboard="default"
              />
              <ImageSelect
                title="Vehicle Registration Paper"
                pickImage={() => {}}
                setImage={(image) => {}}
              />
              <ImageSelect
                title="Road Worthiness Certificate"
                pickImage={() => {}}
                setImage={(image) => {}}
              />
              <ImageSelect
                title="Insurance Certificate"
                pickImage={() => {}}
                setImage={(image) => {}}
              />
              <Text style={tw`font-Medium text-primary text-base my-2 mb-3`}>
                Vehicle Images
              </Text>
              <ImageSelect
                title="Upload Front View"
                pickImage={() => {}}
                setImage={(image) => {}}
              />
              <ImageSelect
                title="Upload Side View"
                pickImage={() => {}}
                setImage={(image) => {}}
              />
              <ImageSelect
                title="Upload Rear View"
                pickImage={() => {}}
                setImage={(image) => {}}
              />
            </View>
            <View style={tw`mt-10`}>
              <CustomButton title="Submit for Review" onPress={() => {}} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </StackContainer>
  );
};

export default Vv;
