"use client";
import {
  faGoogle,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Trans, useTranslation } from "react-i18next";
import { RefContext } from "@context/context";
import { useContext, useEffect, useState } from "react";
import background from "@images/teretana-privatni-trening.jpg";
import Image from "next/image";
import Container from "@layout/Container";
import Flex from "@layout/Flex";
import OutlineText from "@ui/OutlineText";
import ArrowDown from "@ui/ArrowDown";
import InViewAnimation from "@/components/animations/InViewAnimation";
import Navigation from "@/components/sections/Navigation";
import HeroLayout from "../layout/HeroLayout";
import NavIcon from "../ui/NavIcon";
import { SOCIAL_LINKS } from "@/utils/constants";
import Stack from "../layout/Stack";

function Hero() {
  const sectionRef = useContext(RefContext);
  const { t } = useTranslation();
  const [, setRerender] = useState(false);
  useEffect(() => {
    setRerender(true);
  }, []);

  return (
    <HeroLayout>
      <Image
        alt={t("hero.imageAlt")}
        src={background.src}
        fill
        sizes="90vw"
        className="object-cover relative z-[-1]"
      />
      <Navigation />

      <Container>
        <InViewAnimation delay={0.4}>
          <h1 className="mt-15">
            <Trans i18nKey="hero.title">
              Tvoja zona snage i <OutlineText>energije</OutlineText>
            </Trans>
          </h1>
        </InViewAnimation>
        <InViewAnimation delay={0.6}>
          <p className="text-md md:text-xl">
            <Trans i18nKey="hero.description">
              Vaša{" "}
              <span className="decoration-primary underline">omiljena</span>{" "}
              teretana u Šibeniku
            </Trans>
          </p>
        </InViewAnimation>
      </Container>

      <Container>
        <InViewAnimation delay={0.9} direction="none">
          <Flex justify="between" align="end">
            <Stack>
              <NavIcon link={SOCIAL_LINKS.instagram} icon={faInstagram} />
              <NavIcon link={SOCIAL_LINKS.whatsapp} icon={faWhatsapp} />
              <NavIcon
                link={SOCIAL_LINKS.google}
                icon={faGoogle}
                className="scale-90"
              />
            </Stack>
            <ArrowDown sectionRef={sectionRef} />
          </Flex>{" "}
        </InViewAnimation>
      </Container>
    </HeroLayout>
  );
}

export default Hero;
