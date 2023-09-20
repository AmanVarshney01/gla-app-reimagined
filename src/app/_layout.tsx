import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";
// import StatusBar from "expo-status-bar";
import "../../global.css";
import * as NavigationBar from "expo-navigation-bar";
import { useColorScheme } from "nativewind";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  NavigationBar.setBackgroundColorAsync(
    colorScheme == "light" ? "white" : "rgb(23 23 23)"
  );
  // StatusBar.setStatusBarBackgroundColor('light-content', true)
  // StatusBar.setBackgroundColor("#16A34A");
  StatusBar.setBarStyle("light-content");
  const [loaded, error] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#15803D",
        },
        headerTintColor: "#fffffe",
        animation: "slide_from_right",
      }}
    
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="Settings" />
      <Stack.Screen name="Attendance" />
      <Stack.Screen name="Hostel" />
      <Stack.Screen
        name="Result"
        options={{
          title: "Result",
        }}
      />
      <Stack.Screen
        name="Timetable"
        options={{
          title: "Timetable",
          // presentation: 'modal'
        }}
      />
      <Stack.Screen
        name="JoinClub"
        options={{
          title: "Join Club",
        }}
      />
      <Stack.Screen
        name="FeeDetails"
        options={{
          title: "Fee Details",
        }}
      />
      <Stack.Screen name="Assignments" />
      <Stack.Screen name="Library" />
    </Stack>
  );
}
