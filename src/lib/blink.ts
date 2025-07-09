import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: 'netflix-clone-zh1yn5iw',
  authRequired: false // No sign in required for DoggieFlix
})
