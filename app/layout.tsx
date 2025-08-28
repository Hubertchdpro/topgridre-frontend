import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Top GridRE',
  description: 'Power Is Yours. Compliance Is Ours.'
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isUnderDevelopment = process.env.UNDER_DEVELOPMENT === 'true';
  return (
    <html lang="en">
      <body>
        { isUnderDevelopment ? (
          <div>
              {children}
          </div>
          //<div className="bg-yellow-200 text-yellow-800 p-4 text-center">
          //<strong>Notice:</strong> The site is currently under development. Some features may not be available. </div>
          )
            :(
              <div>
                <NavBar />
                {children}
                <Footer />
              </div>
            )}
      </body>
    </html>
  );
}

