import ExpertCard from '@/components/ExpertCard';

async function getExperts() {
  const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  const res = await fetch(`${base}/api/public/experts`);
  if (!res.ok) return [];
  return res.json();
}

export default async function ExpertsPage() {
  const experts = await getExperts();
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Experts</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experts.map((e:any) => <ExpertCard key={e.id} expert={e} />)}
      </div>
    </main>
  );
}
