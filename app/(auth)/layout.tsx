import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full min-h-screen">
      {children}
      <div className="flex h-screen w-full sticky top-0 items-center justify-end bg-slate-300 max-lg:hidden">
        <div>
          <Image
            src="/assets/img/auth-bg.jpg"
            alt="Auth image"
            width={650}
            height={600}
            className="rounded-l-xl object-contain"
          />
        </div>
      </div>
    </main>
  );
}
