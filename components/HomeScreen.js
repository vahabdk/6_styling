import React, {useState} from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import GlobalStyles from "../globalStyles/GlobalStyles";
//HomeScreen taer navigation med som argument
function HomeScreen(){

    //Her defineres de state-variabler, som benyttes til at definere knappens tilstand
    const [clicked, setClicked] = useState(false)

    /*
    *I return() fastsættes Headeren samt en TouchableOpacity, der styles ved brug af GLobalstyles
    * Stylingen afhænger af knappens tilstand i form af værdien af clicked
    * Betingelsen foregår ved brug af en tenary operator
    * Dernæst aktiveres onPress metoden igennem dens property onPress.
     */
    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.textContainer}>
                <TouchableOpacity
                    style={[GlobalStyles.btn, clicked ? GlobalStyles.blue : GlobalStyles.green]}
                    onPress={() => setClicked(!clicked)} >
                    <Text style={GlobalStyles.btn_txt}>
                        {clicked ? "Den skal være grøn" : "Den skal være blå"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

//eksport af HomeScreen således denne kan importeres og benyttes i andre komponenter
export default HomeScreen;