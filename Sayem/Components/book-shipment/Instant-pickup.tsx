import { View, Text } from "react-native";
import React from "react";
import tw from "../../tailwind.config";
import { Checkbox } from "expo-checkbox";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import DetailsView from "../DetailsView";
import TextSelect from "../TextSelect";
import TextInputComp from "../TextInput";
import ImageSelect from "../ImageSelect";
import CustomButton from "../CustomButton";
import { router } from "expo-router";
import { loadType, vehicleType } from "../../lib/data";

const InstantPickup = () => {
  const [view, setView] = React.useState({
    loadTypeView: false,
    vehicleTypeView: false,
  });
  return (
    <View>
      <Text style={tw`font-Medium text-sm`}>Booking Details</Text>
      <Text style={tw`font-Regular text-xs text-gray-500`}>
        Enter your pickup and delivery information
      </Text>
      {/* pickup details  */}
      <View>
        <View style={tw`flex flex-row items-center gap-2 my-3`}>
          <Ionicons
            name="location-outline"
            size={24}
            color={tw.color("green-600")}
          />
          <Text style={tw`font-Medium text-sm`}>Pickup Details</Text>
        </View>
        <DetailsView
          title="Pickup Address"
          body="4b, Kemi Avenue,Iliako, Ogun State"
        />
        <TextInputComp
          title="Phone Number"
          keyboard="number-pad"
          placeholder="Enter Phone Number"
        />
      </View>
      {/* delivery detials  */}
      <View>
        <View style={tw`flex flex-row items-center gap-2 my-3`}>
          <Ionicons
            name="location-outline"
            size={24}
            color={tw.color("red-600")}
          />
          <Text style={tw`font-Medium text-sm`}>Delivery Details</Text>
        </View>
        <DetailsView
          title="Pickup Address"
          body="10a, williams street, igandi,Lagos State"
        />
        <TextInputComp
          title="Contact Person"
          keyboard="default"
          placeholder="Enter Contact Person"
        />
        <TextInputComp
          title="Phone Number"
          keyboard="number-pad"
          placeholder="Enter Phone Number"
        />
      </View>
      {/* Load Info  */}
      <View>
        <View style={tw`flex flex-row items-center gap-2 my-3`}>
          <AntDesign
            name="code-sandbox"
            size={24}
            color={tw.color("orange-400")}
          />
          <Text style={tw`font-Medium text-sm`}>Load Information</Text>
        </View>
        <TextSelect
          title="Load Type"
          placeholder="--Select Load type--"
          data={loadType}
          selectedValue=""
          selectState={view.loadTypeView}
          setSelectState={() =>
            setView({ ...view, loadTypeView: !view.loadTypeView })
          }
          onValueChange={() => {}}
        />
        <TextSelect
          title="Vehicle Type"
          placeholder="--Select Vehicle type--"
          data={vehicleType}
          selectedValue=""
          selectState={view.vehicleTypeView}
          setSelectState={() =>
            setView({ ...view, vehicleTypeView: !view.vehicleTypeView })
          }
          onValueChange={() => {}}
        />
        <TextInputComp
          title="Special Instructions/Handling"
          keyboard="default"
          placeholder="Enter Special Instructions/Handling"
        />
      </View>
      {/* images uploads */}
      <View>
        <ImageSelect
          title="Upload Treminal Delivery Order(TDO)"
          setImage={() => {}}
        />
        <ImageSelect
          title="Upload Authority to Load (ATL)"
          setImage={() => {}}
        />
      </View>
      {/* others  */}
      <View style={tw`my-5`}>
        <Text style={tw`font-Medium text-sm`}>Additional Options</Text>
        <View style={tw`my-2 gap-2`}>
          <View style={tw`flex flex-row items-center gap-2`}>
            <Checkbox color={tw.color("primary")} value={false} />
            <Text>Add Return Trip</Text>
          </View>
          <View style={tw`flex flex-row items-center gap-2`}>
            <Checkbox color={tw.color("primary")} value={false} />
            <Text>Add Insurance</Text>
          </View>
          <View style={tw`flex flex-row items-center gap-2`}>
            <Checkbox color={tw.color("primary")} value={false} />
            <Text>Require Packaging Assistance</Text>
          </View>
        </View>
      </View>
      <View>
        <CustomButton
          title="Book Shipment"
          onPress={() => {
            router.push("/Drawer/user/book-shipment/confirm-booking");
          }}
        />
      </View>
    </View>
  );
};

export default InstantPickup;
