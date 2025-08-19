import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const HomreScreen = () => {
  return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <CustomButton
          className="mb-4"
          color="primary"
          onPress={() => router.push("/tabs/(stack)/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          className="mb-4"
          color="secondary"
          onPress={() => router.push("/tabs/(stack)/profile")}
        >
          Perfil
        </CustomButton>

        <CustomButton
          className="mb-4 bg-slate-950"
          color="tertiary"
          onPress={() => router.push("/tabs/(stack)/settings")}
        >
          Configuraciones
        </CustomButton>
        {/* <Link href="/products">
          <Text className="text-blue-600 text-lg">Productos {""}</Text>
        </Link>
        <Link href="/profile">
          <Text className="text-blue-600 text-lg">Perfil {""}</Text>
        </Link>
        <Link href="/settings">
          <Text className="text-blue-600 text-lg">Configuraciones {""}</Text>
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomreScreen;
