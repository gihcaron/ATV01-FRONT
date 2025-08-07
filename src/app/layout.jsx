import localFont from "next/font/local";
// import Poppins from "../../public/fonts"
import "./globals.css";

// Configurar fonte local baixada
const Poppins = localFont({
  src: [
      {
          path: "../../public/fonts/Poppins-Regular.ttf",
          weight: "400",
          style: "normal",
      },
      {
          path: "../../public/fonts/Poppins-Bold.ttf",
          weight: "700",
          style: "normal",
      },
      {
        path: "../../public/fonts/Poppins-SemiBold.ttf",
        weight: "500",
        style: "normal",
      }

  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Atividade 1 - Frontend II",
  description: "Construção de uma aplicação web utilizando Next.js e React",
};


export default function RootLayout({ children }) {
  return (
      <html lang="pt-BR" className={Poppins.variable}>
          <body className={Poppins.className}>
              <main>{children}</main>
          </body>
      </html>
  );
}




