import { useTranslation } from 'react-i18next';
import { SOCIAL_LINKS, INFO } from '@utils/constants';
import Columns from '@layout/Columns';
import Container from '@layout/Container';
import Stack from '@layout/Stack';
import Link from '@ui/Link';
import Heading from '@ui/Heading';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="text-light-dark bg-[#141414] pt-16 text-lg">
      <Container>
        <Columns sm={1} md={2} lg={4} gap="lg">
          <div>
            <p className="font-gilory-bold mb-4 text-2xl text-white md:text-4xl">LUX GYM</p>
            <p>
              {t('footer.learnMore')}
              <br />
              <Link link={SOCIAL_LINKS.sibenikIn}>Šibenik in</Link>
            </p>
          </div>

          <div>
            <Heading level={4} footer>
              {t('footer.contact')}
            </Heading>
            <h4 className="text-left text-white"></h4>
            <Stack direction="col" gap="sm">
              <p>
                {t('footer.number')}
                <Link link={SOCIAL_LINKS.whatsapp}> {INFO.phone}</Link>
              </p>
              <p>Email: {INFO.email}</p>
              <p>
                Instagram: <Link link={SOCIAL_LINKS.instagram}>{INFO.instagram}</Link>
              </p>
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
            <a>{t('footer.openingHours.description')}</a>
          </div>
        </Columns>
      </Container>
      <div className="mt-18 bg-[#1c1c1c] py-4">
        <p className="text-center text-sm">
          LuxGym © {new Date().getFullYear() + '. ' + t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
