import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full min-h-screen">
      <Sidebar />
      <div className="flex-grow overflow-y-auto">{children}</div>
    </main>
  );
}
