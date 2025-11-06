type NotFoundLayoutProps = {
  children: React.ReactNode;
};

function NotFoundLayout({ children }: NotFoundLayoutProps) {
  return (
    <section className="flex justify-center text-center items-center text-light h-screen w-auto">
      {children}
    </section>
  );
}

export default NotFoundLayout;
