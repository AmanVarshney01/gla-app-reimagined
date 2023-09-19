import { View, Text, ScrollView, Pressable, FlatList } from "react-native";
import { useState } from "react";
// import ResultChart from "@/components/ResultChart";
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
  // console.log(Object.keys(resultData));

  return (
    <ScrollView
      className=" bg-neutral-100 dark:bg-neutral-900"
      showsVerticalScrollIndicator={false}
    >
      <View className=" bg-neutral-100 p-2 gap-2 dark:bg-neutral-900">
        {/* <Text className="">Result</Text> */}

        {/* <ScrollView horizontal={true} className="">
        <ResultChart/>
      </ScrollView> */}

        <View className=" flex-row rounded-lg p-2">
          <FlatList
            // scrollEnabled={false}
            data={Object.keys(resultData)}
            horizontal={true}
            renderItem={({ item }) => (
              <Pressable
                className=" px-3 py-2 rounded-lg border  mx-2"
                onPress={() => setSelectedSemester(`${item}`)}
                style={{
                  backgroundColor:
                    selectedSemester == `${item}` ? "#16A34A" : "transparent",
                  borderColor:
                    selectedSemester == `${item}` ? "transparent" : "#D4D4D8",
                  // shadowColor: selectedSemester == "semester1" ? "#16A34A" : "transparent",
                }}
              >
                <Text
                  className=" text-lg"
                  style={{
                    color: selectedSemester == `${item}` ? "white" : "gray",
                  }}
                >
                  {item.slice(0, -1).charAt(0).toUpperCase() + item.slice(1, -1) + " " + item.slice(-1)}
                </Text>
              </Pressable>
            )}
          />
        </View>
        <View className=" bg-white rounded-lg py-2 dark:bg-neutral-800">
          <View className=" flex-row bg-neutral-200 py-2 dark:bg-neutral-700">
            <View className=" w-[40%] items-center">
              <Text className=" text-base font-bold text-neutral-900 dark:text-neutral-100">
                Subject Code
              </Text>
            </View>
            <View className=" w-[20%] items-center">
              <Text className=" text-base font-bold text-neutral-900 dark:text-neutral-100">
                Grade
              </Text>
            </View>
            <View className=" w-[20%] items-center">
              <Text className=" text-base font-bold text-neutral-900 dark:text-neutral-100">
                GP
              </Text>
            </View>
            <View className=" w-[20%] items-center">
              <Text className=" text-base font-bold text-neutral-900 dark:text-neutral-100">
                Credit
              </Text>
            </View>
          </View>
          <FlatList
            scrollEnabled={false}
            data={resultData[selectedSemester].subjects}
            keyExtractor={(item) => item.subjectCode}
            renderItem={({ item }) => (
              <View className=" flex-row justify-between  py-2 border-b border-b-black/10">
                <View className=" w-[40%] items-center">
                  <Text className=" text-base text-neutral-900 dark:text-neutral-100">
                    {item.subjectCode}
                  </Text>
                </View>
                <View className=" w-[20%]  items-center">
                  <Text className=" text-base text-neutral-900 dark:text-neutral-100">
                    {item.grade}
                  </Text>
                </View>
                <View className=" w-[20%]  items-center">
                  <Text className=" text-base text-neutral-900 dark:text-neutral-100">
                    {item.gp}
                  </Text>
                </View>
                <View className=" w-[20%] items-center">
                  <Text className=" text-base text-neutral-900 dark:text-neutral-100">
                    {item.credit}
                  </Text>
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
                  <Text className=" text-base text-neutral-900 dark:text-neutral-100">
                    {item.subjectCode}
                  </Text>
                </View>
                <View className=" w-[20%] items-center">
                  <Text className=" text-base text-neutral-900 dark:text-neutral-100">
                    {item.grade}
                  </Text>
                </View>
                <View className=" w-[20%]  items-center">
                  <Text className=" text-base text-neutral-900 dark:text-neutral-100">
                    {item.gp}
                  </Text>
                </View>
                <View className=" w-[20%] items-center">
                  <Text className=" text-base text-neutral-900 dark:text-neutral-100">
                    {item.credit}
                  </Text>
                </View>
              </View>
            )}
          />
          <View className="  py-1">
            <View className=" flex-row justify-between py-2 bg-neutral-200 dark:bg-neutral-700">
              <View className=" w-[15%] items-center ">
                <Text className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  STC
                </Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  SGP
                </Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  SPI
                </Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  CC
                </Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  CGP
                </Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  CPI
                </Text>
              </View>
            </View>
            <View className=" flex-row justify-between py-2 border-b border-b-black/10">
              <View className=" w-[15%] items-center ">
                <Text className=" text-base text-neutral-900 dark:text-neutral-100">
                  {resultData[selectedSemester].stc}
                </Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className=" text-base text-neutral-900 dark:text-neutral-100">
                  {resultData[selectedSemester].sgp}
                </Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className=" text-base text-neutral-900 dark:text-neutral-100">
                  {resultData[selectedSemester].spi}
                </Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className=" text-base text-neutral-900 dark:text-neutral-100">
                  {resultData[selectedSemester].cc}
                </Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className=" text-base text-neutral-900 dark:text-neutral-100">
                  {resultData[selectedSemester].cgp}
                </Text>
              </View>
              <View className=" w-[15%] items-center ">
                <Text className=" text-base text-neutral-900 dark:text-neutral-100">
                  {resultData[selectedSemester].cpi}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
