import { Redirect, Href } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";

const App = () => {
  const route = "/home" as Href;
  return <Redirect href={route}></Redirect>;
  // return (
  //   <SafeAreaView>
  //     <View className="mt-6 mx-2.5">
  //       {/* Formas para mandar a llamar las from colocadas en talwinds.config* */}
  //       <Text className="text-5xl" style={{ fontFamily: "WorkSans-Black" }}>
  //         Hola Mundo..
  //       </Text>
  //       <Text className="text-3xl text-primary font-work-black  ">
  //         Hola Mundo..
  //       </Text>
  //       <Text className="text-3xl text-secondary font-work-medium ">
  //         Hola Mundo..
  //       </Text>
  //       <Text className="text-3xl text-secondary-100 font-work-light ">
  //         Hola Mundo..
  //       </Text>
  //       <Text className="text-xl text-secondary-200 ">Hola Mundo..</Text>
  //       <link className="text-xl text-secondary-200 " href="/products">
  //         Ir a Productos
  //       </link>
  //     </View>
  //   </SafeAreaView>
  // );
};

export default App;
