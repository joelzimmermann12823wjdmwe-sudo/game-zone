import Image from 'next/image';
import Link from 'next/link';

interface Game {
  slug: string;
  title: string;
  genre: string;
  thumbnail: string;
  rating: number; 
}

export function GameCard({ game }: { game: Game }) {
  const roundedRating = Math.round(game.rating * 2) / 2;

  return (
    <Link href={`/play/${game.slug}`} className="block group">
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl">
        
        <div className="relative aspect-[4/3]">
          {/* ACHTUNG: Du musst die Thumbnails später in /public/images/thumbnails hochladen! */}
          <Image 
            src={game.thumbnail} 
            alt={`Thumbnail für ${game.title}`} 
            fill 
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover transition-opacity duration-500 group-hover:opacity-80"
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-xl font-semibold truncate text-white">${game.title}</h3>
          <p className="text-sm text-gray-400">${game.genre}</p>
          
          <div className="mt-2 flex items-center text-yellow-400">
            ${roundedRating} ★
          </div>
        </div>
        
      </div>
    </Link>
  );
}
