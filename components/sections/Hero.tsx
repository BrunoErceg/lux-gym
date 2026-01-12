'use client';
// Next
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

// Icons, images & lottie
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { faGoogle, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import background from '@images/teretana-privatni-trening.jpg';

// Constants
import { SOCIAL_LINKS } from '@/utils/constants';

// Animation
import { AnimateIn } from '@brunoerceg/animate-in';

// Components
import Stack from '@layout/Stack';
import Navigation from '@layout/Navigation';
import OutlineText from '@ui/OutlineText';
import NavIcon from '@ui/NavIcon';
import Heading from '@ui/Heading';
import Typography from '@ui/Typography';

/**
 * Hero component, displays hero section with background image, navigation and social links.
 *
 * @returns Hero component.
 */
function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="text-light relative flex h-170 w-screen flex-col justify-between overflow-hidden py-8 md:h-screen">
      <Image
        alt={t('imageAlt')}
        src={background.src}
        fill
        sizes="90vw"
        className="relative z-[-1] object-cover"
      />
      <AnimateIn.Individual from="none" delay={0}>
        <Navigation />
      </AnimateIn.Individual>
      <div className="container">
        <AnimateIn.Individual delay={0.1}>
          <Heading level={1} className="mt-15">
            {t.rich('title', {
              lineBreak: () => <br />,
              OutlineText: (chunks) => <OutlineText>{chunks}</OutlineText>,
            })}
          </Heading>
        </AnimateIn.Individual>
        <AnimateIn.Individual delay={0.2}>
          <Typography variant="subheading">
            {t.rich('description', {
              underline: (chunks) => <span className="decoration-primary underline">{chunks}</span>,
            })}
          </Typography>
        </AnimateIn.Individual>
      </div>

      <div className="container">
        <AnimateIn.Individual delay={0.3}>
          <div className="flex items-end justify-between">
            <Stack>
              <NavIcon link={SOCIAL_LINKS.instagram} icon={faInstagram} />
              <NavIcon link={SOCIAL_LINKS.whatsapp} icon={faWhatsapp} />
              <NavIcon link={SOCIAL_LINKS.google} icon={faGoogle} className="scale-90" />
            </Stack>
            <Link href="#gym">
              <DotLottieReact
                src="https://lottie.host/1dac55c6-aa15-41cd-9c5f-bda4c7dd727a/SgsRGo01oy.lottie"
                loop
                autoplay
                className="color-white h-20 translate-x-[60px] translate-y-2.5 hover:cursor-pointer"
              />
            </Link>
          </div>
        </AnimateIn.Individual>
      </div>
    </section>
  );
}

export default Hero;
