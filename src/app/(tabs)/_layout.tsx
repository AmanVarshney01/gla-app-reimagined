import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import Colors from "@/constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={26} style={{ marginBottom: -3 }} {...props} />;
}

function HomeHeader() {
  return (
    <View className=" ">
      <Text className=" text-[#fffffe] font-bold text-xl">GLA University</Text>
      <Text className="text-[#fffffe] text-lg -mt-1">Mathura</Text>
    </View>
  )
}
function header(title: string) {
  return (
    <View>
        <Text className=" text-[#fffffe] font-bold text-xl">{title}</Text>
    </View>
)
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarActiveTintColor: "#078080",
        // tabBarShowLabel: false,
        // tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fffffe",
          borderTopColor: "#232323",
          borderBottomWidth: 0,
          borderTopWidth: 1,
          height: 58,
          paddingBottom: 8,
        },
        headerTitle: HomeHeader,
        headerStyle: {
          backgroundColor: "#026c45",
          // borderBottomWidth: 1,
          shadowColor: "gray",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // headerTitle: HomeHeader,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name="info-circle"
          //           size={25}
          //           color={Colors[colorScheme ?? "light"].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
          // headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          headerTitle: () => header("Profile"),
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          // headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Notifications"
        options={{
          title: "Notifications",
          headerTitle: () => header("Notifications"),
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
          // headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Help"
        options={{
          title: "Help",
          headerTitle: () => header("Help"),
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="handshake-o" color={color} />
          ),
          // headerShown: false,
        }}
      />
      <Tabs.Screen
        name="More"
        options={{
          title: "More",
          headerTitle: () => header("More"),
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="bars" color={color} />
          ),
          // headerShown: false,
        }}
      />
    </Tabs>
  );
}
