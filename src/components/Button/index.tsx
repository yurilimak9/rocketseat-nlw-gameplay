import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text } from "react-native";

import { styles } from "./styles";

type ButtonIconProps = RectButtonProps & {
  title: string;
};

export function Button({ title, ...props }: ButtonIconProps) {
  return (
    <RectButton style={styles.container} {...props}>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
