import { View, Text, ScrollView, Image } from "react-native";
import profile1 from "../../../assets/data/profile1.json";

function Card({ title, value }: { title: string; value: string | number }) {
  return (
    <View className="flex items-center px-4 py-2">
      <Text className="text-neutral-700 dark:text-neutral-300 text-sm mb-1">{title}</Text>
      <Text className="text-neutral-900 dark:text-neutral-100 text-lg">{value}</Text>
    </View>
  );
}
function Card2({ title, value }: { title: string; value: string | number }) {
  return (
    <View className="flex-1 px-4 py-2">
      <Text className="text-neutral-700 dark:text-neutral-300 text-sm mb-1">{title}</Text>
      <Text className="text-neutral-900 dark:text-neutral-100 text-base">{value}</Text>
    </View>
  );
}

export default function ProfileScreen() {
  const currentProfile = profile1[0];
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="bg-neutral-100 dark:bg-neutral-900">
      <View className="p-4 bg-neutral-100 dark:bg-neutral-900">
        <View className="flex justify-center items-center p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-lg mb-2">
          <Image
            className="w-32 h-32 rounded-full"
            source={require("../../../assets/images/photo.jpg")}
          />
          <Text className="text-neutral-900 dark:text-neutral-100 text-2xl mt-2">
            {currentProfile.name}
          </Text>
          <Text className="text-neutral-700 dark:text-neutral-300">
            {currentProfile.course} - {currentProfile.branch} [{" "}
            {currentProfile.semester} Sem ]
          </Text>
        </View>
        <View className="flex-row w-full rounded-lg shadow-lg bg-white dark:bg-neutral-800 mb-2">
          <View className="flex-1">
            <Card title={"Roll Number"} value={currentProfile.rollNumber} />
            <Card title={"Date Of Birth"} value={currentProfile.dateOfBirth} />
          </View>
          <View className="flex-1">
            <Card title={"Blood Group"} value={currentProfile.bloodGroup} />
            <Card title={"Phone Number"} value={currentProfile.phoneNumber} />
          </View>
        </View>
        <View className="bg-white dark:bg-neutral-800 shadow-lg rounded-lg">
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
          <View className="border-b border-neutral-200 dark:border-neutral-700 mx-2 my-2 "></View>
          {/* </View>
        <View className=" bg-white shadow shadow-[#232323] rounded-lg mt-2"> */}
          <View className=" flex-row justify-center">
            <View className="flex items-center px-4 py-2 dark:bg-neutral-800">
              <Text className="text-neutral-700 dark:text-neutral-300 text-sm mb-1">Father's Name</Text>
              <Text className="text-neutral-900 dark:text-neutral-100 text-base">{currentProfile.fatherName}</Text>
            </View>
            <View className="flex items-center px-4 py-2 dark:bg-neutral-800">
              <Text className="text-neutral-700 dark:text-neutral-300 text-sm mb-1">Father's Phone Number</Text>
              <Text className="text-neutral-900 dark:text-neutral-100 text-base">{currentProfile.fatherContactNumber}</Text>
            </View>
          </View>
          <View className=" flex-row justify-center">
            <View className="flex items-center px-4 py-2 dark:bg-neutral-800">
              <Text className="text-neutral-700 dark:text-neutral-300 text-sm mb-1">Mother's Name</Text>
              <Text className="text-neutral-900 dark:text-neutral-100 text-base">{currentProfile.motherName}</Text>
            </View>
            <View className="flex items-center px-4 py-2 dark:bg-neutral-800">
              <Text className="text-neutral-700 dark:text-neutral-300 text-sm mb-1">Mother's Phone Number</Text>
              <Text className="text-neutral-900 dark:text-neutral-100 text-base">{currentProfile.motherContactNumber}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
