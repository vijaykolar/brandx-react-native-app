import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import { GluestackUIProvider } from "@gluestack-ui/themed";

import GettingStarted from "./screens/getting-started";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GluestackUIProvider>
      {/*<NavigationContainer>*/}
      {/*  <Stack.Navigator>*/}
      {/*    <Stack.Screen name="Home" component={GettingStarted} />*/}
      {/*<Stack.Screen name="Details" component={DetailsScreen} />*/}
      {/*</Stack.Navigator>*/}
      {/*</NavigationContainer>*/}
      <GettingStarted />
    </GluestackUIProvider>
  );
}
