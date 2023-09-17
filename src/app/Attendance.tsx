import { Pressable, Text, View, FlatList, ScrollView } from "react-native";
import { useState } from "react";
import attendance from "../../assets/data/attendance.json";
import AttendanceList from "@/components/AttendanceList";
import profile1 from "../../assets/data/profile1.json";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useColorScheme } from "nativewind";

type AttendanceData = {
  name: string;
  subjectCode: string;
  attendancePercentage: number;
  attendedClasses: number;
  totalClasses: number;
  faculty: string;
};

export default function Attendance() {
  const currentProfile = profile1[0];
  const { colorScheme } = useColorScheme();

  const [selectedMenu, setSelectedMenu] = useState<string>("lectures");

  const menuContent = () => {
    const attendanceData: Record<string, AttendanceData[]> = attendance;

    return (
      <FlatList
        scrollEnabled={false}
        data={attendanceData[selectedMenu]}
        renderItem={({ item }) => <AttendanceList {...item} />}
        keyExtractor={(item) => item.subjectCode}
      />
    );
  };

  return (
    <ScrollView
      className=" bg-neutral-100 dark:bg-neutral-900"
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1 p-2">
        <View className="bg-white dark:bg-neutral-800 rounded-lg p-4 flex-row justify-between">
          <View className="">
          <Text className="text-base text-neutral-900 dark:text-neutral-100">
              Total: 30
            </Text>
            <Text className="text-base text-neutral-900 dark:text-neutral-100">
              Attended Classes: 15
            </Text>
            <Text className="text-base text-neutral-900 dark:text-neutral-100">
              Leaves Left: 0
            </Text>
          </View>
          <View className=" justify-center">
            {/* <Text className='text-3xl text-neutral-900 dark:text-neutral-100'>88%</Text> */}
            <AnimatedCircularProgress
              size={95}
              fill={currentProfile.attendance}
              width={7}
              duration={1000}
              tintColor={
                currentProfile.attendance >= 75 ? "rgb(22 163 74)" : "#EF4444"
              }
              backgroundColor={colorScheme == "light" ? "#F3F4F6" : "rgb(23 23 23)"}
              rotation={0}
              lineCap="round"
              children={(fill) => (
                <Text className="text-lg dark:text-neutral-100">
                  {Math.round(fill)}%
                </Text>
              )}
            />
          </View>
        </View>
        {/* <View>
          <Text>Subject wise attendance</Text>
        </View> */}
        <View className="flex-row w-full justify-evenly items-center mt-3 bg-white dark:bg-neutral-800">
          <Pressable
            className="py-4 px-2 flex-1 justify-center items-center rounded-tl-lg bg-white dark:bg-neutral-800"
            onPress={() => setSelectedMenu("lectures")}
            style={{
              backgroundColor: selectedMenu == "lectures" ? colorScheme == "light" ? "#16A34A" : "#71717A" : colorScheme == "light" ? "#E4E4E7" : "#3F3F46",
            }}
          >
            <Text className="text-lg" style={{color: selectedMenu == "lectures" ? "white" : "gray"}}>Lectures</Text>
          </Pressable>
          <Pressable
            className="py-4 px-2 flex-1 justify-center items-center rounded-tr-lg"
            onPress={() => setSelectedMenu("labs")}
            style={{
              backgroundColor: selectedMenu == "labs" ? colorScheme == "light" ? "#16A34A" : "#71717A" : colorScheme == "light" ? "#E4E4E7" : "#3F3F46",
            }}
          >
            <Text className="text-lg" style={{color: selectedMenu == "labs" ? "white" : "gray"}}>Labs</Text>
          </Pressable>
        </View>
        <View className=" rounded-b-lg pb-1 bg-white dark:bg-neutral-800">
          {menuContent()}
        </View>
      </View>
    </ScrollView>
  );
}

