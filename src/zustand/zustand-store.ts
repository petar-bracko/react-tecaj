import { create } from "zustand";
import { persist } from "zustand/middleware";

type ZustandStore = {
  counter: number;
  name: string;
  incrementCounter: () => void;
  resetCounter: () => void;
  incrementBy: (amount: number) => void;
  clearStore: () => void;
};

const initialStoreState = {
  counter: 0,
  name: "john doe",
};

export const useZustandStore = create<ZustandStore>()(
  persist(
    (set) => ({
      counter: 0,
      name: "john doe",
      incrementCounter: () => set((state) => ({ counter: state.counter + 1 })),
      resetCounter: () => set({ counter: 0 }),
      incrementBy: (amount: number) =>
        set((state) => ({ counter: state.counter + amount })),
      clearStore: () => set({ ...initialStoreState }),
    }),
    { name: "zustand-persistor" }
  )
);
