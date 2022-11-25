import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../assets/Screens/Home";
import itemsshop from "../assets/Screens/itemsshop"

const screens = {
    itemsshop : {
        screen : itemsshop
    },
    
    This_is_stack_screen_to_config_later : {
        screen : Home
    },

}

const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);