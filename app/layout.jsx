import "./globals.css";
import { Nunito, Roboto_Mono } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
  weight: "800",
  display: "swap",
  variable: "--font-nunito",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
  weight: "500",
});
export const metadata = {
  title: "Gladia Transcribe App",
  description: "Gladia speech recognition api integration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${roboto_mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
