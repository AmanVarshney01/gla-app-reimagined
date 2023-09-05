import { View, Text, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";
import {
  Cog8ToothIcon,
  MapPinIcon,
  CurrencyRupeeIcon,
  UserGroupIcon,
  AcademicCapIcon,
  CalendarDaysIcon,
  IdentificationIcon,
  KeyIcon,
  CalendarIcon,
  BookOpenIcon,
  CakeIcon,
  ArrowRightOnRectangleIcon,
} from "react-native-heroicons/solid";

export default function MoreScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="bg-gray-200 dark:bg-gray-900">
      <View className="flex-1 p-4 w-full bg-white dark:bg-gray-900 rounded-lg">

        <Link href="/Attendance" asChild>
          <Pressable className="flex items-center flex-row w-full py-4 dark:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-900 rounded-lg">
            <View className="w-14 items-center justify-center">
              <IdentificationIcon color="#222525" size={26} />
            </View>
            <Text className="text-lg ml-4 text-[#232323] dark:text-gray-100 font-medium">Attendance</Text>
          </Pressable>
        </Link>

        <Link href="/Hostel" asChild>
          <Pressable className="flex items-center flex-row w-full py-4 dark:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-900 rounded-lg mt-2">
            <View className="w-14 items-center justify-center">
              <KeyIcon color="#222525" size={26} />
            </View>
            <Text className="text-lg ml-4 text-[#232323] dark:text-gray-100 font-medium">Hostel</Text>
          </Pressable>
        </Link>

        <Link href="/Result" asChild>
          <Pressable className="flex items-center flex-row w-full py-4 dark:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-900 rounded-lg mt-2">
            <View className="w-14 items-center justify-center">
              <AcademicCapIcon color="#222525" size={26} />
            </View>
            <Text className="text-lg ml-4 text-[#232323] dark:text-gray-100 font-medium">Result</Text>
          </Pressable>
        </Link>

        <Link href="/Timetable" asChild>
          <Pressable className="flex items-center flex-row w-full py-4 dark:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-900 rounded-lg mt-2">
            <View className="w-14 items-center justify-center">
              <CalendarDaysIcon color="#222525" size={26} />
            </View>
            <Text className="text-lg ml-4 text-[#232323] dark:text-gray-100 font-medium">TimeTable</Text>
          </Pressable>
        </Link>

        <Link href="/FeeDetails" asChild>
          <Pressable className="flex items-center flex-row w-full py-4 dark:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-900 rounded-lg mt-2">
            <View className="w-14 items-center justify-center">
              <CurrencyRupeeIcon color="#222525" size={26} />
            </View>
            <Text className="text-lg ml-4 text-[#232323] dark:text-gray-100 font-medium">Fee Details</Text>
          </Pressable>
        </Link>

        <Link href="/Library" asChild>
          <Pressable className="flex items-center flex-row w-full py-4 dark:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-900 rounded-lg mt-2">
            <View className="w-14 items-center justify-center">
              <BookOpenIcon color="#222525" size={26} />
            </View>
            <Text className="text-lg ml-4 text-[#232323] dark:text-gray-100 font-medium">Library</Text>
          </Pressable>
        </Link>

        <View className="flex items-center flex-row w-full py-4 dark:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-900 rounded-lg mt-2">
          <View className="w-14 items-center justify-center">
            <CakeIcon color="#222525" size={26} />
          </View>
          <Text className="text-lg ml-4 text-[#232323] dark:text-gray-100 font-medium">Mess Menu</Text>
        </View>

        <Link href="/JoinClub" asChild>
          <Pressable className="flex items-center flex-row w-full py-4 dark:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-900 rounded-lg mt-2">
            <View className="w-14 items-center justify-center">
              <UserGroupIcon color="#222525" size={26} />
            </View>
            <Text className="text-lg ml-4 text-[#232323] dark:text-gray-100 font-medium">Join Club</Text>
          </Pressable>
        </Link>

        <View className="flex items-center flex-row w-full py-4 dark:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-900 rounded-lg mt-2">
          <View className="w-14 items-center justify-center">
            <CalendarIcon color="#222525" size={26} />
          </View>
          <Text className="text-lg ml-4 text-[#232323] dark:text-gray-100 font-medium">Calendar</Text>
        </View>

        <Link href="/LeaveOutingDetails" asChild>
          <Pressable className="flex items-center flex-row w-full py-4 dark:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-900 rounded-lg mt-2">
            <View className="w-14 items-center justify-center">
              <MapPinIcon color="#222525" size={26} />
            </View>
            <Text className="text-lg ml-4 text-[#232323] dark:text-gray-100 font-medium">
              Leave/Outing Details
            </Text>
          </Pressable>
        </Link>

        <View className="w-full border-b border-b-stroke/10 my-2 dark:border-gray-700"></View>

        <Link href={"/Settings"} asChild>
          <Pressable className="flex items-center flex-row w-full py-4 dark:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-900 rounded-lg mt-2">
            <View className="w-14 items-center justify-center">
              <Cog8ToothIcon color="#222525" size={26} />
            </View>
            <Text className="text-lg ml-4 text-[#232323] dark:text-gray-100 font-medium">Settings</Text>
          </Pressable>
        </Link>

        <View className="flex items-center flex-row w-full py-4 dark:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-900 rounded-lg mt-2">
          <View className="w-14 items-center justify-center">
            <ArrowRightOnRectangleIcon color="#222525" size={26} />
          </View>
          <Text className="text-lg ml-4 text-[#232323] dark:text-gray-100 font-medium">Log Out</Text>
        </View>
      </View>
    </ScrollView>
  );
}
