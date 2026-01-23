import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import StackContainer from "../../../../Components/StackContainer";
import TextInputComp from "../../../../Components/TextInput";
import CustomButton from "../../../../Components/CustomButton";
import tw from "../../../../tailwind.config";
import TextSelect from "../../../../Components/TextSelect";

const Fv = () => {
  const [select, setSelect] = React.useState({
    bankName: false,
    payout: false,
  });
  return (
    <StackContainer
      title="Financial Verification"
      desc="We use this information to process payouts securely."
    >
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <ScrollView style={tw`p-5`} showsVerticalScrollIndicator={false}>
          <View style={tw`p-5 bg-white rounded-lg shadow-lg `}>
            <TextSelect
              title="Bank Name"
              placeholder="--Select Bank Name--"
              data={[]}
              selectedValue={""}
              selectState={select.bankName}
              onValueChange={(text) => {}}
              setSelectState={() =>
                setSelect({ ...select, bankName: !select.bankName })
              }
            />
            <TextInputComp
              title="Bank Account Number"
              placeholder="Bank Account Number"
              keyboard="email-address"
            />
            <TextInputComp
              title="BVN Match Confirmation"
              placeholder="enter BVN digits"
              keyboard="phone-pad"
            />
            <TextSelect
              title="Preferred Payout Schedule"
              onValueChange={() => {}}
              placeholder="--Select Payout Schedule--"
              data={[
                { label: "Weekly", value: "weekly" },
                { label: "Bi-weekly", value: "bi-weekly" },
                { label: "Monthly", value: "monthly" },
              ]}
              selectedValue={""}
              selectState={select.payout}
              setSelectState={() =>
                setSelect({ ...select, payout: !select.payout })
              }
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

export default Fv;
