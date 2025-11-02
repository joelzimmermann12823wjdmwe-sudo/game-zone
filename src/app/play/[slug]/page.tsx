import { notFound } from 'next/navigation';
import gameData from '@/data/games.json';

// Definiere den Typ für ein Spiel
interface Game {
  id: string;
  slug: string;
  title: string;
  genre: string;
  thumbnail: string;
  rating: number;
  isNew: boolean;
  embedUrl: string; // Hier ist der Link zum Spiel-iFrame
}

// Wandle die JSON-Daten in das korrekte TypeScript-Format um
const games: Game[] = (gameData as Game[]).map(game => ({
    ...game,
    embedUrl: `/games/${game.slug}/index.html` // Erstellt den Pfad zum HTML5-Spiel
}));

export default function GamePage({ params }: { params: { slug: string } }) {
  
  // Suche das Spiel anhand des Slugs (URL-Teil)
  const game = games.find((g) => g.slug === params.slug);

  // Wenn das Spiel nicht gefunden wird, zeige die 404-Seite von Next.js
  if (!game) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-white mb-6">${game.title}</h1>

      {/* Der iFrame, der das eigentliche Spiel lädt */}
      <div className="w-full bg-gray-700 rounded-xl overflow-hidden shadow-2xl" style={{ aspectRatio: '16/9' }}>
        <iframe
          src={game.embedUrl}
          title={`Spiele ${game.title}`}
          width="100%"
          height="100%"
          allowFullScreen
          frameBorder="0"
          className="w-full h-full"
        >
          Dein Browser unterstützt keine iFrames.
        </iframe>
      </div>
      
      {/* Kurze Beschreibung oder Infos unter dem Spiel */}
      <div className="mt-8 p-6 bg-gray-800 rounded-lg w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-red-500 mb-3">Über das Spiel</h2>
        <p className="text-gray-300">
          Dies ist der Spielbereich für ${game.title}. Um das Spiel wirklich zu testen, 
          musst Du das HTML5-Spielpaket in den Ordner 
          <code className="bg-gray-700 p-1 rounded">public/games/${game.slug}</code> hochladen.
        </p>
      </div>
    </div>
  );
}
