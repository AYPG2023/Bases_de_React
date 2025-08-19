import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useNavigation } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";

const HomreScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <CustomButton
          className="mb-4"
          color="primary"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          className="mb-4"
          color="secondary"
          onPress={() => router.push("/profile")}
        >
          Perfil
        </CustomButton>

        <CustomButton
          className="mb-4 bg-slate-950"
          color="tertiary"
          onPress={() => router.push("/settings")}
        >
          Configuraciones
        </CustomButton>

        <CustomButton
          className="mb-4 border-l-indigo-400"
          color="tertiary"
          onPress={onToggleDrawer}
        >
          Abrir Menu
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
