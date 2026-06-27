import { Href, Link, Slot, usePathname } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

import { FlatList, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type Tab = {
  icon: string;
  chosenIcon: string;
  route: Href;
  title: string;
}

const tabs: Tab[] = [
  {
    icon: 'home-outline',
    chosenIcon: 'home-sharp',
    route: '/',
    title: 'Головна',
  },
  {
    icon: 'receipt-outline',
    chosenIcon: 'receipt',
    route: '/receipts',
    title: 'Чеки',
  },
  {
    icon: 'restaurant-outline',
    chosenIcon: 'restaurant',
    route: '/kitchen',
    title: 'Кухня',
  },
  {
    icon: 'menu-outline',
    chosenIcon: 'menu',
    route: '/menu',
    title: 'Menu',
  },
]

export default function TabLayout() {
  const pathname = usePathname()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.verticalTabs} className='bg-[#0f172a]'>
          <FlatList
            data={tabs}
            renderItem={({ item }) => (
              <Link href={item.route} style={styles.flatListItem}>
                {/* <Ionicons name={pathname === item.route ? item.chosenIcon : item.icon} size={24} /> */}
              </Link>
            )}
          />
        </View>
        <Slot />
      </View>
    </SafeAreaView>
  )

  // return (
  //   <Tabs
  //     screenOptions={{
  //       tabBarStyle: {
  //         backgroundColor: theme.colors.foreground,
  //       },
  //       tabBarActiveTintColor: '#fff',
  //       tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
  //     }}
  //   >
  //     <Tabs.Screen
  //       name="index"
  //       options={{
  //         title: 'Home',
  //         tabBarIcon: ({ color, focused }) => (
  //           <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
  //         ),
  //       }}
  //     />
  //     <Tabs.Screen
  //       name="receipts"
  //       options={{
  //         title: 'Receipts',
  //         tabBarIcon: ({ color, focused }) => (
  //           <Ionicons name={focused ? 'receipt' : 'receipt-outline'} color={color} size={24} />
  //         ),
  //       }}
  //     />
  //     <Tabs.Screen
  //       name="kitchen"
  //       options={{
  //         title: 'Kitchen',
  //         tabBarIcon: ({ color, focused }) => (
  //           <Ionicons name={focused ? 'restaurant' : 'restaurant-outline'} color={color} size={24} />
  //         ),
  //       }}
  //     />
  //     <Tabs.Screen
  //       name="menu"
  //       options={{
  //         title: 'Menu',
  //         tabBarIcon: ({ color }) => <Ionicons name={'menu'} color={color} size={24} />,
  //       }}
  //     />
  //   </Tabs>
  // )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  verticalTabs: {
    height: '100%',
    width: 88,
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 8,
  },
  pageContainer: {
    flex: 1,
  },
  flatListItem: {

  },
})
