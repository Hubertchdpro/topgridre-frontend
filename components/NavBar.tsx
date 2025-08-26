import Link from 'next/link';
import Slider from '@/components/slider';

export default function NavBar() {
  return (
    <section>

    
      <header className="sticky top-0 z-40 bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/topgridre-logo.jpg" alt="Top GridRE" className="h-10" />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/practice/cip" className="hover:text-brand">CIP</Link>
            <Link href="/practice/op" className="hover:text-brand">O&P</Link>
            <Link href="/experts" className="hover:text-brand">Experts</Link>
            <Link href="/resources/news" className="hover:text-brand">News</Link>
            <Link href="/contact" className="btn">Talk to an Expert</Link>
          </nav>

          
        </div>
        {/* <Slider slides={slides} /> */}
        
      </header>
      <Slider/>
    </section>
  );
}
