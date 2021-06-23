import React from "react";
import {Image} from "react-native";

import {styles} from "./styles";

export function GuildIcon() {
    const uri = "https://img.icons8.com/dusk/512/discord-logo.png";

    return (
        <Image
            style={styles.image}
            source={{uri}}
            resizeMode={"cover"}
        />
    );
}