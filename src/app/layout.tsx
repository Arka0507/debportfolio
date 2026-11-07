import type { Metadata } from "next";
import { Anton, Geist, Geist_Mono, Caveat_Brush } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const caveatBrush = Caveat_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-caveat-brush",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arkadeb Das | Entry-Level Data Analyst & Data Scientist",
  description:
    "Personal portfolio of Arkadeb Das. Aspiring Data Scientist and Data Analyst fresher (B.Tech CSE, CGPA 8.5) passionate about uncovering hidden patterns in complex datasets.",
  keywords: [
    "Arkadeb Das",
    "Data Scientist",
    "Data Analyst",
    "Python",
    "SQL",
    "Machine Learning",
    "YOLO",
    "FastAPI",
    "Excel Dashboards",
    "Portfolio"
  ],
  authors: [{ name: "Arkadeb Das" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${geistSans.variable} ${geistMono.variable} ${caveatBrush.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var params = new URLSearchParams(window.location.search);
                  var agentsParam = params.get('agents');
                  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                  var stored = localStorage.getItem('portfolio_agents_mode');
                  var shouldEnable = agentsParam === 'on' ? true : (agentsParam === 'off' ? false : (stored !== null ? stored === 'on' : !prefersReduced));
                  if (shouldEnable) {
                    document.documentElement.classList.add('build-mode');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[#09090b] text-[#e4e4e7] antialiased selection:bg-[#ff3b2f] selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}

