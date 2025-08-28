import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Top GridRE',
  description: 'Power Is Yours. Compliance Is Ours.'
};

if (process.env.UNDER_DEVELOPMENT === 'true') {
  // If not under development, export a simple layout
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  return;
}else{
    export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    );
  }
}
