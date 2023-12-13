import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serasa",
  description: "Serasa",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <main className="bg-loginGradient min-h-screen w-screen flex justify-center items-center">{children}</main>;
}
