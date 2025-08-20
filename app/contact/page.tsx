"use client"; // <-- This makes the component run on the client

export default function ContactPage() {

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const handleSubmit = async (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  // Rassemble les données du formulaire dans un objet
  const formData = {
    name: event.target.elements.name.value,
    email: event.target.elements.email.value,
    company: event.target.elements.company.value,
    message: event.target.elements.message.value,
    roleType: event.target.elements.roleType.value,

  };

  try {
    const response = await fetch(`${BACKEND_URL}/api/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Important de préciser le format JSON
      },
      body: JSON.stringify(formData), // Convertit l'objet JavaScript en chaîne JSON
    });

    const result = await response.json();

    if (response.ok) {
      // Succès (status 2xx)
      alert(result.message || 'Message envoyé !'); // "Votre message a été envoyé avec succès..."
      event.target.reset(); // Réinitialise le formulaire
    } else {
      // Erreur (status 4xx ou 5xx)
      alert(`Erreur: ${result.error}`);
    }
  } catch (error) {
    // Erreur réseau ou autre
    alert('Erreur de réseau. Impossible d\'envoyer le message.');
  }
};

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Talk to an Expert</h1>
      <p className="mt-2 text-neutral-700">An agent will route your request to the right SME.</p>
      <form onSubmit={handleSubmit} className="mt-8 grid gap-4" method="post">

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
