import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import tw from "../../tailwind.config";
import { Image, ImageBackground } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import TextInput from "../../Components/TextInput";
import TextSelect from "../../Components/TextSelect";
import CustomButton from "../../Components/CustomButton";
import { router } from "expo-router";

const Register = () => {
  const [viewPassword, setViewPassword] = React.useState(false);
  const [selectState, setSelectState] = React.useState(false);

  return (
    <View style={tw`flex-1 mt-12`}>
      <StatusBar style="dark" />
      <ImageBackground
        style={tw`flex-1`}
        source={require("../../assets/Images/mobile-pattern.png")}
        contentFit="cover"
      >
        <KeyboardAvoidingView
          style={tw`flex-1`}
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}
        >
          <ScrollView>
            <View>
              <Image
                source={require("../../assets/Images/sayem.png")}
                contentFit="cover"
                style={tw`w-1/2 h-10 mx-auto`}
              />
              <Text style={tw`font-Regular text-xs mt-2 text-center `}>
                Transport & Logistics Services Limited
              </Text>
            </View>
            {/* login body starts  */}
            <View style={tw`flex-1 justify-start pt-10`}>
              <View
                style={tw`w-11/12 mx-auto min-h-10 rounded-lg shadow-lg bg-white p-5`}
              >
                <Text
                  style={tw`font-Medium text-primary text-center text-lg mt-2`}
                >
                  Create your Account ! 👏
                </Text>
                <Text style={tw`font-Regular text-center text-xs mt-2`}>
                  Join SAYEM today
                </Text>
                <View style={tw`my-2`}>
                  <TextInput
                    title="Full Name/Business Name"
                    placeholder="Enter your name here ....."
                    keyboard="default"
                    onChangeText={(text) => {
                      // setloginDetails({ ...loginDetails, email: text });
                    }}
                  />
                  <TextInput
                    title="Email Address"
                    placeholder="Enter your email here ....."
                    keyboard="email-address"
                    onChangeText={(text) => {
                      // setloginDetails({ ...loginDetails, email: text });
                    }}
                  />
                  <TextInput
                    title="Phone Number"
                    placeholder="Enter your phone number here ....."
                    keyboard="number-pad"
                    onChangeText={(text) => {
                      // setloginDetails({ ...loginDetails, email: text });
                    }}
                  />
                  <TextSelect
                    title="Account Type"
                    placeholder="---Select Account Type---"
                    selectState={selectState}
                    setSelectState={() => setSelectState(!selectState)}
                    selectedValue={""}
                    data={[
                      {
                        label: "Individual/Business",
                        value: "Individual/Business",
                      },
                      { label: "Driver", value: "Driver" },
                    ]}
                    onValueChange={({ itemValue, itemIndex }) => {
                      // setloginDetails({ ...loginDetails, accountType: itemValue });
                    }}
                  />
                  <TextInput
                    title="Password"
                    placeholder="Enter your password"
                    keyboard={"default"}
                    password
                    secureTextEntry={viewPassword ? false : true}
                    viewPassword={viewPassword}
                    setViewPassword={() => setViewPassword(!viewPassword)}
                    onChangeText={(text) => {
                      // setloginDetails({ ...loginDetails, password: text });
                    }}
                  />
                  <TextInput
                    title="Confirm Password"
                    placeholder="Confirm your password"
                    keyboard={"default"}
                    password
                    secureTextEntry={viewPassword ? false : true}
                    viewPassword={viewPassword}
                    setViewPassword={() => setViewPassword(!viewPassword)}
                    onChangeText={(text) => {
                      // setloginDetails({ ...loginDetails, password: text });
                    }}
                  />
                </View>
                <View style={tw`min-h-32 flex justify-between`}>
                  <View style={tw`p-2 bg-primary/10 rounded-lg`}>
                    <Text style={tw`font-Medium text-sm text-primary`}>
                      By creating an account, you agree to our Terms of Service
                      and Privacy Policy.
                    </Text>
                  </View>
                  <CustomButton title="Sign up" onPress={() => {}} />
                </View>
              </View>
              <View style={tw`flex flex-row items-center`}>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/auth/login");
                  }}
                >
                  <Text style={tw`font-Medium text-sm my-2 ml-5 text-black`}>
                    Already have an account?
                    <Text style={tw`text-primary`}> Login</Text>
                  </Text>
                </TouchableOpacity>
                <View style={tw`flex-1`}></View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
      {/* <Text>Register</Text> */}
    </View>
  );
};

export default Register;
