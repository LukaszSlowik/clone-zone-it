"use client";
import { DictionaryType } from "@/lib/dictionary";
import { useSetLangActions } from "@/store/local-store";
import React, { useCallback, useEffect, useMemo } from "react";

type Props = {
  dictionary: DictionaryType;
};

const LangProvider = ({ dictionary }: Props) => {
  const actions = useSetLangActions();
  //console.log("LangProvider");
  const populateDictionary = useCallback(() => {
    // console.log("used Memo");
    if (!dictionary) return;
    actions.setDictionary(dictionary);
  }, [actions, dictionary]);

  useEffect(() => {
    populateDictionary();
  }, [populateDictionary]);

  return <></>;
};

export default LangProvider;
