import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";

import Home from "./screens/Home.js";

import HuggyWuggy from "./screens/HuggyWuggy.js";
import FiveNights from "./screens/FiveNights.js";

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    Scary: require("./assets/fonts/adrip1.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FiveNights" component={FiveNights} />
        <Stack.Screen name="HuggyWuggy" component={HuggyWuggy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
