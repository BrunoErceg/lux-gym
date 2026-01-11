// i18
import { useTranslation } from 'react-i18next';

// Icons & Images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Vrijeme from '@icons/vrijeme.png';
import Oprema from '@icons/oprema.png';
import Organizacija from '@icons/organizacija.png';
import Atmosfera from '@icons/atmosfera.png';

// Components
import Section from '@layout/Section';
import TextGroup from '@layout/TextGroup';
import Columns from '@layout/Columns';
import Card from '@ui/Card';
import Heading from '@ui/Heading';
import Typography from '@ui/Typography';

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
  const { t } = useTranslation();

  return (
    <Section padding="lg" id="gym">
      <div className="container">
        <TextGroup>
          <Typography variant="support" className="text-center md:text-left">
            {t('gym.subtitle')}
          </Typography>

          <Heading level={2}>
            {t('gym.title')} <FontAwesomeIcon icon={faHeart} className="text-primary size-7" />
          </Heading>
        </TextGroup>

        <Columns sm={1} md={2} lg={4} gap="lg">
          {GYM_FEATURES.map(({ key, icon }) => {
            return (
              <Card
                key={key}
                title={t(`gym.${key}.title`)}
                description={t(`gym.${key}.description`)}
                icon={icon.src}
              />
            );
          })}
        </Columns>
      </div>
    </Section>
  );
}

export default Gym;
