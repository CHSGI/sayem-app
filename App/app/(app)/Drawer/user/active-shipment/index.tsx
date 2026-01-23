import {
  View,
  Text,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import DrawerContainer from "../../../../../Components/DrawerContainer";
import tw from "../../../../../tailwind.config";
import TextInputComp from "../../../../../Components/TextInput";
import CustomButton from "../../../../../Components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const HeaderComponent = () => {
  const [search, setSearch] = React.useState("");
  return (
    <View style={tw``}>
      <View>
        <Text style={tw`font-Medium text-lg text-primary`}>
          Track Your Shipment{" "}
        </Text>
        <Text style={tw`font-Regular text-sm text-gray-500`}>
          Enter your tracking ID to see real-time updates{" "}
        </Text>
      </View>
      {/* tracking search view  */}
      <View style={tw`my-3 rounded-xl p-4 bg-white shadow-lg`}>
        <Text style={tw`font-medium text-sm`}>Enter Tracking ID</Text>
        <Text style={tw`font-Regular text-xs text-gray-500`}>
          You can find your tracking ID in the booking confirmation
        </Text>
        <View style={tw`gap-2`}>
          <TextInputComp
            title=""
            placeholder="e.g. ETTO-2025-114"
            keyboard="default"
            onChangeText={(value) => setSearch(value)}
          />
          <CustomButton
            title="Track Shipment"
            disabled={search.length === 0}
            onPress={() => {}}
          />
        </View>
      </View>
      <Text style={tw`font-Medium text-lg`}>Active Shipment</Text>
    </View>
  );
};

const ListComponent = () => {
  return (
    <View style={tw`my-5 bg-white p-5 rounded-lg border border-gray-200`}>
      <View style={tw`flex flex-row items-center justify-between mb-3`}>
        <View style={tw`flx flex-row items-center gap-03`}>
          <Text style={tw`font-Medium text-sm`}>ETTO-2025-114</Text>
          <Text
            style={tw`font-Medium text-xs text-primary bg-primary/10 p-2 rounded-lg`}
          >
            In Transit
          </Text>
        </View>
        {/* price  */}
        <Text style={tw`font-Medium text-sm`}>$120</Text>
      </View>

      {/* pickup and dropoff  */}
      <View>
        {/* pickup  */}
        <View style={tw`flex flex-row items-center gap-2`}>
          <Ionicons
            name="location-outline"
            size={25}
            color={tw.color("green-500")}
          />
          <View style={tw`my-2 gap-1`}>
            <Text style={tw`text-sm font-Regular text-gray-600`}>Pickup</Text>
            <Text style={tw`font-Medium text-sm`}>12 Adeola St, Lagos</Text>
          </View>
        </View>
        {/* drop off  */}
        <View style={tw`flex flex-row items-center gap-2`}>
          <Ionicons
            name="location-outline"
            size={25}
            color={tw.color("red-500")}
          />
          <View style={tw`my-2 gap-1`}>
            <Text style={tw`text-sm font-Regular text-gray-600`}>Drop-Off</Text>
            <Text style={tw`font-Medium text-sm`}>
              45 University Rd, Ibadan
            </Text>
          </View>
        </View>
      </View>
      {/* divider  */}
      <View style={tw`border-b border-b-neutral-300 my-2`}></View>
      {/* Driver details  */}
      <View style={tw`flex flex-row items-center gap-10 my-2`}>
        <View style={tw`gap-2 my-2`}>
          <View style={tw`flex flex-row items-center gap-2`}>
            <Text style={tw`text-lg font-Medium text-gray-600`}>
              Ibrahim Musa
            </Text>
            <Text style={tw`font-Regular text-sm`}>⭐ {"4.8"}</Text>
          </View>
          <Text style={tw`text-sm font-Regular text-gray-600`}>
            Toyota Camry &bull; LAG-234-XY
          </Text>
        </View>
      </View>

      <CustomButton
        title="Track Shipment"
        onPress={() => {
          router.push("/Drawer/user/active-shipment/live-preview");
        }}
      />
    </View>
  );
};

const ActiveShipment = () => {
  return (
    <DrawerContainer title="Active Shipment">
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <FlatList
          data={[{}]}
          renderItem={() => <ListComponent />}
          ListHeaderComponent={<HeaderComponent />}
          showsVerticalScrollIndicator={false}
          style={tw`p-5`}
        />
      </KeyboardAvoidingView>
    </DrawerContainer>
  );
};

export default ActiveShipment;
