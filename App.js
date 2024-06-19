import { useState, useEffect } from "react";
import * as Font from "expo-font";
import { Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeStack } from "./routes/HomeStack";
import { AboutStack } from "./routes/AboutStack";

const Drawer = createDrawerNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const getFonts = async() => {
    const fonts = await Font.loadAsync({
      'nunito-regular': require("./assets/fonts/Nunito-Regular.ttf"),
      'nunito-bold': require("./assets/fonts/Nunito-Bold.ttf")
    });
    return fonts;
  };

  useEffect(() => {
    getFonts().then(() => setFontsLoaded(true))
  }, []);

  if(fontsLoaded) {
    return (
      <NavigationContainer> 
        <Drawer.Navigator initialRouteName="GISA Store" screenOptions={{ headerShown: false }} >
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="About" component={AboutStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  else {
    return(
      <Text>Loading fonts ...</Text>
    )
  }
};