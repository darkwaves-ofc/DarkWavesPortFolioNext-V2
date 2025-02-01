import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { poppins } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Dark Waves",
    default: "Dark Waves - Begin of Smart",
    absolute: "Dark Waves",
  },
  description:
    "DarkWaves is a showcase of the seamless transition from traditional to modern development paradigms, emphasizing the simplicity and efficiency of using Next.js and React in building web applications. Created by Vimukthi Indunil, it represents a leap towards a future where development is more about creativity and less about boilerplate code.",
  applicationName: "DarkWaves",
  authors: [
    {
      name: "DarkWaves",
      url: "https://example.site.com",
    },
  ],
  generator: "Next.js",
  keywords: [
    "DarkWaves",
    "Developer Portfolio",
    "Next.js",
    "React",
    "Web Development",
    "Modern Technologies",
    "Coding Efficiency",
  ],
  referrer: "no-referrer",
  themeColor: [
    { color: "#0070f3", media: "(prefers-color-scheme: light)" },
    { color: "#1a202c", media: "(prefers-color-scheme: dark)" },
  ],
  viewport: "width=device-width, initial-scale=1",
  creator: "DarkWaves",
  publisher: "DarkWaves",
  robots: "index, follow",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://example.site.com",
    title: "Dark Waves - Begin of Smart",
    description:
      "Step into the future with Dark Waves, where coding meets innovation. Explore the portfolio of Vimukthi Indunil showcasing projects that redefine development with Next.js and React.",
    images: [
      {
        url: "/ogimage.png",
      },
    ],
    siteName: "DarkWaves",
  },
  twitter: {
    card: "summary_large_image",
    site: "@DarkWavesTech",
    creator: "@DarkWavesTech",
    images: "/ogimage.png",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
