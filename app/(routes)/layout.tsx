import Navbar from "../component/navbar/navbar";
import Footer from "../component/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen flex flex-col bg-black">
      {/* Background container */}
      <div className="absolute inset-0 background-image bg-cover bg-center z-0"></div>

      {/* Background overlay with opacity */}
      <div className="absolute inset-0 bg-white opacity-50 z-2"></div>

      {/* Content container */}
      <div className="relative z-50 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 z-50">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
