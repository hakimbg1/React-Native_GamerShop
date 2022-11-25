import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons"

export default function ShopItems({navigation, ...props}){
    return(
        
        <TouchableOpacity onPress={() => navigation.navigate('itemsshop')} activeOpacity={1} style ={{marginBottom : 30,}} >
            {props.ShopData.map((shop,index)=>
            <View key={index}
            style={{
                marginTop: 10,
                padding : 15,
                backgroundColor : "white",
            }}
            >
                <ShopImage image={shop.image_url}/>
                <ShopInfo name ={shop.name}  rating={shop.rating}/>
            </View>
            )}
        </TouchableOpacity>
        
    )
}

const ShopImage = (props) => (
    <>
    <Image 
    source={{
        url: props.image,
    }}
    style={{
        width : '100%',
        height : 180,
    }} 
    />
    <TouchableOpacity style ={{position:'absolute',
        right : 20,
        top : 20,
    }}>
        <MaterialCommunityIcons name='heart-outline' size ={25} color='white'/>
    </TouchableOpacity>
    </>
    );

const ShopInfo = (props) => (
    <View style ={{
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        marginTop : 10,
    }}>
    <View>
        <Text style = {{ fontsize : 15, fontWeight : "bold",}}>{props.name}</Text>
        <Text style={{fontsize : 13, color: "gray",}}>25-35 min</Text>
    </View>
    <View style={{
        backgroundColor : "whitesmoke",
        height : 30,
        width : 30,
        justifyContent :'center',
        alignItems : "center",
        borderRadius : 15,
    }}>
        <Text>{props.rating}</Text>
    </View>
    </View>
)

export const localShops = [
{
    name : "Shop1",
    image_url: "https://media.ldlc.com/cms/shop/Vit-LDLC-Levallois.jpg",
    categories : ["Pc", "Console"] ,
    reviews : 5224,
    rating : 4.1,
},{
    name : "Shop2",
    image_url: "https://media.ldlc.com/cms/shop/Vit-LDLC-Levallois.jpg",
    categories : ["xxx", "xxxx"] ,
    reviews : 9824,
    rating : 4.3,
},{
    name : "Shop3",
    image_url: "https://media.ldlc.com/cms/shop/Vit-LDLC-Levallois.jpg",
    categories : ["xxxx", "xxxx"] ,
    reviews : 5224,
    rating : 4.1,
}

]