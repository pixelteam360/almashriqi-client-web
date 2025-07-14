import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ReduxProvider from "@/redux/provider/ReduxProvider";
import Script from "next/script";
import Image from "next/image";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Run Courier",
  description:
    "Run Courier provides same day courier services in London. Fast, affordable delivery for medical, retail, legal, and multi-drop jobs across Greater London and beyond.",
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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1211688703956465');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={`${lato.className} antialiased`}>
        <Toaster position="bottom-right" richColors />
        <ReduxProvider>
          {" "}
          <noscript>
            <Image
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1211688703956465&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
