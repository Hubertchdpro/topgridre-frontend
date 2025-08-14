import NewsCard from '@/components/NewsCard';
async function getNews() {
  const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  const res = await fetch(`${base}/api/public/news`);
  if (!res.ok) return [];
  return res.json();
}
export default async function NewsPage() {
  const posts = await getNews();
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">News & Insights</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {posts.map((p:any) => <NewsCard key={p.id} post={p} />)}
      </div>
    </main>
  );
}
