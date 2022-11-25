import React from 'react';
import { SafeAreaView, ScrollView, Image, View} from 'react-native';
import Categories from '../../Components/Categories';
import Header from '../../Components/Header';
import SearchGoogle from '../../Components/SearchGoogle';
import ShopItems, { localShops } from '../../Components/ShopItems';



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
