'use client';
export default function NewsCard({ post }: any) {
  return (
    <article className="card p-4">
      <h3 className="text-lg font-semibold">{post.title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{post.summary}</p>
      <div className="mt-4 flex justify-between items-center">
        <time className="text-xs text-neutral-500">{new Date(post.publishDate).toLocaleDateString()}</time>
        <a href={`/resources/news/${post.id}`} className="text-brand font-semibold">Read →</a>
      </div>
    </article>
  );
}
