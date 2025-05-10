import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ReduxProvider from "@/redux/provider/ReduxProvider";
import Script from "next/script";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Run Courier",
  description: "Run Courier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDKh_wbcDcAMUeu-V9luJrVODl2CzJt6lQ&libraries=places`}
          async
          defer
        ></script>
      </head>
      <body className={`${lato.className} antialiased`}>
        <Toaster position="bottom-right" richColors />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
