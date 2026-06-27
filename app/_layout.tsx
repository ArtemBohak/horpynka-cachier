import { Stack } from 'expo-router'

import { SessionProvider, useSession } from '@/src/contexts/auth-context'
import { SplashScreenController } from '@/src/splash'
import '@/src/styles/global.css'

export default function Root() {
  return (
    <SessionProvider>
      <SplashScreenController />
      <RootNavigator />
    </SessionProvider>
  )
}

function RootNavigator() {
  const { isLoading, session } = useSession()

  if (isLoading) {
    return null
  }

  return (
    <Stack screenOptions={{ headerShown: false, }}>
      <Stack.Protected guard={!!session}>
        <Stack.Screen options={{ orientation: 'portrait' }} name="(app)" />
      </Stack.Protected>

      <Stack.Protected guard={!session}>
        <Stack.Screen options={{ orientation: 'portrait' }} name="sign-in" />
      </Stack.Protected>
    </Stack>
  )
}

