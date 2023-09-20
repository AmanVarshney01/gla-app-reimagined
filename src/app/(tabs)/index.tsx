import {
  View,
  Text,
  ScrollView,
  FlatList,
  Pressable,
  RefreshControl,
} from "react-native";
import { Image } from "expo-image";
import { useState, useCallback } from "react";
import profile1 from "../../../assets/data/profile1.json";
import news from "../../../assets/data/news.json";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import TimetableCard from "@/components/TimetableCard";
import timetableData from "../../../assets/data/timetable.json";
import { ChevronRightIcon } from "react-native-heroicons/solid";
import { Link } from "expo-router";
import { useColorScheme } from "nativewind";
import { FadeInUp } from "react-native-reanimated";
import Animated from "react-native-reanimated";

export default function HomeScreen() {
  const { colorScheme } = useColorScheme();
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
      className="bg-neutral-100 dark:bg-neutral-900"
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View className="justify-center items-center bg-neutral-100 dark:bg-neutral-900 p-4">
        <View className="flex-row items-center bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-4 w-full mb-3">
          <Image
            className="rounded-full w-16 h-16 mr-4"
            contentFit="cover"
            transition={500}
            source={require("../../../assets/images/photo.png")}
          />
          <View>
            <Text className="text-neutral-900 dark:text-neutral-100 text-2xl">
              {currentProfile.name}
            </Text>
            <Text className="text-neutral-700 dark:text-neutral-200">
              {currentProfile.course} - {currentProfile.branch} [{" "}
              {currentProfile.semester} Sem ]
            </Text>
            <View className="w-full">
              <Text className="text-neutral-700 dark:text-neutral-200">
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
        <Animated.View
          entering={FadeInUp.duration(200).delay(100)}
          className="flex-row"
        >
          <Link href="/Attendance" asChild>
            <Pressable className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-4 items-center mr-2 justify-between">
              <AnimatedCircularProgress
                size={95}
                fill={currentProfile.attendance}
                width={7}
                duration={1000}
                tintColor={
                  currentProfile.attendance >= 75 ? "rgb(22 163 74)" : "#EF4444"
                }
                backgroundColor={
                  colorScheme == "light" ? "#F3F4F6" : "rgb(23 23 23)"
                }
                rotation={0}
                lineCap="round"
                children={(fill) => (
                  <Text className="text-lg dark:text-neutral-100">
                    {Math.round(fill)}%
                  </Text>
                )}
              />
              <Text className="mt-2 text-neutral-700 dark:text-neutral-200 text-base">
                Attendance
              </Text>
            </Pressable>
          </Link>

          <Link href="/Timetable" asChild>
            <Pressable className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg flex-1 p-2">
              <View className="flex-1">
                <Text className="text-xs text-neutral-800 dark:text-neutral-200">
                  Upcoming Class
                </Text>
                <View className="my-2">
                  <Text className="text-neutral-900 dark:text-neutral-200 text-lg leading-5 mb-1">
                    Object Oriented Programming Lab
                  </Text>
                  <Text className="text-neutral-700 dark:text-neutral-200 text-sm -mt-1 mb-3">
                    BCSC 0801
                  </Text>
                  <View className="flex-row border dark:border-neutral-200 rounded-lg justify-evenly divide-x dark:divide-neutral-200">
                    <View className="px-2">
                      <Text className="text-xs text-center dark:text-neutral-200">
                        AB-VIII 311
                      </Text>
                    </View>
                    <View className="flex-1 px-1">
                      <Text className="text-xs text-center dark:text-neutral-200">
                        1:00PM-2:00PM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View className="border-t p-1 mt-1 flex-row justify-between items-center bg-neutral-100 dark:bg-neutral-900">
                <Text className="text-green-600">View</Text>
                <ChevronRightIcon color="#10B981" size={18} />
              </View>
            </Pressable>
          </Link>
        </Animated.View>
        <Animated.View
          entering={FadeInUp.duration(200).delay(200)}
          className="bg-white dark:bg-neutral-800 shadow-lg rounded-lg mt-3 p-1 w-full"
        >
          <FlatList
            data={news}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View className="flex-row items-center">
                <View className="w-2 h-2 rounded-full bg-yellow-500"></View>
                <Text className="mx-2 dark:text-neutral-200">{item.title}</Text>
              </View>
            )}
          />
        </Animated.View>

        <Animated.View
          entering={FadeInUp.duration(200).delay(300)}
          className="flex-row mt-3 w-full"
        >
          <Link href="/Assignments" asChild>
            <Pressable className="bg-white dark:bg-neutral-800 shadow-lg rounded-lg p-2 mr-2">
              <View className="mb-2">
                <Text className="text-neutral-900 dark:text-neutral-200 text-3xl">
                  3
                </Text>
                <Text className="text-neutral-700 dark:text-neutral-300 text-base">
                  Assignments due
                </Text>
              </View>
              <View className="border-t p-1 flex-row justify-between items-center bg-neutral-100 dark:bg-neutral-900">
                <Text className="text-green-600">View</Text>
                <ChevronRightIcon color="#10B981" size={18} />
              </View>
            </Pressable>
          </Link>

          <Link href="/Result" asChild>
            <Pressable className="bg-white dark:bg-neutral-800 shadow-lg rounded-lg flex-1 p-2">
              <View className="mb-2">
                <Text className="text-neutral-900 dark:text-neutral-200 text-3xl">
                  93.50%
                </Text>
                <Text className="text-neutral-700 dark:text-neutral-300 text-base">
                  Result
                </Text>
              </View>
              <View className="border-t p-1 flex-row justify-between items-center bg-neutral-100 dark:bg-neutral-900">
                <Text className="text-green-600">View</Text>
                <ChevronRightIcon color="#10B981" size={18} />
              </View>
            </Pressable>
          </Link>
        </Animated.View>
        <Animated.View
          entering={FadeInUp.duration(200).delay(400)}
          className="bg-white dark:bg-neutral-800 shadow-lg rounded-lg p-2 mt-3 w-full"
        >
          <View className="border-b border-neutral-200 pb-2">
            <Text className="text-neutral-900 dark:text-neutral-200 text-lg font-medium">
              Today's Timetable
            </Text>
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
        </Animated.View>
      </View>
    </ScrollView>
  );
}
