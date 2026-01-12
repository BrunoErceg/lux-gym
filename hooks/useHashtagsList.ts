'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

/**
 * Hook that returns a list of hashtags, shuffled randomly.
 * The list is shuffled on every language change.
 * @returns  A list of shuffled hashtags.
 */
export default function useHashtagsList() {
  const t = useTranslations('hashtags');
  const [shuffledHashtags, setShuffledHashtags] = useState<string[]>([]);

  const currentYear = new Date().getFullYear().toString();
  const hashtags = [
    currentYear,
    'Šibenik',
    t('gym'),
    'Fitness',
    'Legday',
    'LuxGym',
    t('new'),
    t('yoga'),
    t('energy'),
    t('strength'),
    t('activity'),
    t('cardio'),
    t('running'),
  ];

  useEffect(() => {
    setShuffledHashtags([...hashtags].sort(() => Math.random() - 0.5));
  }, [t]);

  return shuffledHashtags;
}
