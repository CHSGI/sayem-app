import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import DrawerContainer from "../../../../Components/DrawerContainer";
import { ScrollView } from "react-native";
import tw from "../../../../tailwind.config";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import CustomButton from "../../../../Components/CustomButton";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};
const ListComponent = (props: { bookingId: string }) => {
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
        132 km
      </Text>
      <Text style={tw`font-Regular text-xs w-32 text-center p-2 py-3`}>
        ₦18,000
      </Text>
      {/* status  */}
      <View
        style={tw`font-Regular text-xs w-32 text-center p-2 py-2 flex items-center justify-center`}
      >
        <Text style={tw`bg-gray-500/20 p-1 px-2 text-primary rounded-full`}>
          In Transit
        </Text>
      </View>
    </View>
  );
};

const Earnings = () => {
  const displayData = [
    {
      title: "Total Earnings",
      value: "₦16,000",
      icon: (
        <Feather name="dollar-sign" size={30} color={tw.color("primary")} />
      ),
      misc: "",
    },
    {
      title: "This Week",
      value: "₦117,000",
      icon: <Entypo name="line-graph" size={30} color={tw.color("primary")} />,
      misc: "46 jobs completed",
    },
    {
      title: "This Month",
      value: "₦442,000",
      icon: (
        <Ionicons name="time-outline" size={30} color={tw.color("primary")} />
      ),
      misc: "46 jobs completed",
    },
  ];
  return (
    <DrawerContainer title="Earnings">
      <ScrollView
        style={tw`flex-1 p-5 mb-5`}
        showsVerticalScrollIndicator={false}
      >
        {/* heading  */}
        <View>
          <Text style={tw`font-Medium text-lg text-primary`}>Earnings</Text>
          <Text style={tw`font-Regular text-xs`}>
            Track your income and payouts
          </Text>
        </View>
        {/* display  */}
        <View style={tw`my-5 gap-3`}>
          {displayData.map((item, index) => (
            <View key={index} style={tw`border border-gray-200 p-4 rounded-xl`}>
              <View style={tw`flex flex-row items-center justify-between`}>
                <Text style={tw`font-Medium text-base`}>{item.title}</Text>
                <Text style={tw``}>{item.icon}</Text>
              </View>
              <View style={tw`mt-3 gap-5`}>
                <Text style={tw`font-SemiBold text-lg`}>{item.value}</Text>
                <Text style={tw`font-Medium text-xs text-green-600`}>
                  {item.misc}
                </Text>
              </View>
            </View>
          ))}
        </View>
        {/* earnings and job count  */}
        <View style={tw`my-5`}>
          <Text style={tw`font-Medium text-lg`}>Daily Earning & Job Count</Text>
          <Text style={tw`font-Regular text-sm text-gray-400`}>
            Your performance this week
          </Text>
          {/* chart goes here  */}
          <View style={tw`my-5`}>
            {/* chart starts  */}
            <BarChart
              style={tw`w-full h-22`}
              data={data}
              width={screenWidth}
              height={220}
              yAxisLabel="$"
              chartConfig={chartConfig}
              verticalLabelRotation={30}
            />
            {/* chart ends  */}
          </View>
        </View>
        {/* weekly breakdown  */}
        <View style={tw`p-4 border border-gray-200 rounded-xl bg-white`}>
          <View>
            <Text style={tw`font-Medium text-lg`}>Weekly Breakdown</Text>
            <Text style={tw`font-Regular text-sm text-gray-400`}>
              Detailed earning for this week
            </Text>
          </View>
          {/* earnings specifics  */}
          <View style={tw`my-3 gap-2`}>
            {/* gross earning  */}
            <View style={tw`flex flex-row items-center justify-between`}>
              <Text style={tw`font-Regular text-sm`}>Gross Earning</Text>
              <Text style={tw`font-Regular text-sm`}>₦117,000</Text>
            </View>
            {/* platform fee  */}
            <View style={tw`flex flex-row items-center justify-between`}>
              <Text style={tw`font-Regular text-sm`}>Platform Fee</Text>
              <Text style={tw`font-Regular text-sm text-red-600`}>
                -₦11,700
              </Text>
            </View>
            {/* Tips  */}
            <View style={tw`flex flex-row items-center justify-between`}>
              <Text style={tw`font-Regular text-sm`}>Tips</Text>
              <Text style={tw`font-Regular text-sm text-green-600`}>
                +₦2,500
              </Text>
            </View>
            {/* divider  */}
            <View style={tw`my-2 border-b border-b-gray-300`}></View>
            {/* Net Earning  */}
            <View style={tw`flex flex-row items-center justify-between`}>
              <Text style={tw`font-Regular text-base`}>Net Earning</Text>
              <Text style={tw`font-Regular text-sm`}>₦107,800</Text>
            </View>
          </View>
          <View style={tw`bg-gray-200 rounded-xl p-4 gap-4`}>
            <Text style={tw`font-Regular text-sm text-gray-600`}>
              Payout Schedule
            </Text>
            <Text style={tw`font-Medium text-sm`}>
              Next payout on Friday, Nov 8
            </Text>
            <Text style={tw`font-SemiBold text-lg`}>₦107,800</Text>
            <CustomButton title="View Payout Details" onPress={() => {}} />
          </View>
        </View>
        {/* payout History  */}
        <View>
          <View style={tw`my-5`}>
            <Text style={tw`font-Medium text-lg`}>Payout History</Text>
            <View>
              <FlatList
                data={[{}, {}]}
                ListHeaderComponent={() => (
                  <View
                    style={tw`flex flex-row items-center border-b border-b-gray-300`}
                  >
                    <Text
                      style={tw`font-SemiBold text-sm w-1/4 text-center p-2`}
                    >
                      Date
                    </Text>
                    <Text
                      style={tw`font-SemiBold text-sm w-1/4 text-center p-2`}
                    >
                      Amount
                    </Text>
                    <Text
                      style={tw`font-SemiBold text-sm w-1/4 text-center p-2`}
                    >
                      Jobs
                    </Text>
                    <Text
                      style={tw`font-SemiBold text-sm w-1/4 text-center p-2`}
                    >
                      Status
                    </Text>
                  </View>
                )}
                renderItem={() => (
                  <View
                    style={tw`flex flex-row items-center border-b border-b-gray-300`}
                  >
                    <Text
                      style={tw`font-SemiBold text-xs w-1/4 text-center p-2`}
                    >
                      Nov 1, 2025
                    </Text>
                    <Text
                      style={tw`font-Regular text-sm w-1/4 text-center p-2`}
                    >
                      ₦85,000
                    </Text>
                    <Text
                      style={tw`font-Regular text-sm w-1/4 text-center p-2`}
                    >
                      28 jobs
                    </Text>
                    <View style={tw`w-1/4 p-2 flex-row justify-center`}>
                      <Text
                        style={tw`font-Regular text-sm text-center p-1 px-2 bg-green-100 text-green-600 rounded-full`}
                      >
                        Paid
                      </Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
        {/* Recent Trips  */}
        <View style={tw`my-5`}>
          <Text style={tw`font-Medium text-lg`}>Recent Trips</Text>
          {/* flat list goes here  */}
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
                    Trip ID
                  </Text>
                  <Text style={tw`font-SemiBold text-sm w-32 text-center p-2`}>
                    Route
                  </Text>
                  <Text style={tw`font-SemiBold text-sm w-32 text-center p-2`}>
                    Distance
                  </Text>
                  <Text style={tw`font-SemiBold text-sm w-32 text-center p-2`}>
                    Amount
                  </Text>
                  <Text style={tw`font-SemiBold text-sm w-32 text-center p-2`}>
                    Status
                  </Text>
                </View>
              )}
              renderItem={() => <ListComponent bookingId="" />}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </DrawerContainer>
  );
};

export default Earnings;
