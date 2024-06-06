import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, light } from "@clerk/themes";
import Header from "../components/ui/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clerk App",
  description: "Example Clerk App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: light,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <main className="">
            <div className="flex items-start justify-center min-h-screen">
              <div>{children}</div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
