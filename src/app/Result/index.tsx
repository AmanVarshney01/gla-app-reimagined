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
  // const [isSelectedPracticals, setIsSelectedPracticals] = useState<boolean>(false);

  const resultData: Record<string, semesterData> = result;

  return (
    <ScrollView
      className=" bg-neutral-100 dark:bg-neutral-900"
      showsVerticalScrollIndicator={false}
    >
      <View className=" flex-1 bg-neutral-100 p-2 gap-2 dark:bg-neutral-900">
        {/* <Text className="">Result</Text> */}

        {/* <ScrollView horizontal={true} className="">
        <ResultChart/>
      </ScrollView> */}

        <View className=" flex-row rounded-lg p-2">
          <Pressable
            className=" px-3 py-2 rounded-lg border  mx-2"
            onPress={() => setSelectedSemester("semester1")}
            style={{
              backgroundColor:
                selectedSemester == "semester1" ? "#16A34A" : "#F4F4F5",
              borderColor:
                selectedSemester == "semester1" ? "transparent" : "#D4D4D8",
              // shadowColor: selectedSemester == "semester1" ? "#16A34A" : "transparent",
            }}
          >
            <Text
              className=" text-lg"
              style={{
                color: selectedSemester == "semester1" ? "white" : "gray",
              }}
            >
              Semester I
            </Text>
          </Pressable>
          <Pressable
            className=" px-3 py-2 rounded-lg border  mx-2"
            onPress={() => setSelectedSemester("semester2")}
            style={{
              backgroundColor:
                selectedSemester == "semester2" ? "#16A34A" : "#F4F4F5",
              borderColor:
                selectedSemester == "semester2" ? "transparent" : "#D4D4D8",
            }}
          >
            <Text
              style={{
                color: selectedSemester == "semester2" ? "white" : "gray",
              }}
              className=" text-lg"
            >
              Semester II
            </Text>
          </Pressable>
        </View>
        <View className=" bg-white rounded-lg py-2 dark:bg-neutral-800">
          <View className=" flex-row bg-neutral-200 py-2 dark:bg-neutral-700">
            <View className=" w-[40%] items-center">
              <Text className=" text-base font-bold text-neutral-900 dark:text-neutral-100">Subject Code</Text>
            </View>
            <View className=" w-[20%] items-center">
              <Text className=" text-base font-bold text-neutral-900 dark:text-neutral-100">Grade</Text>
            </View>
            <View className=" w-[20%] items-center">
              <Text className=" text-base font-bold text-neutral-900 dark:text-neutral-100">GP</Text>
            </View>
            <View className=" w-[20%] items-center">
              <Text className=" text-base font-bold text-neutral-900 dark:text-neutral-100">Credit</Text>
            </View>
          </View>
          <FlatList
            scrollEnabled={false}
            data={resultData[selectedSemester].subjects}
            keyExtractor={(item) => item.subjectCode}
            renderItem={({ item }) => (
              <View className=" flex-row justify-between  py-2 border-b border-b-black/10">
                <View className=" w-[40%] items-center">
                  <Text className=" text-base text-neutral-900 dark:text-neutral-100">{item.subjectCode}</Text>
                </View>
                <View className=" w-[20%]  items-center">
                  <Text className=" text-base text-neutral-900 dark:text-neutral-100">{item.grade}</Text>
                </View>
                <View className=" w-[20%]  items-center">
                  <Text className=" text-base text-neutral-900 dark:text-neutral-100">{item.gp}</Text>
                </View>
                <View className=" w-[20%] items-center">
                  <Text className=" text-base text-neutral-900 dark:text-neutral-100">{item.credit}</Text>
                </View>
              </View>
            )}
          />
          <FlatList
            scrollEnabled={false}
            data={resultData[selectedSemester].practicals}
            keyExtractor={(item) => item.subjectCode}
            renderItem={({ item }) => (
              <View className=" flex-row justify-between py-2 border-b border-b-black/10">
                <View className=" w-[40%] items-center">
                  <Text className=" text-base text-neutral-900 dark:text-neutral-100">{item.subjectCode}</Text>
                </View>
                <View className=" w-[20%] items-center">
                  <Text className=" text-base text-neutral-900 dark:text-neutral-100">{item.grade}</Text>
                </View>
                <View className=" w-[20%]  items-center">
                  <Text className=" text-base text-neutral-900 dark:text-neutral-100">{item.gp}</Text>
                </View>
                <View className=" w-[20%] items-center">
                  <Text className=" text-base text-neutral-900 dark:text-neutral-100">{item.credit}</Text>
                </View>
              </View>
            )}
          />
          <View className="  py-1">
            <View className=" flex-row justify-between py-2 bg-neutral-200 dark:bg-neutral-700">
              <View className=" w-[15%] items-center ">
                <Text className=" font-bold text-neutral-900 dark:text-neutral-100">STC</Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className=" font-bold text-neutral-900 dark:text-neutral-100">SGP</Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className=" font-bold text-neutral-900 dark:text-neutral-100">SPI</Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className=" font-bold text-neutral-900 dark:text-neutral-100">CC</Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className=" font-bold text-neutral-900 dark:text-neutral-100">CGP</Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className=" font-bold text-neutral-900 dark:text-neutral-100">CPI</Text>
              </View>
            </View>
            <View className=" flex-row justify-between py-2 border-b border-b-black/10">
              <View className=" w-[15%] items-center ">
                <Text className=" text-neutral-900 dark:text-neutral-100">{resultData[selectedSemester].stc}</Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className=" text-neutral-900 dark:text-neutral-100">{resultData[selectedSemester].sgp}</Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className=" text-neutral-900 dark:text-neutral-100">{resultData[selectedSemester].spi}</Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className=" text-neutral-900 dark:text-neutral-100">{resultData[selectedSemester].cc}</Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className=" text-neutral-900 dark:text-neutral-100">{resultData[selectedSemester].cgp}</Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className=" text-neutral-900 dark:text-neutral-100">{resultData[selectedSemester].cpi}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
