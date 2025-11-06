import NotFoundLayout from "@/components/layout/NotFoundLayout";
import Image from "next/image";
import background from "@images/teretana-privatni-trening.jpg";
import Container from "@/components/layout/Container";
import Link from "next/link";
import OutlineText from "@/components/ui/OutlineText";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Stranica nije pronađena",
  description:
    "Stranica koju tražite ne postoji. Vratite se na početnu stranu.",
};

function NotFound() {
  return (
    <>
      <NotFoundLayout>
        <Image
          alt=""
          src={background.src}
          fill
          sizes="90vw"
          className="object-cover relative z-[-1]"
        />
        <Container>
          <h1 className="mb-4 ">
            <OutlineText>404</OutlineText>
          </h1>
          <h3>Stranica nije pronađena</h3>
          <Link href="/" className="text-2xl underline-animation">
            Vrati se na početnu
          </Link>
        </Container>
      </NotFoundLayout>
    </>
  );
}

export default NotFound;
