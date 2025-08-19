import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm font-semibold text-brand">NERC Compliance Marketplace</p>
            <h1 className="text-4xl font-extrabold">Top GridRE</h1>
            <p className="mt-4 text-lg text-neutral-700">Power Is Yours. Compliance Is Ours. Connect with verified NERC experts and use AI tools to prepare RSAWs.</p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="btn">Talk to an Expert</Link>
              <Link href="/experts" className="btn" style={{background:'#fff', color:'#f97316', border:'1px solid #f97316'}}>Browse Experts</Link>
            </div>
          </div>
          
          <div>
            <img src="/topgridre-logo.jpg" alt="Top GridRE logo" className="h-56 w-auto" />
          </div>
        </div>
      </section>
    </main>
  );
}
