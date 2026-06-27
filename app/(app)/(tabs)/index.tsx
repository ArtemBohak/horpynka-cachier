import { Link } from 'expo-router'
import { StyleSheet, View } from 'react-native'

import { themes } from '@ui'

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/menu">go to menu page</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.general.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
})
