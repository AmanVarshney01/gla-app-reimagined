import { View, Text, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";
import { useColorScheme } from "nativewind";
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
  DocumentTextIcon,
} from "react-native-heroicons/solid";

export default function MoreScreen() {
  const { colorScheme } = useColorScheme();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="bg-neutral-100 dark:bg-neutral-900"
    >
      <View className="flex-1 p-4 w-full bg-white dark:bg-neutral-900 rounded-lg">
        <Link href="/Attendance" asChild>
          <Pressable className="flex items-center flex-row w-full py-4 active:bg-neutral-200 dark:active:bg-neutral-700 rounded-lg">
            <View className="w-14 items-center justify-center">
              <IdentificationIcon
                color={colorScheme == "light" ? "#18181B" : "#F4F4F5"}
                size={26}
              />
            </View>
            <Text className="text-lg ml-4 text-neutral-900 dark:text-neutral-100 ">
              Attendance
            </Text>
          </Pressable>
        </Link>

        <Link href="/Hostel" asChild>
          <Pressable className="flex items-center flex-row w-full py-4  active:bg-neutral-200 dark:active:bg-neutral-700 rounded-lg mt-2">
            <View className="w-14 items-center justify-center">
              <KeyIcon
                color={colorScheme == "light" ? "#18181B" : "#F4F4F5"}
                size={26}
              />
            </View>
            <Text className="text-lg ml-4 text-neutral-900 dark:text-neutral-100 ">
              Hostel
            </Text>
          </Pressable>
        </Link>

        <Link href="/Result" asChild>
          <Pressable className="flex items-center flex-row w-full py-4  active:bg-neutral-200 dark:active:bg-neutral-700 rounded-lg mt-2">
            <View className="w-14 items-center justify-center">
              <AcademicCapIcon
                color={colorScheme == "light" ? "#18181B" : "#F4F4F5"}
                size={26}
              />
            </View>
            <Text className="text-lg ml-4 text-neutral-900 dark:text-neutral-100 ">
              Result
            </Text>
          </Pressable>
        </Link>

        <Link href="/Timetable" asChild>
          <Pressable className="flex items-center flex-row w-full py-4  active:bg-neutral-200 dark:active:bg-neutral-700 rounded-lg mt-2">
            <View className="w-14 items-center justify-center">
              <CalendarDaysIcon
                color={colorScheme == "light" ? "#18181B" : "#F4F4F5"}
                size={26}
              />
            </View>
            <Text className="text-lg ml-4 text-neutral-900 dark:text-neutral-100 ">
              TimeTable
            </Text>
          </Pressable>
        </Link>

        <Link href="/Assignments" asChild>
          <Pressable className="flex items-center flex-row w-full py-4  active:bg-neutral-200 dark:active:bg-neutral-700 rounded-lg mt-2">
            <View className="w-14 items-center justify-center">
              <DocumentTextIcon
                color={colorScheme == "light" ? "#18181B" : "#F4F4F5"}
                size={26}
              />
            </View>
            <Text className="text-lg ml-4 text-neutral-900 dark:text-neutral-100 ">
              Assignments
            </Text>
          </Pressable>
        </Link>

        <Link href="/FeeDetails" asChild>
          <Pressable className="flex items-center flex-row w-full py-4  active:bg-neutral-200 dark:active:bg-neutral-700 rounded-lg mt-2">
            <View className="w-14 items-center justify-center">
              <CurrencyRupeeIcon
                color={colorScheme == "light" ? "#18181B" : "#F4F4F5"}
                size={26}
              />
            </View>
            <Text className="text-lg ml-4 text-neutral-900 dark:text-neutral-100 ">
              Fee Details
            </Text>
          </Pressable>
        </Link>

        <Link href="/Library" asChild>
          <Pressable className="flex items-center flex-row w-full py-4  active:bg-neutral-200 dark:active:bg-neutral-700 rounded-lg mt-2">
            <View className="w-14 items-center justify-center">
              <BookOpenIcon
                color={colorScheme == "light" ? "#18181B" : "#F4F4F5"}
                size={26}
              />
            </View>
            <Text className="text-lg ml-4 text-neutral-900 dark:text-neutral-100 ">
              Library
            </Text>
          </Pressable>
        </Link>

        <View className="flex items-center flex-row w-full py-4  active:bg-neutral-200 dark:active:bg-neutral-700 rounded-lg mt-2">
          <View className="w-14 items-center justify-center">
            <CakeIcon
              color={colorScheme == "light" ? "#18181B" : "#F4F4F5"}
              size={26}
            />
          </View>
          <Text className="text-lg ml-4 text-neutral-900 dark:text-neutral-100 ">
            Mess Menu
          </Text>
        </View>

        <Link href="/JoinClub" asChild>
          <Pressable className="flex items-center flex-row w-full py-4  active:bg-neutral-200 dark:active:bg-neutral-700 rounded-lg mt-2">
            <View className="w-14 items-center justify-center">
              <UserGroupIcon
                color={colorScheme == "light" ? "#18181B" : "#F4F4F5"}
                size={26}
              />
            </View>
            <Text className="text-lg ml-4 text-neutral-900 dark:text-neutral-100 ">
              Join Club
            </Text>
          </Pressable>
        </Link>

        <View className="flex items-center flex-row w-full py-4  active:bg-neutral-200 dark:active:bg-neutral-700 rounded-lg mt-2">
          <View className="w-14 items-center justify-center">
            <CalendarIcon
              color={colorScheme == "light" ? "#18181B" : "#F4F4F5"}
              size={26}
            />
          </View>
          <Text className="text-lg ml-4 text-neutral-900 dark:text-neutral-100 ">
            Calendar
          </Text>
        </View>

        <Link href="/LeaveOutingDetails" asChild>
          <Pressable className="flex items-center flex-row w-full py-4  active:bg-neutral-200 dark:active:bg-neutral-700 rounded-lg mt-2">
            <View className="w-14 items-center justify-center">
              <MapPinIcon
                color={colorScheme == "light" ? "#18181B" : "#F4F4F5"}
                size={26}
              />
            </View>
            <Text className="text-lg ml-4 text-neutral-900 dark:text-neutral-100 ">
              Leave/Outing Details
            </Text>
          </Pressable>
        </Link>

        <View className="w-full border-b border-b-black/10 my-3 dark:border-neutral-700"></View>

        <Link href={"/Settings"} asChild>
          <Pressable className="flex items-center flex-row w-full py-4  active:bg-neutral-200 dark:active:bg-neutral-700 rounded-lg">
            <View className="w-14 items-center justify-center">
              <Cog8ToothIcon
                color={colorScheme == "light" ? "#18181B" : "#F4F4F5"}
                size={26}
              />
            </View>
            <Text className="text-lg ml-4 text-neutral-900 dark:text-neutral-100 ">
              Settings
            </Text>
          </Pressable>
        </Link>

        <View className="flex items-center flex-row w-full py-4  active:bg-neutral-200 dark:active:bg-neutral-700 rounded-lg mt-2">
          <View className="w-14 items-center justify-center">
            <ArrowRightOnRectangleIcon
              color={colorScheme == "light" ? "#18181B" : "#F4F4F5"}
              size={26}
            />
          </View>
          <Text className="text-lg ml-4 text-neutral-900 dark:text-neutral-100 ">
            Log Out
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
