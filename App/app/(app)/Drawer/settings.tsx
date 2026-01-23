import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import DrawerContainer from "../../../Components/DrawerContainer";
import tw from "../../../tailwind.config";
import ToggleContainer from "../../../Components/ToggleContainer";
import { Ionicons } from "@expo/vector-icons";

const Settings = () => {
  return (
    <DrawerContainer title="Settings Menu">
      <View style={tw`p-5 flex-1`}>
        <Text style={tw`font-Medium text-sm`}>Settings</Text>
        <Text style={tw`font-Regular text-xs text-gray-600 mt-1`}>
          Manage your account preferences
        </Text>
        {/* body  */}
        <View style={tw`mt-5 rounded-lg bg-white border border-gray-200 p-5`}>
          <ToggleContainer
            title="Delivery Status Alerts"
            sub="Get notified about your delivery updates"
            value={false}
            onChange={() => {}}
          />
          <ToggleContainer
            title="Promotional Notifications"
            sub="Receive discounts and special offers"
            value={false}
            onChange={() => {}}
          />
          <ToggleContainer
            title="Email Receipts"
            sub="Automatically send receipts to your email"
            value={false}
            onChange={() => {}}
          />
        </View>
      </View>
    </DrawerContainer>
  );
};

export default Settings;
