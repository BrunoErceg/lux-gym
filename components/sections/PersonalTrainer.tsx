import { useTranslation } from "react-i18next";
import Image from "next/image";
import PrivatniTrenerSlika from "@images/privatni-trener.jpg";
import Accordion from "@ui/Accordion";
import Section from "@layout/Section";
import Container from "@layout/Container";
import Columns from "@layout/Columns";
import Flex from "@layout/Flex";
import getExperience from "@utils/experience";
import InViewAnimation from "@/components/animations/InViewAnimation";
import InfoCard from "@ui/InfoCard";

function PersonalTrainer() {
  const { godineIskustva, brojKlijenata } = getExperience();
  const { t } = useTranslation();
  return (
    <Section padding="lg" id="personalTrainer">
      <Container>
        <Columns sm={1} md={1} lg={2} gap="lg">
          <Flex direction="col" justify="center" className="justify-center">
            <h5>Luka Škubonja</h5>
            <h2 className="translate-x-0.5">{t("personalTrainer.title")}</h2>
            <Accordion
              title={t("personalTrainer.training.title")}
              content={t("personalTrainer.training.description")}
            />
            <Accordion
              title={t("personalTrainer.advice.title")}
              content={t("personalTrainer.advice.description")}
            />
            <Accordion
              title={t("personalTrainer.nutrition.title")}
              content={t("personalTrainer.nutrition.description")}
            />
            <Accordion
              title={t("personalTrainer.group.title")}
              content={t("personalTrainer.group.description")}
            />
          </Flex>
          <InViewAnimation>
            <Flex justify="end" className="relative lg:ml-[20%]">
              <Image
                src={PrivatniTrenerSlika.src}
                width={472}
                height={611}
                alt={t("personalTrainer.imgAlt")}
                className="w-full"
              />
              <div className="absolute bottom-0 flex w-full space-x-5 lg:right-10 lg:bottom-10">
                <InfoCard
                  title={t("personalTrainer.experience.title")}
                  countTo={godineIskustva}
                  description={t("personalTrainer.experience.description")}
                />
                <InfoCard
                  title={t("personalTrainer.clients.title")}
                  countTo={brojKlijenata}
                  description={t("personalTrainer.clients.description")}
                  className="bg-primary"
                />
              </div>
            </Flex>
          </InViewAnimation>
        </Columns>
      </Container>
    </Section>
  );
}

export default PersonalTrainer;
