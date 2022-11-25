import React from "react";
import { View, Text} from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchGoogle(){
    return(
        <View
        style={{
            marginTop : 15,
            flexDirection : "row",
        }}>
            <GooglePlacesAutocomplete
            query={{key : 'AIzaSyDBzKKmLamv0Q1GwlS7w9Rr1vcSzSHPu6c'}} //google API
            onPress={(data, details = null)=> {
                console.log(data.description) // to show the data format to see how can split the data to get only what i need
            }}
            placeholder="Chercher"
            styles={{
                textInput : {
                    backgroundColor : "whitesmoke",
                    borderRadius : 20,
                    fontWeight : "700",
                    marginTop : 7,
                },
                textInputContainer : {
                    backgroundColor : "whitesmoke",
                    borderRadius : 50,
                    flexDirection : "row",
                    alignItems: "center",
                    marginRight: 10,
                },
            }}
            
            renderLeftButton = {() => (
                <View style={{
                    marginLeft : 10,
                }}>
                    <Ionicons name="location-sharp" size={24} />
                </View>
            )
            }
            renderRightButton = {() => (
                <View style={{
                    flexDirection : "row",
                    marginRight : 8,
                    backgroundColor : "white",
                    padding : 9,
                    borderRadius : 30,
                    alignItems : "center"
                }}>
                    <AntDesign name='clockcircle' size ={11}
                    style={{marginRight : 6
                    }}
                    />
                    <Text>Recherche</Text>
                </View>
            )
            }
        />

        </View>
        

    );

}