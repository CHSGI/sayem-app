import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import React from "react";
import tw from "../../../../tailwind.config";
import TextInputComp from "../../../../Components/TextInput";
import TextSelect from "../../../../Components/TextSelect";
import CustomButton from "../../../../Components/CustomButton";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import DrawerContainer from "../../../../Components/DrawerContainer";

const HeaderComponent = () => {
  const [view, setView] = React.useState(false);
  return (
    <View style={tw`mb-2`}>
      <TextInputComp
        placeholder={`🔍 Search by ID, route or driver....`}
        keyboard="default"
      />
      <TextSelect
        title="Status"
        placeholder="--Select Status--"
        data={[
          { label: "All Status", value: "All Status" },
          { label: "Completed", value: "Completed" },
          { label: "In Transit", value: "In Transit" },
          { label: "Delivered", value: "Delivered" },
          { label: "Cancelled", value: "Cancelled" },
        ]}
        selectedValue=""
        onValueChange={() => {}}
        selectState={view}
        setSelectState={() => {
          setView(!view);
        }}
      />
      <View style={tw`mt-5`}>
        <CustomButton title="Export" onPress={() => {}} />
      </View>
    </View>
  );
};

const ListComponent = (props: { bookingId: string; showModal: () => void }) => {
  return (
    <View
      style={tw`flex flex-row items-center gap-2 border-b border-b-gray-300`}
    >
      <Text style={tw`font-Medium text-xs w-32 text-center p-2 py-3`}>
        ETTO-2025-114
      </Text>
      <Text style={tw`font-Regular text-xs w-32 text-center p-2 py-3`}>
        Lagos &rarr; Ibadan
      </Text>
      <Text style={tw`font-Regular text-xs w-32 text-center p-2 py-3`}>
        Musa Ibrahim
      </Text>
      <Text style={tw`font-Regular text-xs w-32 text-center p-2 py-3`}>
        LAG 234 XY
      </Text>
      {/* status  */}
      <View
        style={tw`font-Regular text-xs w-32 text-center p-2 py-2 flex items-center justify-center`}
      >
        <Text style={tw`bg-gray-500/20 p-1 px-2 text-primary rounded-full`}>
          In Transit
        </Text>
      </View>
      <Text style={tw`font-Regular text-xs w-32 text-center p-2 py-3`}>
        &#8358;9000
      </Text>
      <Text style={tw`font-Regular text-xs w-32 text-center p-2 py-3`}>
        Nov 2, 2025
      </Text>
      <TouchableOpacity
        onPress={() => props.showModal()}
        style={tw` w-32 p-2 py-3 flex flex-row gap-2 items-center justify-center`}
      >
        <Ionicons name="eye" size={20} color={tw.color("primary")} />
        <Text style={tw`font-Medium text-xs text-center text-primary`}>
          View
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const BookingHistory = () => {
  const [viewModal, setViewModal] = React.useState(false);
  return (
    <DrawerContainer title="Booking History">
      <View style={tw`p-5 flex-1`}>
        <HeaderComponent />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={tw`p-2 px-0 border my-2 border-gray-500/50 rounded-xl`}
        >
          <FlatList
            data={[{}, {}]}
            ListHeaderComponent={() => (
              <View
                style={tw`flex flex-row items-center gap-2 border-b border-b-gray-300`}
              >
                <Text style={tw`font-SemiBold text-sm w-32 text-center p-2`}>
                  Booking ID
                </Text>
                <Text style={tw`font-SemiBold text-sm w-32 text-center p-2`}>
                  Route
                </Text>
                <Text style={tw`font-SemiBold text-sm w-32 text-center p-2`}>
                  Driver
                </Text>
                <Text style={tw`font-SemiBold text-sm w-32 text-center p-2`}>
                  Vehicle
                </Text>
                <Text style={tw`font-SemiBold text-sm w-32 text-center p-2`}>
                  Status
                </Text>
                <Text style={tw`font-SemiBold text-sm w-32 text-center p-2`}>
                  Amount
                </Text>
                <Text style={tw`font-SemiBold text-sm w-32 text-center p-2`}>
                  Date
                </Text>
                <Text style={tw`font-SemiBold text-sm w-32 text-center p-2`}>
                  Actions
                </Text>
              </View>
            )}
            renderItem={() => (
              <ListComponent
                bookingId=""
                showModal={() => {
                  setViewModal(true);
                }}
              />
            )}
          />
        </ScrollView>
        {/* Modal View Booking */}
        <Modal
          transparent={true}
          visible={viewModal}
          animationType="slide"
          onRequestClose={() => setViewModal(false)}
        >
          <View style={tw`flex-1 bg-white/50 flex items-center justify-center`}>
            {/* body  */}
            <View style={tw`w-9/10 h-auto rounded-xl bg-white p-5 shadow-md`}>
              <View style={tw`flex flex-row items-center justify-between`}>
                <Text style={tw`font-SemiBold text-base`}>
                  Booking Details - ETTO-2025-114
                </Text>
                <TouchableOpacity
                  style={tw`p-2`}
                  onPress={() => setViewModal(false)}
                >
                  <FontAwesome
                    name="times"
                    size={24}
                    color={tw.color("black")}
                  />
                </TouchableOpacity>
              </View>
              <Text style={tw`font-Regular text-sm`}>
                Complete information about this booking
              </Text>
              <View>
                {/* Booking ID and Status  */}
                <View
                  style={tw`my-4 flex flex-row items-center justify-between`}
                >
                  <View style={tw`gap-2 flex-1`}>
                    <Text style={tw`font-Medium text-sm `}>Booking ID</Text>
                    <Text style={tw`font-Regular text-sm`}>ETTO-2025-114</Text>
                  </View>
                  <View style={tw`gap-2 flex-1`}>
                    <Text style={tw`font-Medium text-sm `}>Status</Text>
                    <Text style={tw`font-Regular text-sm`}>In Transit</Text>
                  </View>
                </View>
                {/* Driver and Vehicle  */}
                <View
                  style={tw`my-4 flex flex-row items-center justify-between`}
                >
                  <View style={tw`gap-2 flex-1`}>
                    <Text style={tw`font-Medium text-sm `}>Driver</Text>
                    <Text style={tw`font-Regular text-sm`}>Musa Ibrahim</Text>
                  </View>
                  <View style={tw`gap-2 flex-1`}>
                    <Text style={tw`font-Medium text-sm `}>Vehicle</Text>
                    <Text style={tw`font-Regular text-sm`}>LAG 234 XY</Text>
                  </View>
                </View>
                {/* Amount and Date  */}
                <View
                  style={tw`my-4 flex flex-row items-center justify-between`}
                >
                  <View style={tw`gap-2 flex-1`}>
                    <Text style={tw`font-Medium text-sm `}>Amount</Text>
                    <Text style={tw`font-Regular text-sm`}>₦8,500</Text>
                  </View>
                  <View style={tw`gap-2 flex-1`}>
                    <Text style={tw`font-Medium text-sm `}>Date</Text>
                    <Text style={tw`font-Regular text-sm`}>Nov 2, 2025</Text>
                  </View>
                </View>
              </View>
              {/* drop off location  */}
              <View style={tw`gap-2`}>
                <Text style={tw`font-Medium text-sm `}>Drop-off Location</Text>
                <Text style={tw`font-Regular text-sm`}>
                  45 University Rd, Ibadan
                </Text>
              </View>
              {/* buttons  */}
              <View
                style={tw`flex flex-row items-center justify-between gap-5 mt-8`}
              >
                <View style={tw`flex-1`}>
                  <CustomButton title="Track Shipment" onPress={() => {}} />
                </View>
                <View style={tw`flex-1`}>
                  <CustomButton
                    title="Download Receipt"
                    display="bordered"
                    onPress={() => {}}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </DrawerContainer>
  );
};

export default BookingHistory;
