"use client";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function useHashtagsList() {
  const { t } = useTranslation();
  const [shuffledHashtags, setShuffledHashtags] = useState<string[]>([]);

  const currentYear = new Date().getFullYear().toString();
  const hashtags = [
    currentYear,
    "Šibenik",
    t("hashtags.gym"),
    "fitness",
    "legday",
    t("hashtags.new"),
    t("hashtags.yoga"),
    t("hashtags.energy"),
    t("hashtags.strength"),
    t("hashtags.activity"),
    t("hashtags.cardio"),
    t("hashtags.running"),
  ];

  useEffect(() => {
    // Randomizacija se dešava samo na klijentu
    setShuffledHashtags([...hashtags].sort(() => Math.random() - 0.5));
  }, []);

  return shuffledHashtags;
}
