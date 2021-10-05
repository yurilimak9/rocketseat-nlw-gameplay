import React, {useState} from "react";
import {FlatList, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {Profile} from "../../components/Profile";
import {ButtonAdd} from "../../components/ButtonAdd";
import {CategorySelect} from "../../components/CategorySelect";
import {ListHeader} from "../../components/ListHeader";
import {Appointments} from "../../components/Appointments";
import {ListDivider} from "../../components/ListDivider";
import {Background} from "../../components/Background";

import {styles} from "./styles";
import {AppointmentDetails} from "../AppointmentDetails";

export function Home() {
  const [category, setCategory] = useState("");
  const navigation = useNavigation();

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true
      },
      category: "1",
      date: "22/06 às 20h40",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true
      },
      category: "1",
      date: "22/06 às 20h40",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
    }
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate("AppointmentDetails");
  }

  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile/>
        <ButtonAdd onPress={handleAppointmentCreate}/>
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader title={"Partidas agendadas"} subtitle={"Total 6"}/>

        <FlatList
          style={styles.matches}
          keyExtractor={item => item.id}
          data={appointments}
          renderItem={
            ({item}) =>
              <Appointments
                data={item}
                onPress={handleAppointmentDetails}
              />
          }
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider/>}
        />
      </View>
    </Background>
  );
}
