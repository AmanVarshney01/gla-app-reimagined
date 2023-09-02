import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { ChevronDownIcon, ChevronUpIcon } from "react-native-heroicons/solid";

const daysOfWeek: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
const classSchedule: Record<string, { time: string; course: string }[]> = {
  "2023-09-02": [
    { time: "09:00 AM - 10:30 AM", course: "Mathematics" },
    { time: "11:00 AM - 12:30 PM", course: "Physics" },
  ],
  "2023-09-03": [
    { time: "09:00 AM - 10:30 AM", course: "Chemistry" },
    { time: "11:00 AM - 12:30 PM", course: "Computer Science" },
  ],
  // Add more dates and class schedules as needed
};

const TimetableScreen = () => {
  const [selectedDate, setSelectedDate] = useState<string>("2023-09-02");
  const [isCalendarVisible, setCalendarVisibility] = useState<boolean>(true);

  const onDateSelect = (date: { dateString: string }) => {
    setSelectedDate(date.dateString);
  };

  const toggleCalendarVisibility = () => {
    setCalendarVisibility(!isCalendarVisible);
  };

  const renderTimetableForDate = () => {
    if (!selectedDate) {
      return <Text>Please select a date to view the timetable.</Text>;
    }

    const timetableForSelectedDate = classSchedule[selectedDate];

    if (!timetableForSelectedDate) {
      return (
        <Text>There is no timetable available for the selected date.</Text>
      );
    }

    return (
      <View>
        {/* {timetableForSelectedDate.map((classInfo) => (
          <View key={classInfo.time}>
            <Text>{classInfo.time}</Text>
            <Text>{classInfo.course}</Text>
          </View>
        ))} */}
        <FlatList
          scrollEnabled={false}
          data={timetableForSelectedDate}
          renderItem={({ item }) => (
            <View className="flex-row items-center justify-between p-4 border border-stroke rounded-lg shadow shadow-stroke bg-white mb-3">
              <Text className="text-heading">{item.time}</Text>
              <Text className="text-heading">{item.course}</Text>
            </View>
          )}
          keyExtractor={(item) => item.time}
        />
      </View>
    );
  };

  const [year, month, day] = selectedDate.split("-");
  const formattedDate = `${day} - ${month} - ${year}`;
  return (
    <ScrollView className=" bg-background p-2">
      <Pressable onPress={toggleCalendarVisibility} className="w-full bg-white flex-row justify-between px-4 items-center shadow shadow-stroke rounded-lg my-3 py-2">
        {/* <View> */}
        {/* <Text>{isCalendarVisible ? "Hide Calendar" : "Show Calendar"}</Text> */}
        <Text className=" text-2xl">{formattedDate}</Text>
        {isCalendarVisible ? <ChevronUpIcon color="#078080" size={18} /> : <ChevronDownIcon color="#078080" size={18} />}
        
        {/* </View> */}
      </Pressable>
      {isCalendarVisible && (
        <Calendar
          onDayPress={onDateSelect}
          markedDates={{ [selectedDate]: { selected: true } }}
        />
      )}
      {renderTimetableForDate()}
    </ScrollView>
  );
};

export default TimetableScreen;
