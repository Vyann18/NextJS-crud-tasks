import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 mx-4 my-7 bg-slate-400 dark:bg-slate-800 rounded-md">
      <Link href="/" className="text-2xl font-bold text-center uppercase">
        <h1>Crud App</h1>
      </Link>
      <ul>
        <li>
          <Link
            href="/new"
            className="py-6 px-4 bg-slate-700 rounded-md text-black hover:bg-slate-600 dark:text-white transition-all"
          >
            Nueva Tarea
          </Link>
        </li>
      </ul>
    </nav>
  );
}
