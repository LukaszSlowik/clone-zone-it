import { create } from "zustand";

type ActiveLinkStoreType = {
  activeLink: string;
  actions: {
    setActiveLink: (activeLink: string) => void;
  };
};

export const useActiveLinkStore = create<ActiveLinkStoreType>((set) => ({
  activeLink: "",
  actions: {
    setActiveLink: (activeLink) => set({ activeLink }),
  },
}));
export const useActiveLink = () =>
  useActiveLinkStore((state) => state.activeLink);
export const useSetActiveLinkActions = () =>
  useActiveLinkStore((state) => state.actions);
