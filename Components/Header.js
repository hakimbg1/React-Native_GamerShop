import React, { useState } from 'react';
import { Text, TouchableOpacity, View} from 'react-native';

export default function Header(){
    const [ActiveB, setActiveB] = useState("Livraison")
return(

    <View style={{flexDirection: "row", alignSelf: "center",}}>
        <HeaderB txt="Livraison" btnColor="black" txtColor="white" ActiveB={ActiveB} setActiveB ={setActiveB}/>
        <HeaderB txt="Récuperer" btnColor="white" txtColor="black" ActiveB={ActiveB} setActiveB ={setActiveB}/>
    </View>

);
}

const HeaderB = (props) => (
        <TouchableOpacity 
        style={{
            backgroundColor : props.ActiveB == props.txt ? "black" : "white",
            paddingVertical : 6,
            paddingHorizontal : 16,
            borderRadius : 30,
        }}
        onPress={()=>props.setActiveB(props.txt)}
        >
            <Text 
                style={{
                    color : props.ActiveB == props.txt ? "white" : "black",
                    fontSize : 15,
                    fontWeight:"900",
                }}
                >
                {props.txt}
            </Text>
        </TouchableOpacity>

);