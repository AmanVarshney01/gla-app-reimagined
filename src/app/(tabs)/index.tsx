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
      className="flex-1 bg-gray-100 dark:bg-gray-900"
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View className="flex justify-center items-center bg-gray-100 dark:bg-gray-900 p-4">
        <View className="flex-row items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-full mb-3">
          <Image
            className="rounded-full w-16 h-16 mr-4"
            source={require("../../../assets/images/profilephoto.jpg")}
          />
          <View>
            <Text className="text-gray-900 dark:text-gray-100 text-2xl">{currentProfile.name}</Text>
            <Text className="text-gray-700 dark:text-gray-200">
              {currentProfile.course} - {currentProfile.branch} [{" "}
              {currentProfile.semester} Sem ]
            </Text>
            <View className="w-full">
              <Text>
                Sec - {currentProfile.section} ({currentProfile.classRollNo}) -{" "}
                {currentProfile.isRegistered ? (
                  <Text className="text-green-600">Registered</Text>
                ) : (
                  <Text className="text-red-600">Not Registered</Text>
                )}
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-row">
          <Link href="/Attendance" asChild>
            <Pressable className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 items-center mr-2 justify-between">
              <AnimatedCircularProgress
                size={95}
                fill={currentProfile.attendance}
                width={7}
                duration={1000}
                tintColor={
                  currentProfile.attendance >= 75 ? "#10B981" : "#EF4444"
                }
                backgroundColor="#F3F4F6"
                rotation={0}
                lineCap="round"
                children={(fill) => (
                  <Text className="text-lg dark:text-gray-100">{Math.round(fill)}%</Text>
                )}
              />
              <Text className="mt-2 text-gray-700 dark:text-gray-200 text-base">Attendance</Text>
            </Pressable>
          </Link>
          <View className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex-1 p-2">
            <View className="flex-1">
              <Text className="text-xs dark:text-gray-200">Upcoming Class</Text>
              <View className="my-2">
                <Text className="text-gray-900 dark:text-gray-200 text-lg leading-5 mb-1">
                  Object Oriented Programming Lab
                </Text>
                <Text className="text-gray-700 dark:text-gray-200 text-sm -mt-1 mb-3">BCSC 0801</Text>
                <View className="flex-row border dark:border-gray-200 rounded-lg justify-evenly divide-x dark:divide-gray-200">
                  <View className="px-2">
                    <Text className="text-xs text-center dark:text-gray-200">
                      AB-VIII 311
                    </Text>
                  </View>
                  <View className="flex-1 px-1">
                    <Text className="text-xs text-center dark:text-gray-200">
                      1:00PM-2:00PM
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Link href="/Timetable" asChild>
              <Pressable className="border-t p-1 mt-1 flex-row justify-between items-center bg-gray-100 dark:bg-gray-900">
                <Text className="text-green-600">View</Text>
                <ChevronRightIcon color="#10B981" size={18} />
              </Pressable>
            </Link>
          </View>
        </View>
        <View className="bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-3 p-1 w-full">
          <FlatList
            data={news}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View className="flex-row items-center">
                <View className="w-2 h-2 rounded-full bg-yellow-500"></View>
                <Text className="mx-2 dark:text-gray-200">{item.title}</Text>
              </View>
            )}
          />
        </View>
        <View className="flex-row mt-3 w-full">
          <View className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 mr-2">
            <View className="mb-2">
              <Text className="text-gray-900 dark:text-gray-200 text-3xl">3</Text>
              <Text className="text-gray-700 dark:text-gray-300 text-base">Assignments due</Text>
            </View>
            <Link href="/Assignments" asChild>
              <Pressable className="border-t p-1 flex-row justify-between items-center bg-gray-100 dark:bg-gray-900">
                <Text className="text-green-600">View</Text>
                <ChevronRightIcon color="#10B981" size={18} />
              </Pressable>
            </Link>
          </View>
          <View className="bg-white dark:bg-gray-800 shadow-lg rounded-lg flex-1 p-2">
            <View className="mb-2">
              <Text className="text-gray-900 dark:text-gray-200 text-3xl">93.50%</Text>
              <Text className="text-gray-700 dark:text-gray-300 text-base">Percentage</Text>
            </View>
            <Link href="/Result" asChild>
              <Pressable className="border-t p-1 flex-row justify-between items-center bg-gray-100 dark:bg-gray-900">
                <Text className="text-green-600">View</Text>
                <ChevronRightIcon color="#10B981" size={18} />
              </Pressable>
            </Link>
          </View>
        </View>
        <View className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 mt-3 w-full">
          <View className="border-b border-gray-200 pb-2">
            <Text className="text-gray-900 dark:text-gray-200 text-lg font-medium">Today's Timetable</Text>
          </View>
          <View className="pt-2 w-full ">
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

