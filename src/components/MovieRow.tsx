import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Movie } from '../App'

interface MovieRowProps {
  title: string
  movies: Movie[]
  onMovieClick: (movie: Movie) => void
}

export function MovieRow({ title, movies, onMovieClick }: MovieRowProps) {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById(`row-${title}`)
    if (!container) return

    const scrollAmount = 300
    const newPosition = direction === 'left' 
      ? scrollPosition - scrollAmount 
      : scrollPosition + scrollAmount

    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    })
    
    setScrollPosition(newPosition)
  }

  if (movies.length === 0) return null

  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold text-white px-4 md:px-0">
        {title}
      </h2>
      
      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Movie Cards */}
        <div
          id={`row-${title}`}
          className="flex space-x-4 overflow-x-auto scrollbar-hide px-4 md:px-0 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => onMovieClick(movie)}
              className="min-w-[200px] md:min-w-[250px] cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative group">
                <img
                  src={movie.poster_url}
                  alt={movie.title}
                  className="w-full h-[300px] md:h-[350px] object-cover rounded-lg"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {movie.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                      {movie.description}
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <span className="bg-red-600 text-white px-2 py-1 rounded">
                        {movie.rating}
                      </span>
                      <span className="text-gray-300">{movie.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  )
}