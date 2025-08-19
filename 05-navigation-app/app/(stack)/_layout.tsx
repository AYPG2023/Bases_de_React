import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false, // Ocultar la sombra del encabezado
        contentStyle: {
          backgroundColor: "white",
        }, // Cambiar el color de fondo del contenido
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
