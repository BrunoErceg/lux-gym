import { useTranslation } from 'react-i18next';
import Usluga from '@ui/Usluga';
import Section from '@layout/Section';
import Container from '@layout/Container';
import TextGroup from '@layout/TextGroup';
import Columns from '@layout/Columns';
import Heading from '@ui/Heading';

function PriceList() {
  const { t } = useTranslation();
  return (
    <Section id="priceList">
      <Container>
        <TextGroup centered={true}>
          <h5 className="text-center">{t('priceList.subtitle')}</h5>
          <Heading level={2} className="mb-20 translate-x-0.5 md:text-center">
            {t('priceList.title')}
          </Heading>
        </TextGroup>
        <Columns sm={1} md={2} lg={2} className="gap-0 md:gap-8">
          <div>
            <Usluga
              usluga={t('priceList.membership.title')}
              opis={t('priceList.membership.description')}
              cijena={50}
            />
            <Usluga
              usluga={t('priceList.familyMembership.title')}
              opis={t('priceList.familyMembership.description')}
              cijena={40}
            />
            <Usluga
              usluga={t('priceList.weekMembership.title')}
              opis={t('priceList.weekMembership.description')}
              cijena={30}
            />
            <Usluga
              usluga={t('priceList.workout.title')}
              opis={t('priceList.workout.description')}
              cijena={10}
            />
          </div>
          <div>
            <Usluga
              usluga={t('priceList.privateWorkout.title')}
              opis={t('priceList.privateWorkout.description')}
              cijena={25}
            />
            <Usluga
              usluga={t('priceList.workoutsPacket.title')}
              opis={t('priceList.workoutsPacket.description')}
              cijena={300}
            />
            <Usluga
              usluga={t('priceList.workoutsPacketFor2.title')}
              opis={t('priceList.workoutsPacketFor2.description')}
              cijena={450}
            />
          </div>
        </Columns>
      </Container>
    </Section>
  );
}

export default PriceList;
