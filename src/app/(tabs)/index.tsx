import { Image, View, Text, ScrollView, FlatList } from "react-native";
import Animated from "react-native-reanimated";
import profile1 from "../../../assets/data/profile1.json";
import news from "../../../assets/data/news.json";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// function QuickLinkIcon(name:  React.ComponentProps<typeof FontAwesome>["name"], title: string) {
//   return (
//     <View className=" items-center justify-center">
//       <FontAwesome name={name} size={24} color="#222525"/>
//       <Text>{title}</Text>
//     </View>
//   )
// }

export default function HomeScreen() {
  const currentProfile = profile1[0];

  return (
    <ScrollView className="bg-[#f8f5f2]" showsVerticalScrollIndicator={false}>
      <View className="p-2 justify-center items-center">
        <View className="flex-row p-4 w-full rounded-lg bg-[#fffffe] shadow shadow-black mb-3 border border-[#232323]">
          <Image
            className=" rounded-full aspect-square w-14 mr-4"
            source={require("../../../assets/images/profilephoto.jpg")}
          />
          <View>
            <Text className="text-[#232323] text-2xl">
              {currentProfile.name}
            </Text>
            <Text className="text-[#222525]">
              {currentProfile.course} - {currentProfile.branch} [{" "}
              {currentProfile.semester} Sem ] -{" "}
              {currentProfile.isRegistered ? (
                <Text className=" text-[#078080]">Registered</Text>
              ) : (
                <Text className=" text-red-600">Not Registered</Text>
              )}
            </Text>
          </View>
        </View>
        <View className="flex-row w-full">
          <View className="p-4 border border-[#232323] bg-[#fffffe] rounded-lg shadow shadow-black items-center mr-2">
            <AnimatedCircularProgress
              size={95}
              fill={currentProfile.attendance}
              width={7}
              tintColor={
                currentProfile.attendance >= 75 ? "#078080" : "#f45d48"
              }
              backgroundColor="#fffffe"
              rotation={0}
              lineCap="round"
              children={(fill) => <Text className="text-lg">{fill}%</Text>}
            />
            <Text className="mt-2 text-[#222525] text-base">Attendance</Text>
          </View>
          <View className="rounded-lg flex-1 p-2 bg-[#fffffe] border border-[#232323] shadow shadow-black">
            <View className="flex-1">
              <Text className="text-[#222525] text-xs">Upcoming Class</Text>
              <View className=" my-2">
                <Text className=" text-lg ">BCSC 1010 (Theory)</Text>
                <Text className="text-sm -mt-1 mb-2">Discrete Mathematic</Text>
                <View className="flex-row border rounded-lg justify-evenly divide-x">
                  <View className="">
                    <Text className="text-[#222525] text-xs text-center px-2">
                      Thu
                    </Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-[#222525] text-xs text-center px-1">
                      14:00-15:00
                    </Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-[#222525] text-xs text-center px-1">
                      AB-8 311
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View className="border-t pt-1 flex-row justify-between items-center">
              <Text className="text-[#078080]">View</Text>
              <FontAwesome name="arrow-right" size={18} color="#078080" />
            </View>
          </View>
        </View>
        <View className="w-full bg-[#fffffe] border border-[#232323] shadow shadow-black rounded-lg mt-3 p-1">
          <FlatList
            data={news}
            horizontal
            showsHorizontalScrollIndicator={false}
            // keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="flex-row items-center">
                <FontAwesome
                  name="circle"
                  size={10}
                  color="#FF934F"
                ></FontAwesome>
                <Text className="mx-2">{item.title}</Text>
              </View>
            )}
          />
        </View>
        <View className="w-full flex-row mt-3">
          <View className="mr-2 p-2 bg-[#fffffe] border border-[#232323] shadow shadow-black rounded-lg ">
            <View className="mb-2">
              <Text className="text-3xl text-[#232323]">3</Text>
              <Text className="text-[#222525] text-base">Assignments due</Text>
            </View>
            <View className="border-t pt-1 flex-row justify-between items-center">
              <Text className="text-[#078080]">View</Text>
              <FontAwesome name="arrow-right" size={18} color="#078080" />
            </View>
          </View>
          <View className="flex-1 p-2 bg-[#fffffe] border border-[#232323] shadow shadow-black rounded-lg ">
            <View className="mb-2">
              <Text className="text-3xl text-[#232323]">93.50%</Text>
              <Text className="text-[#222525] text-base">Percentage</Text>
            </View>
            <View className="border-t pt-1 flex-row justify-between items-center">
              <Text className="text-[#078080]">View</Text>
              <FontAwesome name="arrow-right" size={18} color="#078080" />
            </View>
          </View>
        </View>
        <View className="w-full mt-3 bg-[#fffffe] border border-[#232323] shadow shadow-black rounded-lg p-2">
          <View className="border-b pb-2">
            <Text className="text-lg font-base">Today's Timetable</Text>
          </View>
          <View className="py-4 w-full ">
            
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
