import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    databaseURL: config.public.firebaseDatabaseURL,
    projectId: config.public.firebaseProjectId
  }

  const app = initializeApp(firebaseConfig)
  const db = getDatabase(app)

  return {
    provide: {
      db
    }
  }
})
