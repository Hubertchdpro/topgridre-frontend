export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Talk to an Expert</h1>
      <p className="mt-2 text-neutral-700">An agent will route your request to the right SME.</p>
      <form className="mt-8 grid gap-4" action="/api/leads" method="post">
        <input name="name" placeholder="Your name" className="w-full rounded-xl border px-4 py-3" />
        <input name="email" type="email" placeholder="Email" className="w-full rounded-xl border px-4 py-3" />
        <input name="company" placeholder="Company" className="w-full rounded-xl border px-4 py-3" />
        <select name="roleType" className="w-full rounded-xl border px-4 py-3">
          <option value="">Role Type</option>
          <option value="CIP">CIP</option>
          <option value="OP">O&P</option>
          <option value="Analyst">Analyst</option>
        </select>
        <textarea name="message" placeholder="What do you need help with?" rows={5} className="w-full rounded-xl border px-4 py-3" />
        <button type="submit" className="btn">Submit</button>
      </form>
    </main>
  );
}
