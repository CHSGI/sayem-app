import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import tw from "../../../tailwind.config";
import DrawerContainer from "../../../Components/DrawerContainer";
import CustomButton from "../../../Components/CustomButton";
import TextInputComp from "../../../Components/TextInput";
import ToggleContainer from "../../../Components/ToggleContainer";
import Driver from "../../../Components/KYC/Driver";
import User from "../../../Components/KYC/User";

const Profile = () => {
  const [password, setViewPasword] = React.useState(false);
  return (
    <DrawerContainer title="Profile Settings">
      <KeyboardAvoidingView
        behavior="padding"
        style={tw`flex-1 mb-5`}
        keyboardVerticalOffset={Platform.OS === "ios" ? 120 : 0}
      >
        <ScrollView style={tw`flex-1 p-5`} showsVerticalScrollIndicator={false}>
          {/* profile  */}
          <View style={tw`border border-gray-300 p-5 rounded-lg my-1`}>
            {/* profile image  */}
            <View style={tw`flex flex-row items-center gap-2`}>
              <View
                style={tw`w-32 h-32 rounded-full overflow-hidden bg-secondary flex items-center justify-center`}
              >
                <Text style={tw`text-center text-white font-SemiBold text-4xl`}>
                  DJ
                </Text>
              </View>
              <View style={tw`w-32`}>
                <CustomButton
                  title="change Photo"
                  display="bordered"
                  onPress={() => {}}
                />
              </View>
            </View>
            {/* profile details  */}
            <View style={tw`my-4`}>
              <TextInputComp
                title="Full Name"
                placeholder="Enter Full Name"
                keyboard="default"
              />
              <TextInputComp
                title="Email Address"
                placeholder="Enter Email Address"
                keyboard="email-address"
              />
              <TextInputComp
                title="Phone Number"
                placeholder="Enter Phone number here"
                keyboard="phone-pad"
              />
              <TextInputComp
                title="Address"
                placeholder="Enter your address here"
                keyboard="default"
              />
            </View>
            <CustomButton title="Update Profile" disabled onPress={() => {}} />
          </View>
          {/* security settings  */}
          <View style={tw`border border-gray-300 p-5 rounded-lg my-1`}>
            <Text style={tw`font-Medium text-base `}>Security Settings</Text>
            <View style={tw`flex-row items-center gap-2`}></View>
            <TextInputComp
              title="Password"
              placeholder="Enter Password here"
              keyboard="default"
              secureTextEntry={password}
              password
              viewPassword={password}
              setViewPassword={() => setViewPasword(!password)}
            />
            <View style={tw`mt-5`}>
              <CustomButton
                title="Update Password"
                disabled
                onPress={() => {}}
              />
            </View>
          </View>
          {/* preferences  */}
          <View style={tw`border border-gray-300 p-5 rounded-lg my-1`}>
            <Text style={tw`font-Medium text-base my-3`}>
              Notification Preferences
            </Text>
            <View style={tw`my-3`}>
              <ToggleContainer
                title="Push Notifications"
                sub="Receive notifications on your device"
                value={false}
                onChange={() => {}}
              />
              <ToggleContainer
                title="Email Notifications"
                sub="Receive updates via email"
                value={false}
                onChange={() => {}}
              />
              <ToggleContainer
                title="SMS Notifications"
                sub="Receive alerts via SMS"
                value={false}
                onChange={() => {}}
              />
              <ToggleContainer
                title="Marketing Updates"
                sub="Receive promotional offers and news"
                value={false}
                onChange={() => {}}
              />
            </View>
          </View>
          {/* kyc verification  */}
          <View>
            {/* conditionally render based on user role  */}
            {true ? <User /> : <Driver />}
          </View>
          {/* danger zone  */}
          <View style={tw`border border-red-500 bg-red-50 p-5 rounded-lg my-3`}>
            <Text style={tw`font-Medium text-base my-2`}>Danger Zone</Text>
            <Text style={tw`font-Regular text-sm`}>Irreversible actions</Text>
            {/* inner box  */}
            <View style={tw`my-3 p-3 border border-red-300 rounded-lg`}>
              <Text style={tw`font-Medium text-base my-2`}>Delete Account</Text>
              <Text style={tw`font-Regular text-sm mb-5`}>
                All data will be lost
              </Text>
              <CustomButton title="Delete Account" onPress={() => {}} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </DrawerContainer>
  );
};

export default Profile;
