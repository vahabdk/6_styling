import React from 'react';
import HomeScreen from "./components/HomeScreen";
import PlatformScreen from "./components/PlatformScreen";
import ProfileScreen from "./components/ProfileScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";


//Her oprettes en instans af drawernavigator
const Drawer = createDrawerNavigator();


//I return()  oprettes først en NavigationContainer, som wrapper en Drawer.Navigator
//Drawer.Navigator wrapper tre screens, som får defineret rutenavne og referencer til de komponenter
//som skal fremvises i de enkelte screens
//Komponentern importeres fra "components" mappen.
function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name='Platform' component={PlatformScreen}/>
                <Drawer.Screen name='Profile' component={ProfileScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}


export default App;