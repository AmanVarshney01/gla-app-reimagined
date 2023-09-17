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
      className=" bg-neutral-100"
      showsVerticalScrollIndicator={false}
    >
      <View className=" flex-1 bg-neutral-100 p-2 gap-2">
        {/* <Text className="">Result</Text> */}

        {/* <ScrollView horizontal={true} className="">
        <ResultChart/>
      </ScrollView> */}

        <View className=" flex-row rounded-lg p-2">
          <Pressable
            className=" px-3 py-2 rounded-lg  mx-2"
            onPress={() => setSelectedSemester("semester1")}
            style={{
              backgroundColor:
                selectedSemester == "semester1" ? "#16A34A" : "transparent",
              // borderColor: selectedSemester == "semester1" ? "black" : "#D4D4D8",
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
            className=" px-3 py-2 rounded-lg  mx-2"
            onPress={() => setSelectedSemester("semester2")}
            style={{
              backgroundColor:
                selectedSemester == "semester2" ? "#16A34A" : "transparent",
              // borderColor: selectedSemester == "semester2" ? "black" : "#D4D4D8",
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
        <View className=" bg-white rounded-lg py-2">
          <View className=" flex-row bg-neutral-200 py-2">
            <View className=" w-[40%] items-center">
              <Text className=" text-base font-bold ">Subject Code</Text>
            </View>
            <View className=" w-[20%] items-center">
              <Text className=" text-base font-bold ">Grade</Text>
            </View>
            <View className=" w-[20%] items-center">
              <Text className=" text-base font-bold ">GP</Text>
            </View>
            <View className=" w-[20%] items-center">
              <Text className=" text-base font-bold ">Credit</Text>
            </View>
          </View>
          <FlatList
            scrollEnabled={false}
            data={resultData[selectedSemester].subjects}
            keyExtractor={(item) => item.subjectCode}
            renderItem={({ item }) => (
              <View className=" flex-row justify-between  py-2 border-b border-b-black/10">
                <View className=" w-[40%] items-center">
                  <Text className=" text-base">{item.subjectCode}</Text>
                </View>
                <View className=" w-[20%]  items-center">
                  <Text className=" text-base">{item.grade}</Text>
                </View>
                <View className=" w-[20%]  items-center">
                  <Text className=" text-base">{item.gp}</Text>
                </View>
                <View className=" w-[20%] items-center">
                  <Text className=" text-base">{item.credit}</Text>
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
                  <Text className=" text-base">{item.subjectCode}</Text>
                </View>
                <View className=" w-[20%]  items-center">
                  <Text className=" text-base">{item.grade}</Text>
                </View>
                <View className=" w-[20%]  items-center">
                  <Text className=" text-base">{item.gp}</Text>
                </View>
                <View className=" w-[20%] items-center">
                  <Text className=" text-base">{item.credit}</Text>
                </View>
              </View>
            )}
          />
          <View className="  py-1">
            <View className=" flex-row justify-between py-2 bg-neutral-200">
              <View className=" w-[15%] items-center ">
                <Text className=" font-bold">STC</Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className=" font-bold">SGP</Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className=" font-bold">SPI</Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className=" font-bold">CC</Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className=" font-bold">CGP</Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className=" font-bold">CPI</Text>
              </View>
            </View>
            <View className=" flex-row justify-between py-2 border-b border-b-black/10">
              <View className=" w-[15%] items-center ">
                <Text>{resultData[selectedSemester].stc}</Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text>{resultData[selectedSemester].sgp}</Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text>{resultData[selectedSemester].spi}</Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text>{resultData[selectedSemester].cc}</Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text>{resultData[selectedSemester].cgp}</Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text>{resultData[selectedSemester].cpi}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
