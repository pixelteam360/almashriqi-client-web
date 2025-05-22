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
        {/* Global site tag (gtag.js) - Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17044587894"
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17044587894');
          `}
        </Script>

        {/* Optional: Conversion event trigger (can also be triggered on specific actions) */}
        <Script id="gtag-conversion" strategy="afterInteractive">
          {`
  gtag('event', 'conversion', {
      'send_to': 'AW-17044587894/s7-OCLiLx8saEPaKv78_',
      'value': 25.0,
      'currency': 'GBP',
      'transaction_id': ''
  });
          `}
        </Script>
      </head>
      <body className={`${lato.className} antialiased`}>
        <Toaster position="bottom-right" richColors />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
