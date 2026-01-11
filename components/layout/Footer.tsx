import { useTranslation } from 'react-i18next';
import { SOCIAL_LINKS, INFO } from '@utils/constants';
import Columns from '@layout/Columns';
import Container from '@layout/Container';
import Stack from '@layout/Stack';
import Link from '@ui/Link';
import Heading from '@ui/Heading';
import Typography from '../ui/Typography';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="text-light-dark bg-[#141414] pt-16 text-lg">
      <Container>
        <Columns sm={1} md={2} lg={4} gap="lg">
          <div>
            <p className="font-gilory-bold mb-4 text-2xl text-white md:text-4xl">LUX GYM</p>
            <Typography variant="footer">
              {t('footer.learnMore')} <br />
              <Link link={SOCIAL_LINKS.sibenikIn}>Šibenik in</Link>
            </Typography>
          </div>

          <div>
            <Heading level={4} footer>
              {t('footer.contact')}
            </Heading>
            <Stack direction="col" gap="sm">
              <Typography variant="footer">
                {t('footer.number')}
                <Link link={SOCIAL_LINKS.whatsapp}>{INFO.phone}</Link>
              </Typography>
              <Typography variant="footer">Email: {INFO.email}</Typography>
              <Typography variant="footer">
                Instagram: <Link link={SOCIAL_LINKS.instagram}>{INFO.instagram}</Link>
              </Typography>
            </Stack>
          </div>
          <div>
            <Heading level={4} footer>
              {t('footer.address')}
            </Heading>

            <Link link={SOCIAL_LINKS.google}>{INFO.address}</Link>
          </div>
          <div>
            <Heading level={4} footer>
              {t('footer.openingHours.title')}
            </Heading>
            <Typography variant="footer">{t('footer.openingHours.description')}</Typography>
          </div>
        </Columns>
      </Container>
      <div className="mt-18 bg-[#1c1c1c] py-4">
        <Typography variant="copyright">
          LuxGym © {new Date().getFullYear() + '. ' + t('footer.rights')}
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
