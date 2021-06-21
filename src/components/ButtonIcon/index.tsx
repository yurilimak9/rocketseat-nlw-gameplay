import React from "react";
import {
    TouchableOpacity,
    TouchableOpacityProps,
    View,
    Text,
    Image
} from "react-native";

import DiscordImg from "../../assets/discord.png";
import {styles} from "./styles";

type ButtonIconProps = TouchableOpacityProps & {
    title: string;
}

export function ButtonIcon({title, ...props}: ButtonIconProps) {
    return (
        <TouchableOpacity style={styles.container} {...props}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}/>
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
