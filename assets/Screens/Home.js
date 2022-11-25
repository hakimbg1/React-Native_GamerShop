import React from 'react';
import { SafeAreaView, ScrollView, Image, View} from 'react-native';
import Categories from '../../Components/Categories';
import Header from '../../Components/Header';
import SearchGoogle from '../../Components/SearchGoogle';
import ShopItems, { localShops } from '../../Components/ShopItems';


const YELP_API_KEY = "WHc5gLsDspwuBBEL3-J8XSLPx_VnuvmT5b63MAF3z_s9paiBWm7Nd3yURR00pLvzimY9XeT9rkYRRA-qR-p2OpYUzrnb9RodYZPGTJp-r4l_lZ8dfICO8czq5OJoY3Yx"; //API(database for my Shops!) that i found in the internet but it wont help me cuz i can not find a search for specifique store (for my case gamming)

export default function Home({navigation}){
    const [ShopData, setShopData] = React.useState(localShops)


return(

    <SafeAreaView style= {{backgroundColor : "whitesmoke", flex : 1,}}>
      <View style={{backgroundColor : "white", padding : 15,}}>
        <Header />
        <SearchGoogle /> 
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ShopItems ShopData={ShopData} navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>

);
}