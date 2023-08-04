import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { View, Text } from "@/components/Themed";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function HomeHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GLA University</Text>
      <Text style={styles.subtitle}>Mathura</Text>
    </View>
  )
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: HomeHeader,
          headerTitleStyle: {
            fontSize: 20,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          // headerShown: false,
        }}
      />
      {/* <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      /> */}
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          // headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
          // headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Help"
        options={{
          title: "Help",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="handshake-o" color={color} />
          ),
          // headerShown: false,
        }}
      />
    </Tabs>
  );
}


const styles = StyleSheet.create({
  container: {
    // paddingVertical: 16,
    // paddingHorizontal: 24,
    // marginTop: 5,
    flexDirection: 'column',
    // gap: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginTop: -4,
  },
});