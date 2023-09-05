import {
  Image,
  View,
  Text,
  ScrollView,
  FlatList,
  Pressable,
  RefreshControl,
} from "react-native";
import { useState, useCallback } from "react";
import profile1 from "../../../assets/data/profile1.json";
import news from "../../../assets/data/news.json";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import TimetableCard from "@/components/TimetableCard";
import timetableData from "../../../assets/data/timetable.json";
import { ChevronRightIcon } from "react-native-heroicons/solid";
import { Link } from "expo-router";

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const currentProfile = profile1[0];
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <ScrollView
      className=""
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View className="p-2 justify-center items-center bg-gray-100">
        <View className="flex-row p-4 w-full items-center rounded-lg bg-white shadow shadow-[#232323] mb-3">
          <Image
            className=" rounded-full aspect-square w-16 mr-4"
            source={require("../../../assets/images/profilephoto.jpg")}
          />
          <View>
            <Text className="text-[#232323] dark:text-headingDark text-2xl">{currentProfile.name}</Text>
            <Text className="text-text dark:text-textDark">
              {currentProfile.course} - {currentProfile.branch} [{" "}
              {currentProfile.semester} Sem ]
            </Text>
            <View className="w-full">
              <Text>
                Sec - {currentProfile.section} ({currentProfile.classRollNo}) -{" "}
                {currentProfile.isRegistered ? (
                  <Text className=" text-teal-700">Registered</Text>
                ) : (
                  <Text className=" text-red-600">Not Registered</Text>
                )}
              </Text>
              {/* <Text>Roll No. - {currentProfile.classRollNo}</Text> */}
            </View>
          </View>
        </View>
        <View className="flex-row">
          <Link href="/Attendance" asChild>
            <Pressable className="p-4 bg-[#fffffe] dark:bg-whiteDark rounded-lg shadow shadow-[#232323] items-center mr-2 justify-between">
              <AnimatedCircularProgress
                size={95}
                fill={currentProfile.attendance}
                width={7}
                duration={1000}
                tintColor={
                  currentProfile.attendance >= 75 ? "#0F766E" : "#DC2626"
                }
                backgroundColor="#f8f5f2"
                rotation={0}
                lineCap="round"
                children={(fill) => (
                  <Text className="text-lg">{Math.round(fill)}%</Text>
                )}
              />
              <Text className="mt-2 text-text dark:text-textDark text-base">Attendance</Text>
            </Pressable>
          </Link>
          <View className="rounded-lg flex-1 p-2 bg-[#fffffe] dark:bg-whiteDark boder border-[#232323] shadow shadow-[#232323]">
            <View className="flex-1">
              <Text className="text-text text-xs">Upcoming Class</Text>
              <View className=" my-2">
                <Text className=" text-lg text-text dark:text-textDark leading-[20px] mb-1">
                  Object Oriented Programming Lab
                </Text>
                <Text className="text-sm -mt-1 mb-3 text-text">BCSC 0801</Text>
                <View className="flex-row border rounded-lg justify-evenly divide-x">
                  {/* <View className="">
                    <Text className="text-text text-xs text-center px-2">
                      Thu
                    </Text>
                  </View> */}
                  <View className="px-2">
                    <Text className="text-text dark:text-textDark text-xs text-center">
                      AB-VIII 311
                    </Text>
                  </View>
                  <View className="flex-1 px-1">
                    <Text className="text-text dark:text-textDark text-xs text-center">
                      1:00 PM - 2:00 PM
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Link href="/Timetable" asChild>
              <Pressable className="border-t pt-1 mt-1 flex-row justify-between items-center active:bg-gray-100">
                <Text className=" text-teal-700">View</Text>
                {/* <FontAwesome name="arrow-right" size={18} color="#078080" /> */}
                <ChevronRightIcon color="#078080" size={18} />
              </Pressable>
            </Link>
          </View>
        </View>
        <View className="w-full bg-[#fffffe] dark:bg-whiteDark shadow shadow-[#232323] rounded-lg mt-3 p-1">
          <FlatList
            data={news}
            horizontal
            showsHorizontalScrollIndicator={false}
            // keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="flex-row items-center">
                {/* <FontAwesome
                  name="circle"
                  size={10}
                  color="#FF934F"
                ></FontAwesome> */}
                <View className="w-2 h-2 rounded-full bg-yellow-500"></View>
                <Text className="mx-2">{item.title}</Text>
              </View>
            )}
          />
        </View>
        <View className="w-full flex-row mt-3">
          <View className="mr-2 p-2 bg-[#fffffe] dark:bg-whiteDark shadow shadow-[#232323] rounded-lg ">
            <View className="mb-2">
              <Text className="text-3xl text-[#232323] dark:text-headingDark">3</Text>
              <Text className="text-text dark:text-textDark text-base">Assignments due</Text>
            </View>
            <Link href="/Assignments" asChild>
              <Pressable className="border-t pt-1 flex-row justify-between items-center active:bg-gray-100">
                <Text className="text-[#078080]">View</Text>
                {/* <FontAwesome name="arrow-right" size={18} color="#078080" /> */}
                <ChevronRightIcon color="#078080" size={18} />
              </Pressable>
            </Link>
          </View>
          <View className="flex-1 p-2 bg-[#fffffe] shadow shadow-[#232323] rounded-lg ">
            <View className="mb-2">
              <Text className="text-3xl text-[#232323]">93.50%</Text>
              <Text className="text-[#232323] text-base">Percentage</Text>
            </View>
            <Link href="/Result" asChild>
              <Pressable className="border-t pt-1 flex-row justify-between items-center active:bg-gray-100">
                <Text className="text-[#078080]">View</Text>
                {/* <FontAwesome name="arrow-right" size={18} color="#078080" /> */}
                <ChevronRightIcon color="#078080" size={18} />
              </Pressable>
            </Link>
          </View>
        </View>
        <View className="w-full mt-3 bg-white shadow shadow-[#232323] rounded-lg p-2">
          <View className="border-b border-[#232323] pb-2">
            <Text className="text-lg font-base">Today's Timetable</Text>
          </View>
          <View className="pt-2 w-full ">
            {/* {timetable.length > 0 ? (
              timetable.map((item, index) => (
                <TimetableCard
                  key={index}
                  subject={item["subject"]}
                  teacher={item["teacher"]}
                  room={item["room"]}
                  block={item["block"]}
                  time={item["time"]}
                  subjectCode={item["subjectCode"]}
                  classType={item["classType"]}
                  attendance={item["attendance"]}
                />
              ))
            ) : (
              <Text className=" text-[#f45d48]">No Timetable Found</Text>
            )} */}
            <FlatList
              scrollEnabled={false}
              data={timetableData["2023-09-02"]}
              renderItem={({ item }) => (
                <TimetableCard
                  subject={item["subject"]}
                  teacher={item["teacher"]}
                  room={item["room"]}
                  block={item["block"]}
                  time={item["time"]}
                  subjectCode={item["subjectCode"]}
                  classType={item["classType"]}
                  attendance={item["attendance"]}
                />
              )}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
