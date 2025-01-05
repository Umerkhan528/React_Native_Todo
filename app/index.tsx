import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";
import { Text, TextInput, View, Image, StyleSheet} from "react-native";

export default function Index() {
  const route = useRouter();
  const onAdd = () => {
    route.navigate("/todo");
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <View >
      <TextInput placeholder='Enter your Email' style={{ padding: 20, borderWidth: 2, borderRadius: 5, }} />
      <TextInput placeholder='Enter your Email' style={{ padding: 20, borderWidth: 2, borderRadius: 5, }} />
      <MyButton title={"Continue"} onPress={onAdd} />
      </View>
      </View>
  );
}
