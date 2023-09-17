import { View, Text, ScrollView, Pressable, FlatList } from "react-native";
import { useState } from "react";
import ResultChart from "@/components/ResultChart";
import result from "../../../assets/data/result.json";

export default function Result() {
  type semesterData = {
    subjects: {
      subjectCode: string;
      grade: string;
      gp: string;
      credit: string;
    }[];
    practicals: {
      subjectCode: string;
      grade: string;
      gp: string;
      credit: string;
    }[];
    stc: string;
    sgp: string;
    spi: string;
    cc: string;
    cgp: string;
    cpi: string;
  };

  const [selectedSemester, setSelectedSemester] = useState<string>("semester2");
  const [isSelectedPracticals, setIsSelectedPracticals] =
    useState<boolean>(false);

  const resultData: Record<string, semesterData> = result;

  return (
    <ScrollView className="" showsVerticalScrollIndicator={false}>
      <View className=" flex-1 bg-neutral-100">
        {/* <Text className="">Result</Text> */}

        {/* <ScrollView horizontal={true} className="">
        <ResultChart/>
      </ScrollView> */}

        <View className=" flex-row">
          <Pressable
            onPress={() => setSelectedSemester("semester1")}
            style={{
              backgroundColor:
                selectedSemester == "semester1" ? "gray" : "transparent",
            }}
          >
            <Text>Semester I</Text>
          </Pressable>
          <Pressable
            onPress={() => setSelectedSemester("semester2")}
            style={{
              backgroundColor:
                selectedSemester == "semester2" ? "gray" : "transparent",
            }}
          >
            <Text>Semester II</Text>
          </Pressable>
        </View>
        <View className=" p-2">
          <View className=" flex-row">
            <View className=" w-[40%] items-center">
              <Text className=" text-lg ">Subject Code</Text>
            </View>
            <View className=" w-[20%] items-center">
              <Text className=" text-lg ">Grade</Text>
            </View>
            <View className=" w-[20%] items-center">
              <Text className=" text-lg ">GP</Text>
            </View>
            <View className=" w-[20%] items-center">
              <Text className=" text-lg ">Credit</Text>
            </View>
          </View>
          <FlatList
            scrollEnabled={false}
            data={resultData[selectedSemester].subjects}
            keyExtractor={(item) => item.subjectCode}
            renderItem={({ item }) => (
              <View className=" flex-row justify-between">
                <View className=" w-[40%] border items-center">
                  <Text className=" text-base">{item.subjectCode}</Text>
                </View>
                <View className=" w-[20%] border  items-center">
                  <Text className=" text-base">{item.grade}</Text>
                </View>
                <View className=" w-[20%] border  items-center">
                  <Text className=" text-base">{item.gp}</Text>
                </View>
                <View className=" w-[20%] border items-center">
                  <Text className=" text-base">{item.credit}</Text>
                </View>
              </View>
            )}
          />
          <View className=" border"></View>
          <FlatList
            scrollEnabled={false}
            data={resultData[selectedSemester].practicals}
            keyExtractor={(item) => item.subjectCode}
            renderItem={({ item }) => (
              <View className=" flex-row justify-between">
                <View className=" w-[40%] border items-center">
                  <Text className=" text-base">{item.subjectCode}</Text>
                </View>
                <View className=" w-[20%] border  items-center">
                  <Text className=" text-base">{item.grade}</Text>
                </View>
                <View className=" w-[20%] border  items-center">
                  <Text className=" text-base">{item.gp}</Text>
                </View>
                <View className=" w-[20%] border items-center">
                  <Text className=" text-base">{item.credit}</Text>
                </View>
              </View>
            )}
          />
          <View className=" border"></View>
          <View className=" flex-row justify-between">
            <Text>STC: {resultData[selectedSemester].stc}</Text>
            <Text>SGP: {resultData[selectedSemester].sgp}</Text>
            <Text>SPI: {resultData[selectedSemester].spi}</Text>
            <Text>CC: {resultData[selectedSemester].cc}</Text>
            <Text>CGP: {resultData[selectedSemester].cgp}</Text>
            <Text>CPI: {resultData[selectedSemester].cpi}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
