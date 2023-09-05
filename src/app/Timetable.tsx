import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, FlatList } from "react-native";
import { Calendar } from "react-native-calendars";
import { ChevronDownIcon, ChevronUpIcon } from "react-native-heroicons/solid";
import timetableData from "../../assets/data/timetable.json";
import TimetableCard from "@/components/TimetableCard";

// Removed unused daysOfWeek array

// Removed commented out classSchedule

// Renamed classSchedule to timetable
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
        <View className="items-center m-3">
          <Text className="text-secondary text-lg">
            Please select a date to view the timetable.
          </Text>
        </View>
      );
    }

    const timetableForSelectedDate = timetable[selectedDate];

    if (!timetableForSelectedDate) {
      return (
        <View className="items-center m-3">
          <Text className="text-secondary text-lg">No Timetable Found.</Text>
        </View>
      );
    }

    return (
      <View className="bg-white my-3 shadow shadow-stroke rounded-lg w-full p-2">
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
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="p-2 bg-gray-100">
        <Pressable
          onPress={toggleCalendarVisibility}
          className="w-full bg-white flex-row justify-between px-4 items-center shadow shadow-stroke rounded-lg my- py-2 active:bg-gray-100"
        >
          {/* <View> */}
          {/* <Text>{isCalendarVisible ? "Hide Calendar" : "Show Calendar"}</Text> */}
          <Text className="text-2xl">{formattedDate}</Text>
          {isCalendarVisible ? (
            <ChevronUpIcon color="#078080" size={18} />
          ) : (
            <ChevronDownIcon color="#078080" size={18} />
          )}

          {/* </View> */}
        </Pressable>
        <View>
        {isCalendarVisible && (
          <Calendar
            onDayPress={onDateSelect}
            markedDates={{ [selectedDate]: { selected: true } }}
            className="rounded-lg bg-white shadow shadow-stroke mt-3"
            theme={{
              selectedDayBackgroundColor: "#0F766E",
              todayTextColor: "#078080",
              arrowColor: "#078080",
            }}
          />
        )}
        </View>
    
        {renderTimetableForDate()}
      </View>
    </ScrollView>
  );
};

export default TimetableScreen;

