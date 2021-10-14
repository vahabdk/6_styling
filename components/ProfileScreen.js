import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,Button, Platform } from 'react-native';
import AppLoading from "expo-app-loading";
import GlobalStyles from "../globalStyles/GlobalStyles";

//Her importeres en række fonts, som kan benyttes.
import {
    useFonts,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
} from '@expo-google-fonts/inter';
import GloalStyles from "../globalStyles/GlobalStyles";


//ProfileScreen tager navigation med som argument
function ProfileScreen() {

    //Her defineres de state-variabler, som benyttes til at definere knappens titel og til kontrollering af knappens tilstand
    const [clicked, setClicked] = useState(false)
    const [btnTitle, setBtnTitle] = useState('Aktiver den rigtige font!')

    //Her loades de valgt fonts ved brug af useFonts
    let [fontsLoaded] = useFonts({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
    });

    /*
      * onPress metoden tjekker om knappen er true eller false
      * Pba. tilstanden af clicked fastsættes den nye tilstand samt værdien af knappens titel.
    */
    const onPress = () => {
        if(!clicked){
            setBtnTitle('Font 1')
            setClicked(true)

        }else {
            setBtnTitle('Font 2')
            setClicked(false)
        }
    };

    /*
    * Her laves en betingelse, som angiver, hvad der sal vises i return()
    * Hvis ikke de valgte fonts er færdigloadet, skal der fremvises et loader symbol, der er importeret fra
    * expo-app-loading
    * Hvis de er færdigloadede skal der udprintes et billede og
    * en tekstkomponent, der pba. knappens tilstand, styler tekstens. Tilstanden tjekkes ved brug af en tenary operator
    * Slutteligt fastættet eb tekstkomponent, der i onPress aktiverer metoden onPress
     */
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={[GlobalStyles.container]}>
                <View style={Styles.imageContainer}>
                    <Image source={{uri: 'https://i.redd.it/i8t6f16vdd421.jpg'}}
                           style={{width: 200, height: 200}}/>
                    <Text
                        style={[clicked ? Styles.font1 : Styles.font2]}
                    >
                        Styling er afhængig af knappens tilstand
                    </Text>
                    <Button
                        style={GloalStyles.btn}
                        title={btnTitle}
                        onPress={onPress}
                    />
                </View>
            </View>
        );
    }
}


//Her fastsættes styling til brug i ProfileScreen
//Styling af Font 1 og 2 er afhængige af dne enhed, som kører appen.
const Styles = StyleSheet.create({
    imageContainer:{
        height: 250,
        alignItems: 'center',
    },
    font1:{
        fontSize: 10,
        ...Platform.select({
            ios: { fontFamily: 'Inter_100Thin', },
            android: { fontFamily: 'Inter_800ExtraBold' }
        })
    },
    font2:{
        fontSize: 20,
        ...Platform.select({
            ios: { fontFamily: 'Inter_800ExtraBold', },
            android: { fontFamily: 'Inter_100Thin' }
        })
    }
});

//Eksport af ProfileScreen, så denne kan importeres og benyttes i andre komponenter.
export default ProfileScreen;