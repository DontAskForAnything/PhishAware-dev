export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex-1 overflow-auto relative max-h-screen">
        <div className="sticky top-0 w-full z-50 h-8 items-center flex justify-center bg-[#378075]">
          <p className="text-white text-center font-semibold">
            Widok wewnętrzny
          </p>
        </div>
        <div className="h-8" /> {children}
      </main>
    </>
  );
}
