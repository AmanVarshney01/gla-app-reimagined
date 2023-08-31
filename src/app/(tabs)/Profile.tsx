import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import profile1 from "../../../assets/data/profile1.json";


function Card({ title, value}: { title: string, value: string | number}) {
  return (
    <View className=" px-4 py-2 items-center">
      <Text className=" text-text/80 text-sm mb-1">{title}</Text>
      <Text className=" text-lg">{value}</Text>
    </View>
  )
}

export default function ProfileScreen() {
  const currentProfile = profile1[0];
  return (
    <ScrollView className="bg-background">
      <View className="flex-1 p-2">
        <View className="w-full justify-center items-center p-4 bg-white mb-3 rounded-lg shadow shadow-stroke">
          <Image
            className=" w-32 h-32 rounded-full "
            source={require("../../../assets/images/profilephoto.jpg")}
          />
          <Text className=" text-text text-2xl mt-2">{currentProfile.name}</Text>
          <Text className="text-text">
            {currentProfile.course} - {currentProfile.branch} [{" "}
            {currentProfile.semester} Sem ]
          </Text>
        </View>
        <View className=" flex-row w-full rounded-lg shadow shadow-stroke bg-white">
          <View className="flex-1">
            <Card title={"Roll Number"} value={currentProfile.rollNumber} />
            <Card title={"Date Of Birth"} value={currentProfile.dateOfBirth} />
            {/* <Card title={"Email"} value={currentProfile.email} /> */}
          </View>
          <View className="flex-1">
            <Card title={"Blood Group"} value={currentProfile.bloodGroup} />
            <Card title={"Phone Number"} value={currentProfile.phoneNumber} />

          </View>
        </View>
      </View>
    </ScrollView>
  );
}
