import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { secureStorage } from "../lib/secureStore";

interface useStateProps {
  role: "individual/business" | "driver" | null;
  setRole: (role: "individual/business" | "driver" | null) => void;
}

export const accountState = create<useStateProps>()(
  persist(
    (set) => ({
      role: null,
      setRole: (role) => set({ role }),
    }),
    {
      name: "__sayem_route_state__",
      storage: createJSONStorage(() => secureStorage),
    },
  ),
);
