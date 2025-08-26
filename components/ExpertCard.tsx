'use client';
export default function ExpertCard({ expert }: any) {
  return (
    <article className="card p-4">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center text-xl font-semibold text-neutral-700">
          {expert.displayName?.slice(0,1) ?? 'E'}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{expert.displayName}</h3>
          <p className="text-sm text-neutral-600">{expert.title}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-neutral-600">
          <div>{expert.yearsExperience} yrs experience</div>
          <div>${(expert.hourlyRateCents/100).toFixed(2)} / hr</div>
        </div>
        <a href="/contact" className="btn">Request</a>
      </div>
    </article>
  );
}
