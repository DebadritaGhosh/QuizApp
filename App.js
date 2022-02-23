import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// export default class App extends React.Component {
//   render() {
//     return (
//       <>
//         <NavigationContainer>
//           <Stack.Navigator>
//             <Stack.Screen name="Home" component={HomeScreen} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </>
//     );
//   }
// }

import HomeScreen from "./screens/HomeScreen";
import QuizScreen from "./screens/QuizScreen";
import ResultScreen from "./screens/ResultScreen";

function App(){
  return(
    <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Homescreen" component={HomeScreen} />
        <Stack.Screen name="quizscreen" component={QuizScreen} />
        <Stack.Screen name="resultscreen" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
  )
}

export default App;