import { Text, TextProps } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";

interface Props extends TextProps {
  variant?: "h1" | "h2";
  children: React.ReactNode;
}

const ThemeText: React.FC<Props> = ({ children, variant = "h1", ...rest }) => {
  return (
    <Text
      style={[
        { color: "white", fontFamily: "SpaceMono" },
        variant === "h1" && globalStyles.mainResul,
        variant === "h2" && globalStyles.subResul,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...rest}
    >
      {children}
    </Text>
  );
};

export default ThemeText;
