import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "../../components/customDrawerComponent.jsx";

const DrawerLayout = () => {
  return (
    <Drawer
      initialRouteName="index"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="personal-info"
        options={{
          title: "Profile",
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
