type GaleryGridProps = {
  children: React.ReactNode;
};

function GaleryGrid({ children }: GaleryGridProps) {
  return (
    <div className="grid min-h-screen w-screen grid-flow-row grid-cols-2 grid-rows-5 gap-1 pt-[50px] md:grid-rows-2 lg:grid-cols-5">
      {children}
    </div>
  );
}

export default GaleryGrid;
