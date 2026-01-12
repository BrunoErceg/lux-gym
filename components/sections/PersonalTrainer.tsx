'use client';
// Libraries
import { AnimateIn } from '@brunoerceg/animate-in';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

// Utils
import getExperience from '@utils/experience';

// Images
import PrivatniTrenerSlika from '@images/privatni-trener.jpg';

// Components
import Section from '@layout/Section';
import Columns from '@layout/Columns';
import Accordion from '@ui/Accordion';
import InfoCard from '@ui/InfoCard';
import Heading from '@ui/Heading';
import Typography from '@ui/Typography';

const SERVICES = ['training', 'advice', 'nutrition', 'group'];

/**
 * PersonalTrainer component, displays information about the personal trainer.
 *
 * @returns Section component with information about the personal trainer.
 */
function PersonalTrainer() {
  const { godineIskustva, brojKlijenata } = getExperience();
  const t = useTranslations('personalTrainer');

  return (
    <Section padding="lg" id="personalTrainer">
      <div className="container">
        <Columns sm={1} md={1} lg={2} gap="md">
          <AnimateIn.Container className="flex flex-col justify-center">
            <AnimateIn.Item className="mx-auto md:mx-0">
              <Typography variant="support">Luka Škubonja</Typography>
            </AnimateIn.Item>
            <Heading level={2} className="-translate-x-0.5">
              <AnimateIn.Words from="bottom">{t('title')}</AnimateIn.Words>
            </Heading>
            <AnimateIn.Item delay={0.3}>
              {SERVICES.map((service) => (
                <Accordion
                  key={service}
                  title={t(`${service}.title`)}
                  content={t(`${service}.description`)}
                />
              ))}
            </AnimateIn.Item>
          </AnimateIn.Container>
          <AnimateIn.Individual amount={'quarter'}>
            <div className="relative flex justify-end lg:ml-[20%]">
              <Image
                src={PrivatniTrenerSlika}
                width={472}
                height={611}
                alt={t('imgAlt')}
                className="w-full"
              />
              <div className="absolute bottom-0 flex w-full space-x-5 lg:right-10 lg:bottom-10">
                <InfoCard
                  title={t('experience.title')}
                  countTo={godineIskustva}
                  description={t('experience.description')}
                />
                <InfoCard
                  title={t('clients.title')}
                  countTo={brojKlijenata}
                  description={t('clients.description')}
                  className="bg-primary"
                />
              </div>
            </div>
          </AnimateIn.Individual>
        </Columns>
      </div>
    </Section>
  );
}

export default PersonalTrainer;
