import InViewAnimation from '@/components/animations/InViewAnimation';
import Stack from '@layout/Stack';
import Heading from '@ui/Heading';
import Typography from './Typography';

type CijenaProps = {
  usluga: string;
  opis: string;
  cijena: number;
};

function Cijena({ usluga, opis, cijena }: CijenaProps) {
  return (
    <InViewAnimation>
      <Stack direction="col" gap="none" className="relative pr-16 pb-14">
        <Heading level={4} className="text-left">
          {usluga}
        </Heading>
        <Typography>{opis}</Typography>
        <Typography variant="price">€{cijena}</Typography>
        <div className="dotted-line absolute bottom-0 mb-8 h-1 w-full"></div>
      </Stack>
    </InViewAnimation>
  );
}

export default Cijena;
