'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import i18n from '@/utils/i18n/i18n';

/**
 * Hook that returns a list of hashtags, shuffled randomly.
 * The list is shuffled on every language change.
 * @returns  A list of shuffled hashtags.
 */
export default function useHashtagsList() {
  const { t } = useTranslation();
  const [shuffledHashtags, setShuffledHashtags] = useState<string[]>([]);

  const currentYear = new Date().getFullYear().toString();
  const hashtags = [
    currentYear,
    'Šibenik',
    t('hashtags.gym'),
    'fitness',
    'legday',
    t('hashtags.new'),
    t('hashtags.yoga'),
    t('hashtags.energy'),
    t('hashtags.strength'),
    t('hashtags.activity'),
    t('hashtags.cardio'),
    t('hashtags.running'),
  ];

  useEffect(() => {
    setShuffledHashtags([...hashtags].sort(() => Math.random() - 0.5));
  }, [t, i18n.language]);

  return shuffledHashtags;
}
