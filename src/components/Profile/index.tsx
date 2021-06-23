import React from "react";
import {Text, View} from "react-native";
import {styles} from "./styles";
import {Avatar} from "../Avatar";

export function Profile() {
    return (
        <View style={styles.container}>
            
            <Avatar urlImage={"https://github.com/yurilimak9.png"} />

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        Yuri
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>
        </View>
    );
}