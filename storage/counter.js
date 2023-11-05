import { create } from "zustand";

const useBearStore = create((set) => ({
  bears: 1,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  decrease: () => set((state) => ({ bears: state.bears - 1 })),
  increase5: () => set((state) => ({ bears: state.bears + 5 })),

  remove: () => set(() => ({ bears: 0 })),
}));

export default useBearStore;
