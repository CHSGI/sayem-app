import { View, Text, TouchableOpacity } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import tw from "../tailwind.config";
import {
  FontAwesome6,
  Fontisto,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import Animated, {
  SlideInRight,
  SlideOutRight,
  Easing,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

interface drawerProps {
  title: string;
  children: React.ReactNode;
}

const DrawerContainer = (props: drawerProps) => {
  // navigation instance
  const navigation = useNavigation();

  // states
  const [viewSB, setSeeSB] = React.useState(false);
  return (
    <View style={tw`flex-1 bg-secondary`}>
      <StatusBar style="light" />
      {/* header  */}
      <View style={tw`bg-secondary h-16 mt-12 flex flex-row items-center px-4`}>
        <View style={tw`flex-1 flex-row items-center gap-5`}>
          {/* navigation bar  */}
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Ionicons name="menu" size={30} color="white" />
          </TouchableOpacity>

          {/* icon and text */}
          <View>
            <Text style={tw`font-Bold text-white text-lg`}>{props.title}</Text>
          </View>
        </View>
        {/* profile  */}
        <TouchableOpacity onPress={() => setSeeSB(!viewSB)}>
          <View
            style={tw`h-10 w-10 flex flex-row items-center justify-center border border-white rounded-full p-2 relative`}
          >
            <View
              style={tw`w-3 h-3 bg-red-600 rounded-full absolute -top-1 -right-1`}
            ></View>
            <Ionicons name="person" size={20} color="white" />
          </View>
        </TouchableOpacity>
        {/* profile drop down  */}
      </View>
      {/* body  */}
      <View style={tw`flex-1 bg-white`}>
        {viewSB && (
          <Animated.View
            entering={SlideInRight.duration(500).easing(
              Easing.in(Easing.inOut(Easing.ease))
            )}
            exiting={SlideOutRight.duration(500).easing(
              Easing.in(Easing.inOut(Easing.ease))
            )}
            style={
              viewSB
                ? tw`absolute -top-1 z-10 right-0 bg-white h-auto min-w-56 rounded-l-xl shadow-lg`
                : tw`absolute -top-1 z-10 right-40 bg-white h-auto min-w-56 rounded-l-xl shadow-lg`
            }
          >
            <View style={tw`p-3`}>
              <Text style={tw`font-SemiBold text-base`}>Alabi Solomon</Text>
              <Text style={tw`font-Regular text-sm`}>
                alabi.solomon@gmail.com
              </Text>
            </View>
            {/* routes  */}
            <View style={tw``}>
              <TouchableOpacity
                onPress={() => {
                  //function to execute

                  //close dropdown
                  setSeeSB(!viewSB);
                }}
                style={tw`p-4 border-t border-gray-200 flex flex-row items-center gap-2`}
              >
                <FontAwesome6
                  name="user-circle"
                  size={24}
                  color={tw.color("gray-600")}
                />
                <Text style={tw`font-Regular text-sm text-gray-600`}>
                  Profile Setting
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  //function to execute

                  //close dropdown
                  setSeeSB(!viewSB);
                }}
                style={tw`p-4 border-t border-gray-200 flex flex-row items-center gap-2`}
              >
                <Fontisto name="bell" size={24} color={tw.color("gray-600")} />
                <Text style={tw`font-Regular text-gray-600 text-sm`}>
                  Notifications
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  //function to execute

                  //close dropdown
                  setSeeSB(!viewSB);
                }}
                style={tw`p-4 border-t border-gray-200 flex flex-row items-center gap-2`}
              >
                <MaterialIcons
                  name="logout"
                  size={24}
                  color={tw.color("red-600")}
                />
                <Text style={tw`font-Regular text-red-600 text-sm`}>
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}
        <View style={tw`flex-1`} onTouchStart={() => setSeeSB(false)}>
          {props.children}
        </View>
      </View>
    </View>
  );
};

export default DrawerContainer;
