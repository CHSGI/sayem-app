import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import DrawerContainer from "../../../../../Components/DrawerContainer";
import tw from "../../../../../tailwind.config";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import CustomButton from "../../../../../Components/CustomButton";
import { router } from "expo-router";

const MyJobs = () => {
  // shipping type
  const jobTypeList = ["Completed", "Cancelled"];
  const [jobType, setJobType] = React.useState<{
    index: number;
    value: "Completed" | "Cancelled";
  }>({
    index: 0,
    value: "Completed",
  });
  return (
    <DrawerContainer title="My Jobs">
      <FlatList
        data={[{}]}
        style={tw`p-5`}
        ListHeaderComponent={
          <View
            style={tw`bg-secondary flex flex-row items-center justify-between rounded-xl p-2`}
          >
            {jobTypeList.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  setJobType({
                    ...jobType,
                    index,
                    value: item.toLowerCase() as "Completed" | "Cancelled",
                  })
                }
                style={tw`p-3 rounded-lg flex-1 flex-row gap-2 items-center justify-center ${
                  jobType.index === index ? "bg-primary" : ""
                }`}
              >
                <FontAwesome6
                  name={
                    item === "Completed" ? "check-square" : "times-rectangle"
                  }
                  size={18}
                  color="white"
                />
                <Text style={tw`text-center text-white font-Medium text-base`}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        }
        renderItem={({ item }) => (
          <View style={tw`my-3 bg-white p-5 rounded-lg border border-gray-200`}>
            <View style={tw`flex flex-row items-center justify-between`}>
              <View style={tw`my-2 gap-1`}>
                <Text style={tw`text-sm font-Regular text-gray-600`}>
                  Booking ID
                </Text>
                <Text style={tw`font-Medium text-sm`}>ETTO-2025-114</Text>
              </View>
              <Text
                style={tw`font-Medium text-xs text-primary bg-primary/10 p-2 rounded-lg`}
              >
                In Transit
              </Text>
            </View>

            <View style={tw`my-2 gap-1`}>
              <Text style={tw`text-sm font-Regular text-gray-600`}>
                Customer
              </Text>
              <Text style={tw`font-Medium text-sm`}>ABC Trading Company</Text>
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
                  <Text style={tw`text-sm font-Regular text-gray-600`}>
                    Pickup
                  </Text>
                  <Text style={tw`font-Medium text-sm`}>
                    12 Adeola St, Lagos
                  </Text>
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
                  <Text style={tw`text-sm font-Regular text-gray-600`}>
                    Drop-Off
                  </Text>
                  <Text style={tw`font-Medium text-sm`}>
                    45 University Rd, Ibadan
                  </Text>
                </View>
              </View>
            </View>
            {/* distance and payment  */}
            <View style={tw`flex flex-row items-center gap-10 my-2`}>
              {/* distance */}
              <View style={tw`gap-2`}>
                <Text style={tw`text-sm font-Regular text-gray-600`}>
                  Distance
                </Text>
                <Text style={tw`font-Medium text-sm`}>456 km</Text>
              </View>

              {/* payment  */}
              <View style={tw`gap-2`}>
                <Text style={tw`text-sm font-Regular text-gray-600`}>
                  Payment
                </Text>
                <Text style={tw`font-Medium text-sm`}>$120</Text>
              </View>
            </View>
            {/* tags */}
            <View
              style={tw`flex flex-row items-start gap-2 my-2 mb-4 border border-yellow-300 bg-yellow-50 p-2 rounded-lg`}
            >
              <Ionicons
                name="information-circle-outline"
                size={24}
                color={tw.color("yellow-600")}
              />
              <View style={tw`gap-2`}>
                <Text style={tw`font-Regular text-xs text-gray-600`}>
                  Special Instruction
                </Text>
                <Text style={tw`font-Regular text-xs`}>
                  Fragile items - Handle with care
                </Text>
              </View>
            </View>
            <CustomButton
              title="View Details"
              onPress={() => {
                router.push("/Drawer/driver/my-jobs/job-details");
              }}
            />
          </View>
        )}
      />
    </DrawerContainer>
  );
};

export default MyJobs;
