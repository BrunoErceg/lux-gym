'use client';
// i18
import { useTranslations } from 'next-intl';

// Components
import Section from '@layout/Section';
import TextGroup from '@layout/TextGroup';
import Columns from '@layout/Columns';
import PriceListItem from '@ui/PriceListItem';
import Heading from '@ui/Heading';
import Typography from '@ui/Typography';
import { AnimateIn } from '@brunoerceg/animate-in';

const SERVICES = [
  {
    service: 'membership',
    price: 50,
  },
  {
    service: 'familyMembership',
    price: 40,
  },
  {
    service: 'weekMembership',
    price: 30,
  },
  {
    service: 'workout',
    price: 10,
  },
  {
    service: 'privateWorkout',
    price: 25,
  },
  {
    service: 'workoutsPacket',
    price: 300,
  },
  {
    service: 'workoutsPacketFor2',
    price: 450,
  },
];

/**
 * PriceList component, displays information about the prices of services.
 *
 * @returns Section component with information about the prices of services.
 */
function PriceList() {
  const t = useTranslations('priceList');
  return (
    <Section id="priceList">
      <AnimateIn.Container className="container">
        <TextGroup centered={true}>
          <AnimateIn.Item>
            <Typography variant="support">{t('subtitle')}</Typography>
          </AnimateIn.Item>
          <Heading level={2} className="mb-20 translate-x-0.5 md:text-center">
            <AnimateIn.Words>{t('title')}</AnimateIn.Words>
          </Heading>
        </TextGroup>
        <AnimateIn.Item>
          <Columns sm={1} md={2} lg={2} className="gap-0 md:gap-8">
            <div>
              {SERVICES.slice(0, 4).map(({ service, price }) => (
                <PriceListItem
                  key={service}
                  usluga={t(`${service}.title`)}
                  opis={t(`${service}.description`)}
                  cijena={price}
                />
              ))}
            </div>
            <div>
              {SERVICES.slice(4).map(({ service, price }) => (
                <PriceListItem
                  key={service}
                  usluga={t(`${service}.title`)}
                  opis={t(`${service}.description`)}
                  cijena={price}
                />
              ))}
            </div>
          </Columns>
        </AnimateIn.Item>
      </AnimateIn.Container>
    </Section>
  );
}

export default PriceList;
