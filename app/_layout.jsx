import { Stack } from "expo-router";
import { Provider } from "react-redux";
import "../global.css";
import { store } from "../redux/store";
import { Provider as PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PaperProvider>
          <Stack
            initialRouteName="(drawer)"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(drawer)" />
          </Stack>
        </PaperProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
