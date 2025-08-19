import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <CustomButton
          className="mb-4"
          color="primary"
          onPress={() => router.push("/tabs/(stack)/home")}
        >
          Dashoboard
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
