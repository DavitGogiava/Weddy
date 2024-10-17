import Footer from "@/Components/Footer/Footer";
import "./globals.css";
import Header from "@/Components/Header/Header";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Weddy",
  description: "Weddy - Save the dates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
