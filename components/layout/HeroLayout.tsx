type HeroLayoutProps = {
  children: React.ReactNode;
};

function HeroLayout({ children }: HeroLayoutProps) {
  return (
    <section className="text-light relative flex h-screen w-auto flex-col justify-between space-y-10 py-6 overflow-hidden">
      {children}
    </section>
  );
}

export default HeroLayout;
