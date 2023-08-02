import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/comp/header/header";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  keywords: [
    "AI-powered search",
    "Intelligent search tool",
    "Knowledge discovery",
    "Information retrieval",
    "Vast archives",
    "Relevant insights",
    "Future of search",
    "Advanced search capabilities",
    "Data mining",
    "Instant results",
    "Smart search technology",
    "Knowledge exploration",
    "Comprehensive data analysis",
    "Cutting-edge search algorithms",
    "Time-traveling search experience",
  ],
  description: `Discover the future of search with Archive AI, the cutting-edge AI-powered search tool. Unlock a wealth of knowledge and insights as Archive AI intelligently scours vast archives, delivering the most relevant and up-to-date information right at your fingertips. Revolutionize your search experience and explore the past, present, and future like never before.`,
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
