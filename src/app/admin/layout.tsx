import Sidebar from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar type="admin" />

      <main className="flex-1 overflow-auto relative">
        <div className="sticky top-0 w-full z-50 h-8 items-center flex justify-center bg-[#378075]">
          <p className="text-white text-center font-semibold">Widok admina</p>
        </div>
        <div className="h-8" />
        {children}
      </main>
    </>
  );
}
