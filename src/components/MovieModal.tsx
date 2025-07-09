import { X, Play, Plus, ThumbsUp, ThumbsDown } from 'lucide-react'
import { Movie } from '../App'

interface MovieModalProps {
  isOpen: boolean
  onClose: () => void
  movie: Movie | null
}

export function MovieModal({ isOpen, onClose, movie }: MovieModalProps) {
  if (!isOpen || !movie) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-orange-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-orange-100 hover:bg-orange-200 p-2 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-orange-500" />
        </button>
        {/* Hero Section */}
        <div className="relative h-80">
          <img
            src={movie.poster_url}
            alt={movie.title}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-200 via-transparent to-transparent rounded-t-lg" />
          <div className="absolute bottom-6 left-6 right-16">
            <h1 className="text-3xl md:text-4xl font-extrabold text-orange-900 mb-4 drop-shadow-lg">
              {movie.title} <span className="ml-2">🐾</span>
            </h1>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors font-semibold shadow-lg">
                <Play className="w-5 h-5" />
                <span>Play</span>
              </button>
              <button className="p-3 border-2 border-orange-300 rounded-full hover:border-orange-500 transition-colors">
                <Plus className="w-6 h-6 text-orange-500" />
              </button>
              <button className="p-3 border-2 border-orange-300 rounded-full hover:border-orange-500 transition-colors">
                <ThumbsUp className="w-6 h-6 text-orange-500" />
              </button>
              <button className="p-3 border-2 border-orange-300 rounded-full hover:border-orange-500 transition-colors">
                <ThumbsDown className="w-6 h-6 text-orange-500" />
              </button>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Movie Info */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-orange-600 font-semibold">100% Paw-some</span>
                <span className="px-2 py-1 border border-orange-300 text-orange-700 rounded">
                  {movie.rating}
                </span>
                <span className="text-orange-700">{movie.year}</span>
                <span className="text-orange-700">{movie.runtime} min</span>
                <span className="px-2 py-1 border border-orange-300 text-orange-700 rounded">
                  HD
                </span>
              </div>
              <p className="text-orange-900 text-lg leading-relaxed">
                {movie.description}
              </p>
            </div>
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-orange-400">Genre: </span>
                <span className="text-orange-900">{movie.genre}</span>
              </div>
              <div>
                <span className="text-orange-400">This movie is: </span>
                <span className="text-orange-900">Dog-friendly, Fun, Family-approved</span>
              </div>
            </div>
          </div>
          {/* Episodes/Similar Section */}
          <div className="border-t border-orange-200 pt-6">
            <h2 className="text-xl font-bold text-orange-900 mb-4">
              {movie.category === 'tv' ? 'Episodes' : 'More Like This'}
            </h2>
            <div className="text-orange-400 text-center py-8">
              {movie.category === 'tv' 
                ? 'Episodes coming soon to DoggieFlix!' 
                : 'More paw-some recommendations soon!'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
