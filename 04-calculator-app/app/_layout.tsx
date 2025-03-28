// Primero lo que viene de React native
import { View } from "react-native";

// Despues lo que viene de Expo
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

// Despues va lo que nosotros creamos
import { globalStyles } from "@/styles/global-styles";

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceModo: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  } // Esto es para que no se muestre nada hasta que se cargue la fuente
  return (
    <View style={globalStyles.background}>
      <Slot />
      {/* Esto es para decirle al padre que reenderice en esta parte o que aca muestre a sus hijos osea las otras vistas */}
      <StatusBar /> {/* Esto es para que se muestre la barra de estado */}
    </View>
  );
};

export default RootLayout;
