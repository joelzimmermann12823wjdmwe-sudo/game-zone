import { GameCard } from "@/components/cards/GameCard";
import gameData from "@/data/games.json";

interface Game {
  id: string;
  slug: string;
  title: string;
  genre: string;
  thumbnail: string;
  rating: number;
  isNew: boolean;
}

const games: Game[] = gameData as Game[];

export default function HomePage() {
  
  const newGames = games.filter(game => game.isNew).slice(0, 8);
  const popularGames = games.filter(game => game.rating >= 4.5).slice(0, 8);

  return (
    <div className="space-y-12">
      
      <section>
        <h2 className="text-3xl font-bold mb-6 text-white">🔥 Neu in der Game Zone</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {newGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-white">⭐ Unsere beliebtesten Spiele</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {popularGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
      
      {games.length === 0 && (
          <div className="text-center p-12 bg-gray-800 rounded-lg">
              <h3 className="text-xl text-red-500">Noch keine Spiele geladen!</h3>
              <p className="mt-2 text-gray-400">Bitte füge Einträge in die Datei **src/data/games.json** ein, um sie hier anzuzeigen.</p>
          </div>
      )}
    </div>
  );
}
