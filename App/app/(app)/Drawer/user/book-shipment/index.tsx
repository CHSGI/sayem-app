import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import DrawerContainer from "../../../../../Components/DrawerContainer";
import tw from "../../../../../tailwind.config";
import InstantPickup from "../../../../../Components/book-shipment/Instant-pickup";
import ScheduledDispatch from "../../../../../Components/book-shipment/Scheduled-dispatch";

const BookShipment = () => {
  const views = ["Instant Pickup (Callup)", "Scheduled Dispatch (ETTO)"];
  const [selected, setSelected] = React.useState(0);
  return (
    <DrawerContainer title="Book Shipment">
      <KeyboardAvoidingView
        style={tw`flex-1`}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={tw`p-5`}>
            <Text style={tw`font-Medium text-lg mt-2 text-primary`}>
              Book Pickup
            </Text>
            <Text style={tw`font-Regular text-sm text-gray-600 `}>
              Fill in your Pickup information
            </Text>
          </View>
          <View
            style={tw`my-2 flex flex-row items-center gap-2 w-11/12 mx-auto`}
          >
            {views.map((item, index) => (
              <TouchableOpacity
                onPress={() => setSelected(index)}
                key={index}
                style={tw`  rounded-lg border border-gray-200 gap-3 p-3 flex-1 ${
                  index === selected ? "bg-primary" : "bg-white"
                }`}
              >
                <Text
                  style={tw`font-Regular text-xs text-center ${
                    index === selected ? "text-white" : "text-gray-600"
                  } `}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* body  */}
          <View style={tw`p-5`}>
            {selected === 0 ? <InstantPickup /> : <ScheduledDispatch />}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </DrawerContainer>
  );
};

export default BookShipment;
