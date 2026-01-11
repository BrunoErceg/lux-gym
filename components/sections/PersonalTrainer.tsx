// Next & i18n
import { useTranslation } from 'react-i18next';
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
import InViewAnimation from '@/components/animations/InViewAnimation';

const SERVICES = ['training', 'advice', 'nutrition', 'group'];

/**
 * PersonalTrainer component, displays information about the personal trainer.
 *
 * @returns Section component with information about the personal trainer.
 */
function PersonalTrainer() {
  const { godineIskustva, brojKlijenata } = getExperience();
  const { t } = useTranslation();

  return (
    <Section padding="lg" id="personalTrainer">
      <div className="container">
        <Columns sm={1} md={1} lg={2} gap="md">
          <div className="flex flex-col justify-center">
            <Typography variant="support">Luka Škubonja</Typography>
            <Heading level={2} className="-translate-x-0.5">
              {t('personalTrainer.title')}
            </Heading>
            {SERVICES.map((service) => (
              <Accordion
                key={service}
                title={t(`personalTrainer.${service}.title`)}
                content={t(`personalTrainer.${service}.description`)}
              />
            ))}
          </div>
          <InViewAnimation>
            <div className="relative flex justify-end lg:ml-[20%]">
              <Image
                src={PrivatniTrenerSlika}
                width={472}
                height={611}
                alt={t('personalTrainer.imgAlt')}
                className="w-full"
              />
              <div className="absolute bottom-0 flex w-full space-x-5 lg:right-10 lg:bottom-10">
                <InfoCard
                  title={t('personalTrainer.experience.title')}
                  countTo={godineIskustva}
                  description={t('personalTrainer.experience.description')}
                />
                <InfoCard
                  title={t('personalTrainer.clients.title')}
                  countTo={brojKlijenata}
                  description={t('personalTrainer.clients.description')}
                  className="bg-primary"
                />
              </div>
            </div>
          </InViewAnimation>
        </Columns>
      </div>
    </Section>
  );
}

export default PersonalTrainer;
