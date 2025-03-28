import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import { Pressable, Text } from "react-native";

interface Props {
  label: string;
  color?: string; // ? significa que es opcional
  blackText?: boolean;

  //Funciones
  onPress: () => void;
}
const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  onPress,
}: Props) => {
  return (
    <Pressable style={globalStyles.Button} onPress={onPress}>
      <Text
        style={{
          ...globalStyles.ButtonText,
          color: blackText ? "black" : "white",
        }}
      >
        {" "}
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
