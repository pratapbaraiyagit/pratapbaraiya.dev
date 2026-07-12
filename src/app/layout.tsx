import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pratap Baraiya | React.js Developer · Frontend · MERN Stack",
  description:
    "Pratap Baraiya — React.js & Next.js Developer with ~5 years of experience building scalable, high-performance web applications. Available for full-time and freelance opportunities.",
  keywords: [
    "Pratap Baraiya",
    "React.js Developer",
    "Frontend Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js",
    "MongoDB",
    "Hire React Developer India",
    "Freelance Frontend Developer",
  ],
  authors: [{ name: "Pratap Baraiya", url: "https://pratapbaraiya.dev" }],
  creator: "Pratap Baraiya",
  openGraph: {
    title: "Pratap Baraiya | React.js & MERN Stack Developer",
    description: "React.js / Frontend / MERN Stack Developer · 5 years experience · Available for hire",
    type: "website",
    locale: "en_US",
    siteName: "Pratap Baraiya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratap Baraiya | React.js Developer",
    description: "React.js / Frontend / MERN Stack Developer · Available for hire",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        {/* Instant dark mode — prevents flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('pb-theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
