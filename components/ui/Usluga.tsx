import InViewAnimation from "@/components/animations/InViewAnimation";
import Stack from "@layout/Stack";

type CijenaProps = {
  usluga: string;
  opis: string;
  cijena: number;
};

function Cijena({ usluga, opis, cijena }: CijenaProps) {
  return (
    <InViewAnimation>
      <Stack direction="col" gap="none" className="relative pr-16 pb-14">
        <h4>{usluga}</h4>
        <p className="text-light-dark font-gilory-bold text-md">{opis}</p>
        <p className="text-primary absolute right-0 text-2xl">€{cijena}</p>
        <div className="dotted-line absolute bottom-0 mb-8 h-1 w-full"></div>
      </Stack>
    </InViewAnimation>
  );
}

export default Cijena;
