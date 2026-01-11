import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Vrijeme from '@icons/vrijeme.png';
import Oprema from '@icons/oprema.png';
import Organizacija from '@icons/organizacija.png';
import Atmosfera from '@icons/atmosfera.png';
import Section from '@layout/Section';
import Container from '@layout/Container';
import TextGroup from '@layout/TextGroup';
import Columns from '@layout/Columns';
import Card from '@ui/Card';
import Heading from '@ui/Heading';
import Typography from '../ui/Typography';

function Gym() {
  const { t } = useTranslation();

  return (
    <Section padding="lg" id="gym">
      <Container>
        <TextGroup>
          <Typography variant="support" className="text-center md:text-left">
            {t('gym.subtitle')}
          </Typography>

          <Heading level={2}>
            {t('gym.title')} <FontAwesomeIcon icon={faHeart} className="text-primary size-7" />
          </Heading>
        </TextGroup>

        <Columns sm={1} md={2} lg={4} gap="lg">
          <Card
            title={t('gym.openingHours.title')}
            description={t('gym.openingHours.description')}
            icon={Vrijeme.src}
            animationDelay={0}
          />
          <Card
            title={t('gym.equipment.title')}
            description={t('gym.equipment.description')}
            icon={Oprema.src}
            animationDelay={0.2}
          />
          <Card
            title={t('gym.capacity.title')}
            description={t('gym.capacity.description')}
            icon={Organizacija.src}
            animationDelay={0.4}
          />
          <Card
            title={t('gym.atmosphere.title')}
            description={t('gym.atmosphere.description')}
            icon={Atmosfera.src}
            animationDelay={0.6}
          />
        </Columns>
      </Container>
    </Section>
  );
}

export default Gym;
