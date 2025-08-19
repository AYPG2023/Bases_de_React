import { View, Text, PressableProps, Pressable } from "react-native";
import React, { Children } from "react";

interface Props extends PressableProps {
  children: string;
  color: "primary" | "secondary" | "tertiary";

  className?: string;
}
const CustomButton = ({
  children,
  color = "primary",
  onPress,
  className,
  onLongPress,
}: Props) => {
  const btnColors = {
    primary: "bg-blue-500",
    secondary: "bg-green-500",
    tertiary: "bg-gray-500",
  }[color];

  return (
    <Pressable
      className={`p-3 rounded-md ${btnColors} ${className} active:opacity-75`}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text className="text-white text-center">{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
