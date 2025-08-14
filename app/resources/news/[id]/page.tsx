async function getNews() {
  const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  const res = await fetch(`${base}/api/public/news`);
  if (!res.ok) return [];
  return res.json();
}
export default async function NewsArticle({ params }: any) {
  const posts = await getNews();
  const post = posts.find((p:any) => p.id === params.id);
  if (!post) return <main className="mx-auto max-w-6xl px-4 py-12">Article not found</main>;
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="mt-6 prose max-w-none" dangerouslySetInnerHTML={{ __html: post.body || post.summary }} />
    </main>
  );
}
