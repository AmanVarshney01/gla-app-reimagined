import { View, Text, ScrollView, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
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
    <ScrollView className=" bg-[#f8f5f2]" showsVerticalScrollIndicator={false}>
      <View className="flex-1 p-2 w-full bg-[#FFFFFE]">

        <Link href="/Attendance" asChild>
          <Pressable className=" items-center flex-row w-full py-4 active:bg-gray-100">
            <View className="w-14 items-center">
              <IdentificationIcon color="#222525" size={26} />
            </View>
            <Text className=" text-lg ml-4 text-[#232323]">Attendance</Text>
          </Pressable>
        </Link>

        <Link href="/Hostel" asChild>
          <Pressable className=" items-center flex-row w-full py-4 active:bg-gray-100 ">
            <View className="w-14 items-center">
              <KeyIcon color="#222525" size={26} />
            </View>
            <Text className=" text-lg ml-4 text-[#232323]">Hostel</Text>
          </Pressable>
        </Link>

        <Link href="/Result" asChild>
          <Pressable className=" items-center flex-row w-full py-4 active:bg-gray-100 ">
            <View className="w-14 items-center">
              <AcademicCapIcon color="#222525" size={26} />
            </View>
            <Text className=" text-lg ml-4 text-[#232323]">Result</Text>
          </Pressable>
        </Link>

        <Link href="/Timetable" asChild>
          <Pressable className=" items-center flex-row w-full py-4 active:bg-gray-100 ">
            <View className="w-14 items-center">
              <CalendarDaysIcon color="#222525" size={26} />
            </View>
            <Text className=" text-lg ml-4 text-[#232323]">TimeTable</Text>
          </Pressable>
        </Link>

        <Link href="/FeeDetails" asChild>
          <Pressable className=" items-center flex-row w-full py-4 active:bg-gray-100 ">
            <View className="w-14 items-center">
              {/* <FontAwesome name="money" size={26} color="#222525" /> */}
              <CurrencyRupeeIcon color="#222525" size={26} />
            </View>
            <Text className=" text-lg ml-4 text-[#232323]">Fee Details</Text>
          </Pressable>
        </Link>

        <Link href="/Library" asChild>
          <Pressable className=" items-center flex-row w-full py-4 active:bg-gray-100 ">
            <View className="w-14 items-center">
              {/* <FontAwesome name="book" size={26} color="#222525" /> */}
              <BookOpenIcon color="#222525" size={26} />
            </View>
            <Text className=" text-lg ml-4 text-[#232323]">Library</Text>
          </Pressable>
        </Link>

        <View className=" items-center flex-row w-full py-4 active:bg-gray-100 ">
          <View className="w-14 items-center">
            {/* <FontAwesome name="spoon" size={26} color="#222525" /> */}
            <CakeIcon color="#222525" size={26} />
          </View>
          <Text className=" text-lg ml-4 text-[#232323]">Mess Menu</Text>
        </View>

        <Link href="/JoinClub" asChild>
          <Pressable className=" items-center flex-row w-full py-4 active:bg-gray-100 ">
            <View className="w-14 items-center">
              {/* <FontAwesome name="group" size={26} color="#222525" /> */}
              <UserGroupIcon color="#222525" size={26} />
            </View>
            <Text className=" text-lg ml-4 text-[#232323]">Join Club</Text>
          </Pressable>
        </Link>

        <View className=" items-center flex-row w-full py-4 active:bg-gray-100 ">
          <View className="w-14 items-center">
            {/* <FontAwesome name="gift" size={26} color="#222525" /> */}
            <CalendarIcon color="#222525" size={26} />
          </View>
          <Text className=" text-lg ml-4 text-[#232323]">Calendar</Text>
        </View>

        <Link href="/LeaveOutingDetails" asChild>
          <Pressable className=" items-center flex-row w-full py-4 active:bg-gray-100 ">
            <View className="w-14 items-center">
              {/* <FontAwesome name="road" size={26} color="#222525" /> */}
              <MapPinIcon color="#222525" size={26} />
            </View>
            <Text className=" text-lg ml-4 text-[#232323]">
              Leave/Outing Details
            </Text>
          </Pressable>
        </Link>

        <View className="w-full border-b border-b-stroke/10 my-2"></View>

        <Link href={"/Settings"} asChild>
          <Pressable className=" items-center flex-row w-full py-4 active:bg-gray-100 ">
            <View className="w-14 items-center">
              {/* <FontAwesome name="gear" size={26} color="#222525" /> */}
              <Cog8ToothIcon color="#222525" size={26} />
            </View>
            <Text className=" text-lg ml-4 text-[#232323]">Settings</Text>
          </Pressable>
        </Link>

        <View className=" items-center flex-row w-full py-4 active:bg-gray-100 ">
          <View className="w-14 items-center">
            {/* <FontAwesome name="sign-out" size={26} color="#222525" /> */}
            <ArrowRightOnRectangleIcon color="#222525" size={26} />
          </View>
          <Text className=" text-lg ml-4 text-[#232323]">Log Out</Text>
        </View>
      </View>
    </ScrollView>
  );
}
