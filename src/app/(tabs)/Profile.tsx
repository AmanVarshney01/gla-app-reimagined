import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import profile1 from "../../../assets/data/profile1.json";

function Card({ title, value }: { title: string; value: string | number }) {
  return (
    <View className=" px-4 py-2 items-center">
      <Text className=" text-text/80 text-sm mb-1">{title}</Text>
      <Text className=" text-lg">{value}</Text>
    </View>
  );
}
function Card2({ title, value }: { title: string; value: string | number }) {
  return (
    <View className=" px-4 py-2 flex-1">
      <Text className=" text-text/80 text-sm mb-1">{title}</Text>
      <Text className=" text-base text-text">{value}</Text>
    </View>
  );
}

export default function ProfileScreen() {
  const currentProfile = profile1[0];
  return (
    <ScrollView className="bg-background" showsVerticalScrollIndicator={false}>
      <View className="flex-1 p-2">
        <View className="w-full justify-center items-center p-4 bg-white rounded-lg shadow shadow-stroke mb-2">
          <Image
            className=" w-32 h-32 rounded-full"
            source={require("../../../assets/images/profilephoto.jpg")}
          />
          <Text className=" text-text text-2xl mt-2">
            {currentProfile.name}
          </Text>
          <Text className="text-text">
            {currentProfile.course} - {currentProfile.branch} [{" "}
            {currentProfile.semester} Sem ]
          </Text>
        </View>
        <View className=" flex-row w-full rounded-lg shadow shadow-stroke bg-white mb-2">
          <View className="flex-1">
            <Card title={"Roll Number"} value={currentProfile.rollNumber} />
            <Card title={"Date Of Birth"} value={currentProfile.dateOfBirth} />
          </View>
          <View className="flex-1">
            <Card title={"Blood Group"} value={currentProfile.bloodGroup} />
            <Card title={"Phone Number"} value={currentProfile.phoneNumber} />
          </View>
        </View>
        <View className="bg-white shadow shadow-stroke rounded-lg">
        <Card2 title={"Email"} value={currentProfile.email} />
        <Card2
          title={"Hostel"}
          value={
            currentProfile.hostelName +
            " " +
            "(" +
            currentProfile.hostelRoomNo +
            ")"
          }
        />
        <Card2 title={"Address"} value={currentProfile.address} />
        </View>
        <View className=" bg-white shadow shadow-stroke rounded-lg mt-2">
        <View className=" flex-row justify-center">
          <View className=" px-4 py-2 items-center">
            <Text className=" text-text/80 text-sm mb-1">Father's Name</Text>
            <Text className=" text-base">{currentProfile.fatherName}</Text>
          </View>
          <View className=" px-4 py-2 items-center">
            <Text className=" text-text/80 text-sm mb-1">Father's Phone Number</Text>
            <Text className=" text-base">{currentProfile.fatherContactNumber}</Text>
          </View>
        </View>
        <View className=" flex-row justify-center">
          <View className=" px-4 py-2 items-center">
            <Text className=" text-text/80 text-sm mb-1">Mother's Name</Text>
            <Text className=" text-base">{currentProfile.motherName}</Text>
          </View>
          <View className=" px-4 py-2 items-center">
            <Text className=" text-text/80 text-sm mb-1">Mother's Phone Number</Text>
            <Text className=" text-base">{currentProfile.motherContactNumber}</Text>
          </View>
        </View>
        </View>
      </View>
    </ScrollView>
  );
}
