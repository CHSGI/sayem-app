// lib/secureStore.ts
import * as SecureStore from 'expo-secure-store'
import { StateStorage } from 'zustand/middleware'

export const secureStorage: StateStorage = {
  getItem: async (name) => {
    const value = await SecureStore.getItemAsync(name)
    return value ?? null
  },
  setItem: async (name, value) => {
    await SecureStore.setItemAsync(name, value)
  },
  removeItem: async (name) => {
    await SecureStore.deleteItemAsync(name)
  },
}
