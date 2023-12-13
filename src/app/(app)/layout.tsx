import Menu from "@/Components/Menu";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Menu>{children}</Menu>
    </main>
  );
}
