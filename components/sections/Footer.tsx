import { useTranslation } from "react-i18next";
import { SOCIAL_LINKS, INFO } from "@utils/constants";
import Columns from "@layout/Columns";
import Container from "@layout/Container";
import Stack from "@layout/Stack";
import Link from "@ui/Link";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="text-light-dark bg-[#141414] pt-16 text-lg">
      <Container>
        <Columns sm={1} md={2} lg={4} gap="md">
          <div>
            <p className="font-gilory-bold mb-4 text-4xl text-white">LUX GYM</p>
            <p>
              {t("footer.learnMore")}
              <br />
              <Link link={SOCIAL_LINKS.sibenikIn}>Šibenik in</Link>
            </p>
          </div>

          <div>
            <h4 className="text-white">{t("footer.contact")}</h4>
            <Stack direction="col" gap="sm">
              <p>
                {t("footer.number")}
                <Link link={SOCIAL_LINKS.whatsapp}> {INFO.phone}</Link>
              </p>
              <p>Email: {INFO.email}</p>
              <p>
                Instagram:{" "}
                <Link link={SOCIAL_LINKS.instagram}>{INFO.instagram}</Link>
              </p>
            </Stack>
          </div>
          <div>
            <h4 className="text-white">{t("footer.address")}</h4>
            <Link link={SOCIAL_LINKS.google}>{INFO.address}</Link>
          </div>
          <div>
            <h4 className="text-white">{t("footer.openingHours.title")}</h4>
            <a>{t("footer.openingHours.description")}</a>
          </div>
        </Columns>
      </Container>
      <div className="mt-18 bg-[#1c1c1c] py-4">
        <p className="text-center">
          LuxGym © {new Date().getFullYear() + ". " + t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
