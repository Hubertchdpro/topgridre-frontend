import ExpertCard from '@/components/ExpertCard';


async function getExperts() {
  try {
    const base = process.env.NEXT_PUBLIC_API_URL || 'https://topgridre-backend-vbud.onrender.com';
    const res = await fetch(`${base}/api/public/experts`, {
      cache: 'no-store'
    });
    if (!res.ok) {
      console.error('Failed to fetch experts:', res.status);
      return [];
    }
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching experts:', error);
    return [];
  }
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
