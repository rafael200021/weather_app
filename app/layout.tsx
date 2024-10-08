import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-full flex flex-col px-20 py-10 h-screen">
          <div>
            <h1 className="font-bold text-3xl">Weather App</h1>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
