import { Text, View } from "react-native";

export default function TimetableCard({
  subject,
  teacher,
  room,
  block,
  time,
  subjectCode,
  classType,
  isPresent,
}: {
  subject: string;
  teacher: string;
  room: string;
  block: string;
  time: string;
  subjectCode: string;
  classType: string;
  isPresent: boolean;
}) {
  return (
    <View className="w-full border p-2 mb-2">
      <Text className=" text-base">{subject}</Text>
      <Text className=" text-sm">{teacher}</Text>
      <Text className=" text-sm">{room}</Text>
      <Text className=" text-sm">{block}</Text>
      <Text className=" text-sm">{time}</Text>
      <Text className=" text-sm">{subjectCode}</Text>
      <Text className=" text-sm">{classType}</Text>
      {isPresent ? <Text className=" text-sm">Present</Text> : <Text className="text-sm">Absent</Text>}
    </View>
  );
}
