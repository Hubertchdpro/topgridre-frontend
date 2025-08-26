export default function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-neutral-600">
        <p className="font-semibold text-brand">Power Is Yours. Compliance Is Ours.</p>
        <p className="mt-2">© {new Date().getFullYear()} Top GridRE. All rights reserved.</p>
      </div>
    </footer>
  );
}
