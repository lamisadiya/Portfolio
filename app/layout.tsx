// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import DarkModeToggle from "@/components/DarkModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Farhat Lamisa - Software Engineer & Web Developer",
  description: "A Computer Science and Engineering student proficient in C++, Python, and JavaScript, specializing in web development with React and Bootstrap.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
        <header className="fixed top-4 right-4 z-50">
          <DarkModeToggle />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}