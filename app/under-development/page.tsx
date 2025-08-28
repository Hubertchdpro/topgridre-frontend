import Link from 'next/link';

export default function UnderDevelopmentPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/topgridre-logo.jpg" 
            alt="Top GridRE" 
            className="h-20 mx-auto mb-4"
          />
        </div>

        {/* Construction Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-brand/10 rounded-full flex items-center justify-center">
            <svg 
              className="w-12 h-12 text-brand" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" 
              />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
          Under Development
        </h1>
        
        <p className="text-xl text-neutral-600 mb-2">
          We're working hard to bring you something amazing!
        </p>
        
        <p className="text-lg text-neutral-500 mb-8">
          This feature is currently being developed. Please check back soon.
        </p>

        {/* Status Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
            🚧 In Progress
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            ⚡ Coming Soon
          </span>
          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            🔧 Under Construction
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-neutral-600 mb-2">
            <span>Development Progress</span>
            <span>65%</span>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-3">
            <div 
              className="bg-brand h-3 rounded-full transition-all duration-1000 ease-out"
              style={{ width: '65%' }}
            ></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link 
            href="/" 
            className="btn inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          
          <Link 
            href="/contact" 
            className="btn inline-flex items-center gap-2"
            style={{background:'#fff', color:'#f97316', border:'1px solid #f97316'}}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contact Us
          </Link>
        </div>

        {/* Footer Message */}
        <div className="mt-12 p-6 bg-neutral-50 rounded-2xl">
          <p className="text-sm text-neutral-600">
            <strong className="text-brand">Power Is Yours. Compliance Is Ours.</strong>
            <br />
            Stay tuned for updates on our NERC compliance marketplace and expert network.
          </p>
        </div>

        {/* Estimated Timeline */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500">
            Estimated completion: <span className="font-semibold text-brand">Q2 2025</span>
          </p>
        </div>
      </div>
    </main>
  );
}