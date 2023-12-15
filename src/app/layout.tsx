import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Serasa",
  description: "Sua pontuação, Feirão Limpa nome e muito mais.",
  themeColor: "#E80770",
  openGraph: {
    title: "Serasa",
    description: "Sua pontuação, Feirão Limpa nome e muito mais.",
    url: "https://www.serasa.com.br/",
    images:
      "https://serasa.certificadodigital.com.br/wp-content/uploads/2023/08/14210534/Desk_1-min.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
