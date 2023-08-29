import { StyleSheet, View, Text, ScrollView } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function MoreScreen() {
  return (
    <ScrollView className=" bg-background" showsVerticalScrollIndicator={false}>
      <View className="flex-1 p-2 w-full">
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            <FontAwesome name="address-book" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4 text-heading">Attendance</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            <FontAwesome name="hotel" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4 text-heading">Hostel</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            <FontAwesome name="graduation-cap" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4 text-heading">Result</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            <FontAwesome name="calendar" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4 text-heading">TimeTable</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            <FontAwesome name="money" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4 text-heading">Fee Details</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            <FontAwesome name="book" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4 text-heading">Library</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            <FontAwesome name="spoon" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4 text-heading">Mess Menu</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            <FontAwesome name="group" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4 text-heading">Join Club</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            <FontAwesome name="gift" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4 text-heading">Events</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            <FontAwesome name="road" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4 text-heading">Leave/Outing Details</Text>
        </View>
        <View className="w-full border-b border-b-stroke/10"></View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            <FontAwesome name="gear" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4 text-heading">Settings</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            <FontAwesome name="sign-out" size={26} color="#222525" />
          </View>
          <Text className=" text-lg ml-4 text-heading">Log Out</Text>
        </View>
      </View>
    </ScrollView>
  );
}
