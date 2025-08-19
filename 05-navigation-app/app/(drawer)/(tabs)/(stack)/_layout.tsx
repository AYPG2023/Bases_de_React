import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack, useNavigation } from "expo-router";
import Drawer from "expo-router/drawer";
import { DrawerActions, StackActions } from "@react-navigation/native";

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack?: boolean) => {
    if (canGoBack && navigation.canGoBack()) {
      router.back(); // <- back real del stack/historial
      return;
    }
    navigation.getParent()?.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false, // Ocultar la sombra del encabezado
        contentStyle: {
          backgroundColor: "white",
        }, // Cambiar el color de fondo del contenido

        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back" : "menu"}
            size={20}
            onPress={() => onHeaderLeftClick(!!canGoBack)}
          />
        ),
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Inicio",
          animation: "fade_from_bottom",
          headerShown: false, // Ocultar el encabezado en la pantalla de inicio
        }}
      />

      <Stack.Screen
        name="products/index"
        options={{
          title: "Productos",
        }}
      />

      <Stack.Screen
        name="profile/index"
        options={{
          title: "Perfil",
        }}
      />

      <Stack.Screen
        name="settings/index"
        options={{
          title: "Configuraciones",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
