import {
  View,
  Text,
  ScrollView,
  FlatList,
  Pressable,
  // Image,
} from "react-native";
import help from "../../../assets/data/help.json";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useMemo, useRef, useState } from "react";
import { useColorScheme } from "nativewind";
import CustomBackdrop from "@/components/CustomBackdrop";
import { PhoneIcon } from "react-native-heroicons/solid";
import { Image } from "expo-image";

export default function HelpScreen() {
  const { colorScheme } = useColorScheme();
  const [currentHelp, setCurrentHelp] = useState<string>("");

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["30%", "80%"], []);

  type helpDataType = Record<
    string,
    {
      name: string;
      phoneNumber: number;
      email: string;
      role: string;
    }[]
  >;

  const helpData: helpDataType = help;

  const HelpBottomSheet = () => {
    return (
      <FlatList
        scrollEnabled={false}
        data={helpData[currentHelp]}
        renderItem={({ item }) => (
          <View className="bg-white dark:bg-neutral-800 rounded-lg p-4 mb-2 flex-row items-center">
            <Image
              className="rounded-full w-16 h-16 mr-4"
              source={require("../../../assets/images/photo.png")}
              contentFit="cover"
              transition={500}
            />
            <View className="flex-1 gap-[2px]">
              <View className=" flex-row flex-wrap">
                <Text className=" text-lg text-neutral-500 dark:text-neutral-400">
                  Name:{" "}
                </Text>
                <Text className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                  {item.name}
                </Text>
              </View>
              <View className="flex-row">
                <Text className=" text-base text-neutral-500 dark:text-neutral-400">
                  Role:{" "}
                </Text>
                <Text className="text-base text-neutral-500 dark:text-neutral-400">
                  {item.role}
                </Text>
              </View>
              <View className="flex-row">
                <Text className=" text-base text-neutral-500 dark:text-neutral-400">
                  Email:{" "}
                </Text>
                <Text className="text-base text-neutral-500 dark:text-neutral-400 ">
                  {item.email}
                </Text>
              </View>
              <View className=" flex-row">
                <Text className=" text-base text-neutral-500 dark:text-neutral-400">
                  Phone:{" "}
                </Text>
                <PhoneIcon size={25} color={"#3B82F6"} />
                <Text className="text-base text-blue-600 underline ml-1">
                  {item.phoneNumber}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    );
  };

  const correctedHelpFormat = (str: string) => {
    if (str == "hostel") return "Hostel";
    else if (str == "antiRagging") return "Anti Ragging";
    else if (str == "fireSafety") return "Fire Safety";
    else if (str == "medical") return "Medical";
    else if (str == "antiSexualHarassment") return "Anti Sexual Harassment";
    else if (str == "academic") return "Academic";
  };

  return (
    <>
      <ScrollView
        className="bg-neutral-100 dark:bg-neutral-900"
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-neutral-100 dark:bg-neutral-900 p-4">
          <FlatList
            scrollEnabled={false}
            data={Object.keys(helpData)}
            numColumns={2}
            contentContainerStyle={
              {
                // justifyContent: "between",
                // flexDirection: "row",
                // width: "100%",
              }
            }
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  setCurrentHelp(item);
                  bottomSheetRef.current?.expand();
                }}
                className="bg-white dark:bg-neutral-800 rounded-lg mb-2 mx-1 p-7 flex-1 items-center justify-center"
              >
                <Text className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                  {correctedHelpFormat(item)}
                </Text>
              </Pressable>
            )}
          />
        </View>
      </ScrollView>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        backdropComponent={(props) => <CustomBackdrop {...props} />}
        backgroundStyle={{
          backgroundColor: colorScheme == "light" ? "white" : "rgb(38 38 38)",
        }}
      >
        <BottomSheetScrollView>
          <HelpBottomSheet />
        </BottomSheetScrollView>
      </BottomSheet>
    </>
  );
}
