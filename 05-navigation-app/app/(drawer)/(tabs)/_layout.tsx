import Ionicons from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "indigo",
        //headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={{
          title: "Stack",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="user-plus" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home Screen",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color }) => (
            <Ionicons size={24} name="star" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
