import Link from 'next/link';
export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-gray-800 shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-3xl font-bold text-red-500 hover:text-red-400 transition-colors">
          GAME ZONE
        </Link>
        <div className="flex-grow max-w-md mx-8">
          <input type="text" placeholder="Suche Spiele..." className="w-full p-2 rounded-full bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:border-red-500" />
        </div>
        <nav className="space-x-4 hidden sm:block">
          <Link href="/new" className="text-gray-300 hover:text-white transition-colors">Neu</Link>
          <Link href="/popular" className="text-gray-300 hover:text-white transition-colors">Beliebt</Link>
        </nav>
      </div>
    </header>
  );
}
EOFcat <<EOF > src/components/layout/Header.tsx
import Link from 'next/link';
export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-gray-800 shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-3xl font-bold text-red-500 hover:text-red-400 transition-colors">
          GAME ZONE
        </Link>
        <div className="flex-grow max-w-md mx-8">
          <input type="text" placeholder="Suche Spiele..." className="w-full p-2 rounded-full bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:border-red-500" />
        </div>
        <nav className="space-x-4 hidden sm:block">
          <Link href="/new" className="text-gray-300 hover:text-white transition-colors">Neu</Link>
          <Link href="/popular" className="text-gray-300 hover:text-white transition-colors">Beliebt</Link>
        </nav>
      </div>
    </header>
  );
}
