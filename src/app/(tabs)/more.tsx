import { StyleSheet, View, Text, ScrollView } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function MoreScreen() {
  return (
    <ScrollView className="bg-[#f8f5f2]" showsVerticalScrollIndicator={false}>
      <View className="flex-1 p-2 w-full">
      <View className=" items-center flex-row w-full my-4 ">
          <View className="w-10 ml-3">
            <FontAwesome name="address-book" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4">Attendance</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-10 ml-3">
            <FontAwesome name="hotel" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4">Hostel</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-10 ml-3">
            <FontAwesome name="graduation-cap" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4">Result</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-10 ml-3">
            <FontAwesome name="calendar" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4">TimeTable</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-10 ml-3">
            <FontAwesome name="money" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4">Fee Details</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-10 ml-3">
            <FontAwesome name="book" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4">Library</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-10 ml-3">
            <FontAwesome name="spoon" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4">Mess Menu</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-10 ml-3">
            <FontAwesome name="group" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4">Join Club</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-10 ml-3">
            <FontAwesome name="gift" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4">Events</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-10 ml-3">
            <FontAwesome name="road" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4">Outing Details</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-10 ml-3">
            <FontAwesome name="sign-out" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4">Log Out</Text>
        </View>
      </View>
    </ScrollView>
  );
}
