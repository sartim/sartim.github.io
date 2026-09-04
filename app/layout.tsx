import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sartim.github.io"),
  title: "Timothy Nyachio — Software & Platform Engineer",
  description: "Software and Platform Engineer with 10+ years across product engineering, distributed systems, cloud infrastructure, DevOps, and technical leadership.",
  openGraph: {
    title: "Timothy Nyachio — Software & Platform Engineer",
    description: "10+ years building scalable software, distributed systems, and cloud platforms.",
    url: "https://sartim.github.io",
    type: "website",
    images: [{ url: "/og-v2.png", width: 1731, height: 909, alt: "Timothy Nyachio — Software & Platform Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timothy Nyachio — Software & Platform Engineer",
    description: "10+ years building scalable software, distributed systems, and cloud platforms.",
    images: ["/og-v2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
