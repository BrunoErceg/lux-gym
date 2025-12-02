type HeroLayoutProps = {
  children: React.ReactNode;
};

function HeroLayout({ children }: HeroLayoutProps) {
  return (
    <section className="text-light relative flex h-screen w-screen flex-col justify-between  py-8 overflow-hidden">
      {children}
    </section>
  );
}

export default HeroLayout;
