import { Work_Sans } from 'next/font/google';
import "./globals.css";
import Navbar from './components/shared/Navbar';

const workSans = Work_Sans({
  subsets: ['latin'],
  weights: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Uren - Car Accessories Shop",
  description: "UREN is a cutting-edge car accessories shop dedicated to enhancing the driving experience for car enthusiasts and everyday drivers alike. The brand focuses on offering high-quality, stylish, and innovative automotive products designed to upgrade vehicle aesthetics, comfort, safety, and performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} antialiased px-8 pt-5`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
