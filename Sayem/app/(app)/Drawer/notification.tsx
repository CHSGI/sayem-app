import { View, Text, ScrollView } from "react-native";
import React from "react";
import DrawerContainer from "../../../Components/DrawerContainer";
import tw from "../../../tailwind.config";
import TextSelect from "../../../Components/TextSelect";
import CustomButton from "../../../Components/CustomButton";

const Notification = () => {
  const [menuView, setMenuView] = React.useState(false);
  return (
    <DrawerContainer title="Notification">
      <ScrollView style={tw`p-5 flex-1`}>
        <TextSelect
          title="Notification Menu"
          selectedValue="--Select Menu--"
          data={[
            { label: "All", value: "all" },
            { label: "Unread", value: "unread" },
            { label: "Read", value: "read" },
          ]}
          onValueChange={() => {}}
          selectState={menuView}
          setSelectState={() => setMenuView(!menuView)}
        />
        <View style={tw`mt-5`}>
          <CustomButton title="Mark all as read" onPress={() => {}} />
        </View>
      </ScrollView>
    </DrawerContainer>
  );
};

export default Notification;
