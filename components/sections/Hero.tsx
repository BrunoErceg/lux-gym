import { Trans, useTranslation } from "react-i18next";
import { RefContext } from "@context/context";
import { useContext, useEffect, useState } from "react";
import Container from "@layout/Container";
import Flex from "@layout/Flex";
import OutlineText from "@ui/OutlineText";
import ArrowDown from "@ui/ArrowDown";
import Animated from "@animations/Animate";
import Navigation from "@/components/sections/Navigation";
function Hero() {
  const sectionRef = useContext(RefContext);
  const { t } = useTranslation();
  const [, setRerender] = useState(false);
  useEffect(() => {
    setRerender(true);
  }, []);

  return (
    <section className="text-light flex h-screen w-auto flex-col justify-between space-y-10 overflow-hidden bg-[url('@images/teretana-privatni-trening.jpg')] bg-cover bg-center">
      <Navigation />

      <Container>
        <Animated delay={0.4}>
          <h1>
            <Trans i18nKey="hero.title">
              Tvoja zona snage i <OutlineText>energije</OutlineText>
            </Trans>
          </h1>
        </Animated>
        <Animated delay={0.6}>
          <p className="text-xl">
            <Trans i18nKey="hero.description">
              Vaša{" "}
              <span className="decoration-primary underline">omiljena</span>{" "}
              teretana u Šibeniku
            </Trans>
          </p>
        </Animated>
      </Container>

      <Container>
        <Animated delay={0.9} direction="none">
          <Flex justify="between" align="end" className="mb-6">
            <p>{t("hero.workingHours")}</p>
            <ArrowDown sectionRef={sectionRef} />
          </Flex>{" "}
        </Animated>
      </Container>
    </section>
  );
}

export default Hero;
