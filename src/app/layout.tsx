import { Poppins } from "next/font/google";

import { Footer, Navbar } from "@/components";
import "@/styles/root.scss";

interface Props {
  children: React.ReactNode;
}

const poppins = Poppins({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atelier-cave-dark.min.css"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
