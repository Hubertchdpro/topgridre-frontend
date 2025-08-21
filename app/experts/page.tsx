import ExpertCard from '@/components/ExpertCard';

async function getExperts() {
  try{
    console.log("je vais chercher les experts");
    const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    console.log("base URL:", base);
    const res = await fetch(`${base}/api/public/experts`);
    console.log("fetch experts res", res);
    if (!res.ok) return [];
    console.log("je recois une reponse de l'API experts", res);
    return res.json();
  } catch(error){
    console.log("fetch experts faile , error")
    return []; // ✅ prevent undefined
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
