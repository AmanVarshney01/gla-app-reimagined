import { View, Text, ScrollView, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import { Cog8ToothIcon, MapPinIcon, CurrencyRupeeIcon, UserGroupIcon, AcademicCapIcon, CalendarDaysIcon, IdentificationIcon, KeyIcon,  CalendarIcon, BookOpenIcon, CakeIcon, ArrowRightOnRectangleIcon } from "react-native-heroicons/solid";

export default function MoreScreen() {
  
  return (
    <ScrollView className=" bg-background" showsVerticalScrollIndicator={false}>
      <View className="flex-1 p-2 w-full bg-white">
        <View className=" items-center flex-row w-full my-4">
          <View className="w-14 items-center">
            {/* <FontAwesome name="address-book" size={26} color="#222525" /> */}
            <IdentificationIcon color="#222525" size={26} />
          </View>
          <Text className=" text-lg ml-4 text-heading">Attendance</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            {/* <FontAwesome name="hotel" size={26} color="#222525" /> */}
            <KeyIcon color="#222525" size={26} />
          </View>
          <Text className=" text-lg ml-4 text-heading">Hostel</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            {/* <FontAwesome name="graduation-cap" size={26} color="#222525" /> */}
            <AcademicCapIcon color="#222525" size={26} />
          </View>
          <Text className=" text-lg ml-4 text-heading">Result</Text>
        </View>

        <Link href="/Timetable">jjj</Link>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            {/* <FontAwesome name="calendar" size={26} color="#222525" /> */}
            <CalendarDaysIcon color="#222525" size={26} />
          </View>
          <Text className=" text-lg ml-4 text-heading">TimeTable</Text>
        </View>


        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            {/* <FontAwesome name="money" size={26} color="#222525" /> */}
            <CurrencyRupeeIcon color="#222525" size={26} />
          </View>
          <Text className=" text-lg ml-4 text-heading">Fee Details</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            {/* <FontAwesome name="book" size={26} color="#222525" /> */}
            <BookOpenIcon color="#222525" size={26} />
          </View>
          <Text className=" text-lg ml-4 text-heading">Library</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            {/* <FontAwesome name="spoon" size={26} color="#222525" /> */}
            <CakeIcon color="#222525" size={26} />
          </View>
          <Text className=" text-lg ml-4 text-heading">Mess Menu</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            {/* <FontAwesome name="group" size={26} color="#222525" /> */}
            <UserGroupIcon color="#222525" size={26} />
          </View>
          <Text className=" text-lg ml-4 text-heading">Join Club</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            {/* <FontAwesome name="gift" size={26} color="#222525" /> */}
            <CalendarIcon color="#222525" size={26} />
          </View>
          <Text className=" text-lg ml-4 text-heading">Calendar</Text>
        </View>
        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            {/* <FontAwesome name="road" size={26} color="#222525" /> */}
            <MapPinIcon color="#222525" size={26} />
          </View>
          <Text className=" text-lg ml-4 text-heading">
            Leave/Outing Details
          </Text>
        </View>
        <View className="w-full border-b border-b-stroke/10 my-2"></View>

        <Link href={"/Settings"} asChild>
          <Pressable className=" items-center flex-row w-full my-4 ">
            <View className="w-14 items-center">
              {/* <FontAwesome name="gear" size={26} color="#222525" /> */}
              <Cog8ToothIcon color="#222525" size={26} />
            </View>
            <Text className=" text-lg ml-4 text-heading">Settings</Text>
          </Pressable>
        </Link>

        <View className=" items-center flex-row w-full my-4 ">
          <View className="w-14 items-center">
            {/* <FontAwesome name="sign-out" size={26} color="#222525" /> */}
            <ArrowRightOnRectangleIcon color="#222525" size={26} />
          </View>
          <Text className=" text-lg ml-4 text-heading">Log Out</Text>
        </View>
      </View>
    </ScrollView>
  );
}
