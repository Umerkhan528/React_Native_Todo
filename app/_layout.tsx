import { Stack } from "expo-router";
import { todostore } from "./todostore";
import { Provider } from "react-redux";


const RootLayout = () => {
  return( 
    <Provider  store={todostore}>
  <Stack screenOptions={{headerShown:true}}>
    <Stack.Screen name="index" />
    <Stack.Screen name="todo" />
    <Stack.Screen name="register"/>
    <Stack.Screen name="login"/>
    <Stack.Screen name="main"/>
  </Stack>
  </Provider>
  );
};

export default RootLayout;
