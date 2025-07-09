import { Play, Info } from 'lucide-react'
import { Movie } from '../App'

interface HeroSectionProps {
  movie: Movie
  onPlayClick: () => void
}

export function HeroSection({ movie, onPlayClick }: HeroSectionProps) {
  return (
    <div className="relative h-[70vh] md:h-[80vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${movie.poster_url})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-orange-200/90 via-white/60 to-transparent" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-2xl px-4 md:px-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-orange-900 drop-shadow-lg">
            {movie.title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-orange-800 max-w-xl font-medium drop-shadow-sm">
            {movie.description}
          </p>
          <div className="flex items-center space-x-4 mb-8">
            <span className="px-2 py-1 bg-orange-400 text-white text-sm rounded shadow">{movie.rating}</span>
            <span className="text-orange-700">{movie.year}</span>
            <span className="text-orange-700">{movie.runtime} min</span>
            <span className="px-2 py-1 bg-pink-400 text-white text-sm rounded shadow">{movie.genre}</span>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={onPlayClick}
              className="flex items-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors font-semibold shadow-lg"
            >
              <Play className="w-5 h-5" />
              <span>Play</span>
            </button>
            <button 
              onClick={onPlayClick}
              className="flex items-center space-x-2 bg-white/80 text-orange-900 px-6 py-3 rounded-md hover:bg-orange-100 transition-colors font-semibold shadow"
            >
              <Info className="w-5 h-5" />
              <span>More Info</span>
            </button>
          </div>
          <div className="mt-6 text-orange-700 font-bold text-lg flex items-center gap-2">
            <span>🐾 Only on DoggieFlix</span>
          </div>
        </div>
      </div>
    </div>
  )
}
