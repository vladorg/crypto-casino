// Import necessary modules and styles
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import utility function for classNames
import { cn } from "@/lib/utils";

// Import components
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

// Initialize the Inter font with specified subsets and variable name
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Define metadata for the page
export const metadata: Metadata = {
  title: "Crypto Casino",
  description: "Explore the thrilling world of Crypto Casino. Immerse yourself in exciting games and cutting-edge technology. Enjoy a secure and seamless gaming experience. Your gateway to crypto entertainment awaits!",
};

// Define the main layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // HTML document structure with lang attribute set to "en"
    <html lang="en">
      <body className={cn(inter.variable)}>
        {/* Include the Header component */}
        <Header />

        {/* Main flex container for the layout */}
        <div className="flex pt-[53px] bg-dark-100">
          <Sidebar />
          {/* Content container with a dark background */}
          <div className="pl-[260px] w-full bg-dark-100">
            {children} {/* Render the children components */}
          </div>
        </div>
      </body>
    </html>
  );
}
