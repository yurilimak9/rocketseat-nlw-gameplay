import React from "react";
import {FlatList, View} from "react-native";
import {Guild, GuildProps} from "../../components/Guild";
import {ListDivider} from "../../components/ListDivider";

import {styles} from "./styles";

type GuildsProps = {
  handleGuildsSelect: (guild: GuildProps) => void;
}

export function Guilds({handleGuildsSelect}: GuildsProps) {
  const guilds = [
    {
      id: "1",
      name: "Landários",
      icon: "image.png",
      owner: true
    },
    {
      id: "2",
      name: "Galera do game",
      icon: "image.png",
      owner: false
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Guild
            data={item}
            onPress={() => handleGuildsSelect(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider/>}
        style={styles.guilds}
      />
    </View>
  );
}