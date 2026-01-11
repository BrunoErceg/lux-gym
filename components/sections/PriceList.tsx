// i18
import { useTranslation } from 'react-i18next';

// Components
import Section from '@layout/Section';
import Container from '@layout/Container';
import TextGroup from '@layout/TextGroup';
import Columns from '@layout/Columns';
import Usluga from '@ui/Usluga';
import Heading from '@ui/Heading';
import Typography from '@ui/Typography';

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
  const { t } = useTranslation();
  return (
    <Section id="priceList">
      <Container>
        <TextGroup centered={true}>
          <Typography variant="support">{t('priceList.subtitle')}</Typography>
          <Heading level={2} className="mb-20 translate-x-0.5 md:text-center">
            {t('priceList.title')}
          </Heading>
        </TextGroup>
        <Columns sm={1} md={2} lg={2} className="gap-0 md:gap-8">
          <div>
            {SERVICES.slice(0, 4).map(({ service, price }) => (
              <Usluga
                key={service}
                usluga={t(`priceList.${service}.title`)}
                opis={t(`priceList.${service}.description`)}
                cijena={price}
              />
            ))}
          </div>
          <div>
            {SERVICES.slice(4).map(({ service, price }) => (
              <Usluga
                key={service}
                usluga={t(`priceList.${service}.title`)}
                opis={t(`priceList.${service}.description`)}
                cijena={price}
              />
            ))}
          </div>
        </Columns>
      </Container>
    </Section>
  );
}

export default PriceList;
