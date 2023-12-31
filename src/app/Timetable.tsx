import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, FlatList } from "react-native";
// import { Calendar } from "react-native-calendars";
// import { ChevronDownIcon, ChevronUpIcon } from "react-native-heroicons/solid";
import timetableData from "../../assets/data/timetable.json";
import TimetableCard from "@/components/TimetableCard";
// import { AnimatePresence, MotiView } from "moti";
import { useColorScheme } from "nativewind";
import CalendarStrip from "react-native-calendar-strip";

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
  const [selectedDate, setSelectedDate] = useState("2023-09-02") as any;
  const [isCalendarVisible, setCalendarVisibility] = useState<boolean>(false);

  const onDateSelect = (date: any) => {
    setSelectedDate(date.format("YYYY-MM-DD"));
  };

  const toggleCalendarVisibility = () => {
    setCalendarVisibility(!isCalendarVisible);
  };

  const renderTimetableForDate = () => {
    if (!selectedDate) {
      return (
        <View className="items-center m-3 dark:bg-neutral-800">
          <Text className="text-secondary text-lg dark:text-neutral-100">
            Please select a date to view the timetable.
          </Text>
        </View>
      );
    }

    const timetableForSelectedDate = timetable[selectedDate];

    if (!timetableForSelectedDate) {
      return (
        <View className="items-center m-3 dark:bg-neutral-800">
          <Text className=" text-red-600 text-lg">No Timetable Found.</Text>
        </View>
      );
    }

    return (
      // <View className="bg-white shadow shadow-stroke rounded-lg w-full dark:bg-neutral-800">
      <FlatList
        // scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        className="bg-white shadow shadow-stroke rounded-lg dark:bg-neutral-800 mt-3"
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
        contentContainerStyle={{ padding: 8 }} // Fix styling issue with bottom
      />
      // </View>
    );
  };

  const [year, month, day] = selectedDate.split("-");
  const formattedDate = `${day} - ${month} - ${year}`;
  const { colorScheme } = useColorScheme();

  return (
    // <View className="bg-neutral-100 dark:bg-neutral-900">
    <View className="p-2 bg-neutral-100 dark:bg-neutral-900 flex-1">
      {/* <Pressable
          onPress={toggleCalendarVisibility}
          className="w-full bg-white flex-row justify-between px-4 items-center shadow shadow-stroke rounded-lg my- py-2 active:bg-neutral-200 dark:bg-neutral-800 dark:active:bg-neutral-900"
        >
          <Text className="text-2xl dark:text-neutral-100">{formattedDate}</Text>
          {isCalendarVisible ? (
            <ChevronUpIcon color="#16A34A" size={18} />
          ) : (
            <ChevronDownIcon color="#16A34A" size={18} />
          )}
        </Pressable> */}
      {/* <View className=""> */}
      {/* <AnimatePresence>
            {isCalendarVisible && (
              <MotiView from={{ translateY: -5, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} exit={{ translateY: -5, opacity: 0 }} transition={{
                type: 'timing',
                duration: 200,
              }}>
                <Calendar
                  onDayPress={onDateSelect}
                  markedDates={{ [selectedDate]: { selected: true } }}
                  className="rounded-lg bg-white shadow shadow-stroke mt-3 dark:bg-neutral-800"
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
                    textDisabledColor: 'neutral',
                  }}
                />
              </MotiView>
            )}
          </AnimatePresence> */}
      <CalendarStrip
        scrollable
        // scrollerPaging={true}
        onDateSelected={(date) => onDateSelect(date)}
        selectedDate={selectedDate}
        calendarHeaderContainerStyle={{ paddingBottom: 15 }}
        style={{ paddingBottom: 20, paddingTop: 15, height: 100, borderRadius: 10 }}
        calendarColor={colorScheme == "light" ? "white" : "rgb(38 38 38)"}
        daySelectionAnimation={{ type: 'background', duration: 0, highlightColor: '#16A34A' }}
        // iconLeftStyle={{color: colorScheme == "light" ? "black" : "white"}}
        calendarHeaderStyle={{ fontSize: 20, color: colorScheme == "light" ? "black" : "white" }}
        dateNumberStyle={{ color: colorScheme == "light" ? "black" : "white" }}
        dateNameStyle={{ color: colorScheme == "light" ? "black" : "white" }}
        // iconContainer={{flex: 0.1}}
        highlightDateNumberStyle={{ color: 'white' }}
        highlightDateNameStyle={{ color: 'white' }}

      />
      {/* </View> */}

      {renderTimetableForDate()}
    </View>

  )
}

export default TimetableScreen;
