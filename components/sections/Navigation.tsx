import { useContext } from "react";
import { useTranslation } from "react-i18next";
import "@utils/i18n/i18n";
import { RefContext } from "@context/context";
import Container from "@layout/Container";
import Stack from "@layout/Stack";
import Flex from "@layout/Flex";
import ScrollTo from "@ui/ScrollTo";
import InViewAnimation from "@/components/animations/InViewAnimation";
import LangSwitcher from "../ui/LangSwitcher";

function Navigation() {
  const sectionRef = useContext(RefContext);
  const { t } = useTranslation();
  return (
    <InViewAnimation direction="none" margin={"0px"} delay={0.3}>
      <Container>
        <Flex justify="between" align="center">
          {/* -- Logo -- */}
          <p className="font-gilory-bold text-xl md:text-3xl">LUX GYM</p>

          {/* -- Scroll Navigation -- */}
          <Stack gap="lg" className="hidden lg:flex">
            <ScrollTo section={sectionRef.gym}>{t("navigation.gym")}</ScrollTo>
            <ScrollTo section={sectionRef.personalTrainer}>
              {t("navigation.personalTrainer")}
            </ScrollTo>
            <ScrollTo section={sectionRef.galery}>
              {t("navigation.gallery")}
            </ScrollTo>
            <ScrollTo section={sectionRef.priceList}>
              {t("navigation.priceList")}
            </ScrollTo>
          </Stack>

          {/* -- Language switcher -- */}
          <Stack>
            <LangSwitcher />
          </Stack>
        </Flex>
      </Container>
    </InViewAnimation>
  );
}

export default Navigation;
