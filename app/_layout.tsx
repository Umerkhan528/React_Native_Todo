import { Stack } from "expo-router";

const RootLayout = () => {
  return( 
  <Stack screenOptions={{headerShown:true}}>
    <Stack.Screen name="index" />
    <Stack.Screen name="todo" />
    <Stack.Screen name="register"/>
    <Stack.Screen name="login"/>
    <Stack.Screen name="main"/>
  </Stack>
  );
};

export default RootLayout;
