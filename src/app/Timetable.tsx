import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import timetableData from "../../assets/data/timetable.json";
import TimetableCard from "@/components/TimetableCard";
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
      <FlatList
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
        contentContainerStyle={{ padding: 8 }}
      />
    );
  };

  const [year, month, day] = selectedDate.split("-");
  const formattedDate = `${day} - ${month} - ${year}`;
  const { colorScheme } = useColorScheme();

  return (
    <View className="p-2 bg-neutral-100 dark:bg-neutral-900 flex-1">
      <CalendarStrip
        scrollable
        onDateSelected={(date) => onDateSelect(date)}
        selectedDate={selectedDate}
        calendarHeaderContainerStyle={{ paddingBottom: 15 }}
        style={{
          paddingBottom: 20,
          paddingTop: 15,
          height: 100,
          borderRadius: 10,
        }}
        calendarColor={colorScheme == "light" ? "white" : "rgb(38 38 38)"}
        daySelectionAnimation={{
          type: "background",
          duration: 0,
          highlightColor: "#16A34A",
        }}
        calendarHeaderStyle={{
          fontSize: 20,
          color: colorScheme == "light" ? "black" : "white",
        }}
        dateNumberStyle={{ color: colorScheme == "light" ? "black" : "white" }}
        dateNameStyle={{ color: colorScheme == "light" ? "black" : "white" }}
        highlightDateNumberStyle={{ color: "white" }}
        highlightDateNameStyle={{ color: "white" }}
      />
      {renderTimetableForDate()}
    </View>
  );
};

export default TimetableScreen;
