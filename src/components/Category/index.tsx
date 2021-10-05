import React from "react";
import {RectButton, RectButtonProps} from "react-native-gesture-handler";
import {SvgProps} from "react-native-svg";
import {LinearGradient} from "expo-linear-gradient";
import {Text, View} from "react-native";

import {theme} from "../../global/styles/theme";
import {styles} from "./styles";

type CategoryProps = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  hasCheckBox?: boolean;
  checked?: boolean;
};

export function Category({
                           title,
                           icon: Icon,
                           hasCheckBox = false,
                           checked = false,
                           ...props
                         }: CategoryProps) {
  const {secondary40, secondary50, secondary70, secondary85} = theme.colors;

  return (
    <RectButton {...props}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <LinearGradient
          style={[styles.content, {opacity: checked ? 1 : 0.5}]}
          colors={[checked ? secondary85 : secondary50, secondary40]}
        >
          {
            hasCheckBox && <View style={checked ? styles.checked : styles.check}/>
          }

          <Icon width={48} height={48}/>

          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
}
