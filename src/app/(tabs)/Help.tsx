import { View, Text, ScrollView, FlatList, Pressable } from "react-native";
import help from "../../../assets/data/help.json";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useMemo, useRef, useState } from "react";

export default function HelpScreen() {
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
          <View className="bg-white dark:bg-neutral-800 rounded-lg p-4 mb-2">
            <Text className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
              {item.name}
            </Text>
            <Text className="text-lg text-neutral-500 dark:text-neutral-400">
              {item.phoneNumber}
            </Text>
            <Text className="text-lg text-neutral-500 dark:text-neutral-400">
              {item.email}
            </Text>
            <Text className="text-lg text-neutral-500 dark:text-neutral-400">
              {item.role}
            </Text>
          </View>
        )}
      />
    );
  };

  return (
    <>
      <ScrollView
        className="bg-neutral-100 dark:bg-neutral-900"
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-neutral-100 dark:bg-neutral-900">
          <FlatList
            scrollEnabled={false}
            data={Object.keys(helpData)}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  setCurrentHelp(item);
                  bottomSheetRef.current?.expand();
                }}
                className="bg-white dark:bg-neutral-800 rounded-lg p-4 mb-2"
              >
                <Text className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                  {item}
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
      >
        <BottomSheetScrollView>
          <HelpBottomSheet />
        </BottomSheetScrollView>
      </BottomSheet>
    </>
  );
}
