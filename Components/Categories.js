import React from "react";
import {View, Text, Image, ScrollView} from 'react-native'

export default function Categories() {
    return (
        <View style ={{
            marginTop : 5,
            backgroundColor : "white",
            paddingVertical : 10,
            paddingLeft : 20,

        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
                {items.map((item, index)=>(
                <View key={index} style={{alignItems : "center", marginRight : 30,}}>
                    <Image source={item.Image} style={{
                        width : 50,
                        height : 40,
                        resizeMode : "contain"
                    }}/>
                    <Text style={{
                        fontSize : 13,
                        fontWeight : "900",
                    }}>{item.text}</Text>
                </View>
                ))}
            </ScrollView>
        </View>
    )
}

const items = [
    {
       Image : require("../assets/images/Shop-Bag.png"),
       text : "Offres",
    },{
        Image : require("../assets/images/drink.png"),
        text : "Boisson gazeuse",
     },{
        Image : require("../assets/images/PcGaming.png"),
        text : "Matériel Pc",
     },{
        Image : require("../assets/images/ConsoleGaming.png"),
        text : "Matériel Console",
     },{
        Image : require("../assets/images/figurine.png"),
        text : "Figurine",
     },
];