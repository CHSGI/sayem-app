import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import StackContainer from "../../../../../Components/StackContainer";
import tw from "../../../../../tailwind.config";
import { router, useLocalSearchParams } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TextInputComp from "../../../../../Components/TextInput";
import { Checkbox } from "expo-checkbox";
import TextSelect from "../../../../../Components/TextSelect";
import { loadType, vehicleType } from "../../../../../lib/data";
import { airShippingSpeed, seaShippingSpeed } from "../../../../../lib/data";
import ImageSelect from "../../../../../Components/ImageSelect";
import CustomButton from "../../../../../Components/CustomButton";

const ShippingInfo = () => {
  const { mode } = useLocalSearchParams<{ mode: "AIR" | "SEA" }>();

  // formatting mode
  const capsFirstLetter = mode?.charAt(0).toUpperCase();
  const smallFirstLetter = mode?.charAt(0).toLowerCase();
  const restWord = mode.slice(1).toLowerCase();
  const capsFormattedMode = `${capsFirstLetter}${restWord}`;
  const smallFormattedMode = `${smallFirstLetter}${restWord}`;

  // shipping type
  const shippingTypeList = ["Import", "Export"];
  const [shippingType, setShippingtype] = React.useState<{
    index: number;
    value: "import" | "export";
  }>({
    index: 0,
    value: "import",
  });

  // views state
  const [views, setViews] = React.useState({
    freightType: false,
    dimensions: false,
    shippingSpeed: false,
  });

  return (
    <StackContainer
      title="Shipping Information"
      desc="Fill in your shipping details"
    >
      <KeyboardAvoidingView
        style={tw`flex-1`}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        <ScrollView style={tw`p-5 flex-1`}>
          {/* title  */}
          <View style={tw``}>
            <Text style={tw`font-Medium text-lg text-primary`}>
              {capsFormattedMode} Freight Details
            </Text>
            <Text style={tw`font-Regular text-sm`}>
              Fill in your shipment information
            </Text>
          </View>
          {/* body  */}
          <View style={tw`shadow-md rounded-xl bg-white p-5 my-5`}>
            {/* import or export selecteor */}
            <View
              style={tw`bg-secondary flex flex-row items-center justify-between rounded-xl p-2`}
            >
              {shippingTypeList.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    setShippingtype({
                      ...shippingType,
                      index,
                      value: item.toLowerCase() as "import" | "export",
                    })
                  }
                  style={tw`p-3 rounded-lg flex-1 flex-row gap-2 items-center justify-center ${
                    shippingType.index === index ? "bg-primary" : ""
                  }`}
                >
                  <MaterialCommunityIcons
                    name={shippingType.value === "import" ? "import" : "export"}
                    size={24}
                    color="white"
                  />
                  <Text
                    style={tw`text-center text-white font-Medium text-base`}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {/* shipping info  */}
            <View style={tw`my-5`}>
              <Text style={tw`font-Medium text-base`}>
                Shipment Information
              </Text>
              <View>
                <TextInputComp
                  title="Origin/Pickup Location"
                  placeholder="City, Port or airport"
                  keyboard="default"
                />
                <TextInputComp
                  title="Destination"
                  placeholder="City, Port or airport"
                  keyboard="default"
                />
                <TextSelect
                  title="Freight Type"
                  placeholder="--Select Freight type--"
                  data={loadType}
                  selectState={views.freightType}
                  selectedValue=""
                  onValueChange={() => {}}
                  setSelectState={() =>
                    setViews({ ...views, freightType: !views.freightType })
                  }
                />
                <TextInputComp
                  title="Package Description"
                  placeholder="Describe you item briefly"
                  keyboard="default"
                />

                <Text style={tw`font-Medium text-base my-3`}>
                  Cargo Details
                </Text>
                <TextSelect
                  title="Dimensions"
                  placeholder="Select feet type"
                  data={vehicleType}
                  selectState={views.dimensions}
                  selectedValue=""
                  onValueChange={() => {}}
                  setSelectState={() =>
                    setViews({ ...views, dimensions: !views.dimensions })
                  }
                />
                <TextInputComp
                  title="Cargo Value"
                  placeholder=" ₦0"
                  keyboard="number-pad"
                />
                <Text style={tw`font-Regular text-gray-400 text-xs`}>
                  For insurance and estimate accuracy
                </Text>
                <TextSelect
                  title="Preferred Shipping Speed"
                  placeholder="--Select preffered shipping speed--"
                  data={mode === "AIR" ? airShippingSpeed : seaShippingSpeed}
                  selectState={views.shippingSpeed}
                  selectedValue=""
                  onValueChange={() => {}}
                  setSelectState={() =>
                    setViews({ ...views, shippingSpeed: !views.shippingSpeed })
                  }
                />
                {/* additional Options  */}
                <View>
                  <Text style={tw`font-Medium text-base my-3`}>
                    Additional Options
                  </Text>
                  <View style={tw`my-2 gap-2`}>
                    <View style={tw`flex flex-row items-center gap-2`}>
                      <Checkbox color={tw.color("primary")} value={false} />
                      <Text>Add insurance coverage</Text>
                    </View>
                    <View style={tw`flex flex-row items-center gap-2`}>
                      <Checkbox color={tw.color("primary")} value={false} />
                      <Text>Require customs handling assistance</Text>
                    </View>
                  </View>
                </View>
                {/* image selketcion  */}
                <View>
                  <ImageSelect
                    title="Upload Invoice/ Item List (Optional)"
                    setImage={() => {}}
                  />
                </View>
                {/* buttons  */}
                <View style={tw`mt-5 gap-4`}>
                  <CustomButton
                    title="Clear Form"
                    onPress={() => {}}
                    display="bordered"
                  />
                  <CustomButton
                    title="Get Quote"
                    onPress={() => {
                      router.push({
                        pathname: "/Drawer/user/freight-quote/quote-summary",
                        params: { mode: mode },
                      });
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </StackContainer>
  );
};

export default ShippingInfo;
