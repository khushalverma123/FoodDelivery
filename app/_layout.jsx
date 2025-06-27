import { Stack } from "expo-router";
import { Provider } from "react-redux";
import "../global.css";
import { store } from "../redux/store";
import { Provider as PaperProvider } from "react-native-paper";
export default function RootLayout() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Stack initialRouteName="(auth)" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(drawer)" />
        </Stack>
      </PaperProvider>
    </Provider>
  );
}
