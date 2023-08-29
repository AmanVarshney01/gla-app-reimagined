import { Text, View } from "react-native";

export default function TimetableCard({
  subject,
  teacher,
  room,
  block,
  time,
  subjectCode,
  classType,
  attendance,
}: {
  subject: string;
  teacher: string;
  room: string;
  block: string;
  time: string;
  subjectCode: string;
  classType: string;
  attendance: string;
}) {
  return (
    <View className="w-full border-b border-b-stroke/20 p-2 pb-4 mb-2">
      <View className="flex-1">
        <Text className=" text-sm mb-2">{classType}</Text>
        <Text className=" text-base font-medium leading-[20px]">{subject}</Text>
        <Text className="  mb-2">{subjectCode}</Text>
        <View className="flex-row border rounded-lg justify-around divide-x my-2">
          <View className=" flex-1 justify-center items-center">
            <Text className="text-text text-xs px-2">{block}</Text>
          </View>
          <View className=" flex-1 justify-center items-center">
            <Text className="text-text text-xs px-1">{room}</Text>
          </View>
          <View className="px-2">
            <Text className="text-text text-xs px-1">{time}</Text>
          </View>
        </View>
        <Text className=" text-sm mb-2">Faculty: {teacher}</Text>
      </View>
      <View className="flex-row ">
        {attendance === "Present" ? (
          <Text className=" text-xs font-medium text-white bg-primary rounded-lg px-2 py-1">
            {attendance}
          </Text>
        ) : attendance === "Absent" ? (
          <Text className=" text-xs font-medium text-white bg-secondary rounded-lg px-2 py-1">
            {attendance}
          </Text>
        ) : (
          <Text className=" text-xs font-medium text-white bg-yellow rounded-lg px-2 py-1">
            {attendance}
          </Text>
        )}
      </View>
    </View>
  );
}