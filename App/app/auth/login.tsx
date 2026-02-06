import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import TextSelect from "../../Components/TextSelect";
import tw from "../../tailwind.config";
import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../Components/CustomButton";
import TextInputComp from "../../Components/TextInput";
import { router } from "expo-router";
import { showToastable } from "react-native-toastable";
import { accountState } from "../../store/stateStore";

const Login = () => {
  const [viewPassword, setViewPassword] = React.useState(false);
  const [selectState, setSelectState] = React.useState(false);
  const [loginDetails, setloginDetails] = React.useState({
    email: "",
    accountType: "",
    password: "",
  });
  const { setRole } = accountState();
  return (
    <SafeAreaView style={tw`flex-1 `}>
      <StatusBar style="dark" />
      <ImageBackground
        style={tw`flex-1`}
        source={require("../../assets/Images/mobile-pattern.png")}
        contentFit="cover"
      >
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
            <Text style={tw`font-Medium text-primary text-center text-lg mt-2`}>
              Welcome Back ! 👏
            </Text>
            <Text style={tw`font-Regular text-center text-xs mt-2`}>
              Enter your credentials to access the system
            </Text>
            <View style={tw`my-2`}>
              <TextInputComp
                title="Email Address"
                placeholder="Enter your email"
                keyboard="email-address"
                onChangeText={(text) => {
                  setloginDetails({ ...loginDetails, email: text });
                }}
              />
              <TextSelect
                title="Account Type"
                placeholder="---Select Account Type---"
                selectState={selectState}
                setSelectState={() => setSelectState(!selectState)}
                selectedValue={loginDetails.accountType}
                data={[
                  {
                    label: "Individual/Business",
                    value: "individual/business",
                  },
                  { label: "Driver", value: "driver" },
                ]}
                onValueChange={({ itemValue, itemIndex }) => {
                  setloginDetails({ ...loginDetails, accountType: itemValue });
                }}
              />
              <TextInputComp
                title="Password"
                placeholder="Enter your password"
                keyboard={"default"}
                password
                secureTextEntry={viewPassword ? false : true}
                viewPassword={viewPassword}
                setViewPassword={() => setViewPassword(!viewPassword)}
                onChangeText={(text) => {
                  setloginDetails({ ...loginDetails, password: text });
                }}
              />
            </View>
            <View style={tw`flex flex-row items-center`}>
              <View style={tw`flex-1`}></View>
              <TouchableOpacity>
                <Text style={tw`font-Regular text-xs text-primary`}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
            <View style={tw`min-h-32 flex justify-end`}>
              <CustomButton
                title="Sign In"
                onPress={() => {
                  if (!loginDetails.accountType) {
                    // show toastatble
                    showToastable({
                      status: "danger",
                      message: "choose account type",
                    });
                  } else {
                    //set satte
                    setRole(
                      loginDetails.accountType as
                        | "individual/business"
                        | "driver",
                    );
                    // route
                    router.replace("/(app)/Drawer");
                  }
                }}
              />
            </View>
          </View>
          <View style={tw`flex flex-row items-center`}>
            <TouchableOpacity
              onPress={() => {
                router.push("/auth/register");
              }}
            >
              <Text style={tw`font-Medium text-sm my-2 ml-5 text-black`}>
                Don't have an account?
                <Text style={tw`text-primary`}> Sign Up</Text>
              </Text>
            </TouchableOpacity>
            <View style={tw`flex-1`}></View>
          </View>
        </View>
      </ImageBackground>
      {/* <Text>Register</Text> */}
    </SafeAreaView>
  );
};

export default Login;
