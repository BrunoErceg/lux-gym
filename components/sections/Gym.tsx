'use client';
// i18
import { useTranslations } from 'next-intl';

// Animation
import { AnimateIn } from '@brunoerceg/animate-in';

// Icons & Images
import heart from '@icons/heart.svg';
import Vrijeme from '@icons/vrijeme.svg';
import Oprema from '@icons/oprema.svg';
import Organizacija from '@icons/organizacija.svg';
import Atmosfera from '@icons/atmosfera.svg';

// Components
import Section from '@layout/Section';
import TextGroup from '@layout/TextGroup';
import Columns from '@layout/Columns';
import Card from '@ui/Card';
import Heading from '@ui/Heading';
import Typography from '@ui/Typography';
import Image from 'next/image';

const GYM_FEATURES = [
  {
    key: 'openingHours',
    icon: Vrijeme,
  },
  {
    key: 'equipment',
    icon: Oprema,
  },
  {
    key: 'capacity',
    icon: Organizacija,
  },
  {
    key: 'atmosphere',
    icon: Atmosfera,
  },
];

/**
 * Gym component, displays information about the gym.
 *
 * @returns Section component with information about the gym.
 */

function Gym() {
  const t = useTranslations('gym');

  return (
    <Section padding="lg" id="gym">
      <AnimateIn.Container stagger="medium" amount="some" className="container">
        <TextGroup>
          <AnimateIn.Item>
            <Typography variant="support" className="text-center md:text-left">
              {t('subtitle')}
            </Typography>
          </AnimateIn.Item>

          <AnimateIn.Item>
            <Heading level={2}>
              {t('title')}{' '}
              <Image
                src={heart}
                width={37}
                height={37}
                alt="Heart"
                className="animate-heartbeat ml-1 inline -translate-y-1"
              />
            </Heading>
          </AnimateIn.Item>
        </TextGroup>
        <Columns sm={1} md={2} lg={4} gap="lg">
          {GYM_FEATURES.map(({ key, icon }) => (
            <AnimateIn.Item key={key}>
              <Card
                title={t(`${key}.title`)}
                description={t(`${key}.description`)}
                icon={icon.src}
              />
            </AnimateIn.Item>
          ))}
        </Columns>{' '}
      </AnimateIn.Container>
    </Section>
  );
}

export default Gym;
