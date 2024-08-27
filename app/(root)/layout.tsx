import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid grid-cols-[auto_1fr] min-h-dvh">
      <Sidebar />
      <div className="overflow-y-auto">{children}</div>
    </main>
  );
}
