import React, {useState} from "react";
import {FlatList, Text, View} from "react-native";

import {Profile} from "../../components/Profile";

import {styles} from "./styles";
import {ButtonAdd} from "../../components/ButtonAdd";
import {CategorySelect} from "../../components/CategorySelect";
import {ListHeader} from "../../components/ListHeader";
import {Appointments} from "../../components/Appointments";
import {ListDivider} from "../../components/ListDivider";

export function Home() {
    const [category, setCategory] = useState("");

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
            description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
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
            description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory("") : setCategory(categoryId)
    }

    return (
        <View>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd/>
            </View>

            <CategorySelect categorySelected={category} setCategory={handleCategorySelect}/>

            <View style={styles.content}>
                <ListHeader title={"Partidas agendadas"} subtitle={"Total 6"}/>

                <FlatList
                    style={styles.matches}
                    keyExtractor={item => item.id}
                    data={appointments}
                    renderItem={({item}) => (
                        <Appointments
                            data={item}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <ListDivider/>}
                />
            </View>
        </View>
    );
}