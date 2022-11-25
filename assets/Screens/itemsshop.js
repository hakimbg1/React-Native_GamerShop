import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function itemsshop({navigation}){


return(

        <View>

            <Text>Nothing here</Text>
            <TouchableOpacity onPress={() => navigation.navigate('This_is_stack_screen_to_config_later')}>
                <Text >Go To project Navigation work ^^ Ps : u can click on any of 3 shop to go back in here!!! </Text>
            </TouchableOpacity>
        </View>

);
}