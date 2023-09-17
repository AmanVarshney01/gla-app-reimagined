import { View, Text } from "react-native";

type AttendanceData = {
  name: string;
  subjectCode: string;
  attendancePercentage: number;
  attendedClasses: number;
  totalClasses: number;
  faculty: string;
};

const AttendanceList = (item: AttendanceData) => {
  return (
    <View className=" border-b border-b-black/10 bg-white dark:bg-neutral-800 p-4">
      <View className=" flex-row bg-white dark:bg-neutral-800">
        <View className=" flex-1 bg-white dark:bg-neutral-800">
          <Text className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
            {item.name}
          </Text>
          <Text className="dark:text-neutral-400 text-xs text-neutral-500">
            {item.subjectCode}
          </Text>
          <Text className="dark:text-neutral-400 text-sm text-neutral-500 mt-1">
            Faculty - {item.faculty}
          </Text>
        </View>
        <View className=" justify-center items-center flex-row">
          <Text className="text-blue-500 text-2xl">
            {item.attendancePercentage}
          </Text>
          <Text className="text-blue-500 text-sm -mb-2">%</Text>
        </View>
      </View>
      <View className=" bg-white w-full justify-between pt-2 flex-row dark:bg-neutral-800">
        <Text className=" text-sm text-neutral-800 dark:text-neutral-400">
          Attended Classes: {item.attendedClasses}
        </Text>
        <Text className="text-sm text-neutral-800 dark:text-neutral-400 ">
          Total: {item.totalClasses}
        </Text>
      </View>
    </View>
  );
};

export default AttendanceList;
