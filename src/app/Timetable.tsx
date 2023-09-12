import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, FlatList } from "react-native";
import { Calendar } from "react-native-calendars";
import { ChevronDownIcon, ChevronUpIcon } from "react-native-heroicons/solid";
import timetableData from "../../assets/data/timetable.json";
import TimetableCard from "@/components/TimetableCard";
import { AnimatePresence, MotiView } from "moti";
import { useColorScheme } from "nativewind";

const timetable: Record<
  string,
  {
    subject: string;
    teacher: string;
    room: string;
    block: string;
    time: string;
    subjectCode: string;
    classType: string;
    attendance: string;
  }[]
> = timetableData;

const TimetableScreen = () => {
  const [selectedDate, setSelectedDate] = useState<string>("2023-09-02");
  const [isCalendarVisible, setCalendarVisibility] = useState<boolean>(false);

  const onDateSelect = (date: { dateString: string }) => {
    setSelectedDate(date.dateString);
  };

  const toggleCalendarVisibility = () => {
    setCalendarVisibility(!isCalendarVisible);
  };

  const renderTimetableForDate = () => {
    if (!selectedDate) {
      return (
        <View className="items-center m-3 dark:bg-gray-800">
          <Text className="text-secondary text-lg dark:text-gray-100">
            Please select a date to view the timetable.
          </Text>
        </View>
      );
    }

    const timetableForSelectedDate = timetable[selectedDate];

    if (!timetableForSelectedDate) {
      return (
        <View className="items-center m-3 dark:bg-gray-800">
          <Text className=" text-red-600 text-lg">No Timetable Found.</Text>
        </View>
      );
    }

    return (
      <View className="bg-white my-3 shadow shadow-stroke rounded-lg w-full p-2 dark:bg-gray-800">
        <FlatList
          scrollEnabled={false}
          data={timetableForSelectedDate}
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
    );
  };

  const [year, month, day] = selectedDate.split("-");
  const formattedDate = `${day} - ${month} - ${year}`;
  const { colorScheme } = useColorScheme();

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="bg-gray-100 dark:bg-gray-900">
      <View className="p-2 bg-gray-100 dark:bg-gray-900 flex-1">
        <Pressable
          onPress={toggleCalendarVisibility}
          className="w-full bg-white flex-row justify-between px-4 items-center shadow shadow-stroke rounded-lg my- py-2 active:bg-gray-200 dark:bg-gray-800 dark:active:bg-gray-900"
        >
          {/* <View> */}
          {/* <Text>{isCalendarVisible ? "Hide Calendar" : "Show Calendar"}</Text> */}
          <Text className="text-2xl dark:text-gray-100">{formattedDate}</Text>
          {isCalendarVisible ? (
            <ChevronUpIcon color="#16A34A" size={18} />
          ) : (
            <ChevronDownIcon color="#16A34A" size={18} />
          )}

          {/* </View> */}
        </Pressable>
        <View>
          <AnimatePresence>
            {isCalendarVisible && (
              <MotiView from={{ translateY: -5, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} exit={{ translateY: -5, opacity: 0 }} transition={{
                type: 'timing',
                duration: 200,
              }}>
                <Calendar
                  onDayPress={onDateSelect}
                  markedDates={{ [selectedDate]: { selected: true } }}
                  className="rounded-lg bg-white shadow shadow-stroke mt-3 dark:bg-gray-800"
                  theme={{
                    selectedDayBackgroundColor: "#16A34A",
                    todayTextColor: "#078080",
                    arrowColor: "#16A34A",
                    monthTextColor: "#16A34A",
                    // textDayFontWeight: "bold",
                    textMonthFontWeight: "bold",
                    // backgroundColor: "#16A34A",
                    calendarBackground: colorScheme == "light" ? "#fffffe" : "#1F2937",
                    dayTextColor: colorScheme == 'light' ? 'black' : 'white',
                    textDisabledColor: 'gray',
                  }}
                />
              </MotiView>
            )}
          </AnimatePresence>
        </View>

        {renderTimetableForDate()}
      </View>
    </ScrollView>
  );
};

export default TimetableScreen;
