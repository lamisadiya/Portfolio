import "./globals.css";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";

const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Farhat Lamisa — Frontend Engineer",
  description:
    "Frontend engineer specializing in animated, high-performance web experiences with Next.js, TypeScript, and GSAP — with a background in hardware and robotics.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${body.variable} ${display.variable} ${mono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
