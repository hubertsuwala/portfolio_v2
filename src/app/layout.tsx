import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import { GradientCursor } from "@components";
import { Layout } from "@layout";
import { ThemeWrapper } from "@theme";
import "./globals.scss";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Hubert Suwala",
  description:
    "Full-stack developer crafting intuitive web applications with modern technologies. View my projects and experience.",
  keywords: [
    "full-stack developer",
    "web development",
    "React",
    "Next.js",
    "portfolio",
  ],
  authors: [{ name: "Hubert Suwala" }],
  openGraph: {
    title: "Hubert Suwala - Full-stack Developer",
    description:
      "Portfolio of a full-stack developer specializing in modern web applications",
    url: "https://hubertsuwala.github.io/portfolio_v2",
    siteName: "Hubert Suwala Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hubert Suwala - Full-stack Developer",
    description: "Portfolio of a full-stack developer",
  },
  icons: {
    icon: [
      {
        url: `${
          process.env.NEXT_PUBLIC_BASE_PATH || ""
        }/favicon/favicon-96x96.png`,
        sizes: "96x96",
        type: "image/png",
      },
      { url: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon/favicon.ico` },
    ],
    apple: `${
      process.env.NEXT_PUBLIC_BASE_PATH || ""
    }/favicon/apple-touch-icon.png`,
  },
};
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${lato.variable}`}>
        <ThemeWrapper>
          <GradientCursor />
          <Layout>{children}</Layout>
        </ThemeWrapper>
      </body>
    </html>
  );
};
export default RootLayout;
