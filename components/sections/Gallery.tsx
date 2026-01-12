'use client';
// i18
import { useTranslations } from 'next-intl';

// react-photo-view
import { PhotoProvider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

// Images
import bicikla from '@images/bicikla.jpg';
import gymInnerRoom from '@images/prostor-teretane-unutarnji.jpg';
import latpulldownTrening from '@images/lat-pulldown-privatni-trening.jpg';
import latpulldownMachine from '@images/lat-pulldown.jpg';
import reception from '@images/recepcija-teretane-2.jpg';
import lockerRoom from '@images/svlacionica.jpg';
import gymOuterRoom from '@images/prostor-teretane-vanjski.jpg';

// Components
import GalleryImg from '@ui/GalleryImg';
import Section from '@layout/Section';

const IMAGES = [
  {
    image: bicikla,
    alt: 'bikeImgAlt',
    className: 'col-start-2 row-start-4 lg:col-start-1 lg:row-start-1',
  },
  {
    image: gymInnerRoom,
    alt: 'gymImgAlt',
    className: 'col-span-2',
  },
  {
    image: latpulldownTrening,
    alt: 'personalTrainerImgAlt',
  },
  {
    image: latpulldownMachine,
    alt: 'latpulldownImgAlt',
  },
  {
    image: reception,
    alt: 'receptionImgAlt',
    className: 'col-span-2',
  },
  {
    image: lockerRoom,
    alt: 'lockerRoomImgAlt',
  },
  {
    image: gymOuterRoom,
    alt: 'gymRoomImgAlt',
    className: 'col-span-2',
  },
];

/**
 * Gallery component, displays a gallery of images.
 *
 * @returns  A Section component with a PhotoProvider and
 * a div containing GalleryImg components.
 */
function Gallery() {
  const t = useTranslations('gallery');
  return (
    <Section padding="none" id="gallery">
      <PhotoProvider>
        <div className="grid min-h-screen w-full grid-cols-2 gap-1 pt-12 lg:grid-cols-5">
          {IMAGES.map(({ image, alt, className }) => (
            <GalleryImg image={image} key={alt} className={className || ''} alt={t(alt)} />
          ))}
        </div>
      </PhotoProvider>
    </Section>
  );
}

export default Gallery;
