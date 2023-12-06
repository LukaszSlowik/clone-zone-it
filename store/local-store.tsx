import { DictionaryType } from "@/lib/dictionary";
import { create } from "zustand";

type LangStoreType = {
  dictionary: DictionaryType | null;
  actions: {
    setDictionary: (dictionary: DictionaryType) => void;
  };
};
const useLangStore = create<LangStoreType>((set) => ({
  dictionary: null,
  actions: {
    setDictionary: (dictionary) => set({ dictionary }),
  },
}));
export const useDictionary = () => useLangStore((state) => state.dictionary);
export const useSetLangActions = () => useLangStore((state) => state.actions);
