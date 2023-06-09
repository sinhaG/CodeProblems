import "@styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Code Generation",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>
        <div className="main">
          <div className="gradient" />

          <main className="app">{children}</main>
        </div>
      </body>
    </html>
  );
}
