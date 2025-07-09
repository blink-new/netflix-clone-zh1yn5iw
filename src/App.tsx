import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { MovieRow } from './components/MovieRow'
import { MovieModal } from './components/MovieModal'
import { Loading } from './components/Loading'

export interface Movie {
  id: string
  title: string
  description: string
  year: number
  runtime?: number
  genre: string
  rating: string
  poster_url: string
  trailer_url: string
  video_url: string
  is_featured: boolean
  category: string
}

function App() {
  // No user/auth logic for DoggieFlix!
  const [movies, setMovies] = useState<Movie[]>([])
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      loadMovies()
      setLoading(false)
    }, 600)
  }, [])

  const loadMovies = async () => {
    // Dog-themed mock data
    const mockMovies: Movie[] = [
      {
        id: '1',
        title: 'Paw & Order',
        description: 'A group of pups solve mysteries in their small town. Lots of barking, little biting.',
        year: 2022,
        runtime: 45,
        genre: 'Mystery',
        rating: 'G',
        poster_url: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=600&fit=crop',
        trailer_url: 'https://www.youtube.com/watch?v=b9EkMc79ZSU',
        video_url: 'https://www.youtube.com/watch?v=b9EkMc79ZSU',
        is_featured: true,
        category: 'tv'
      },
      {
        id: '2',
        title: 'The Bark Knight',
        description: 'By day, a mild-mannered golden retriever. By night, a masked hero saving the city from squirrels.',
        year: 2021,
        runtime: 60,
        genre: 'Action',
        rating: 'PG',
        poster_url: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=400&h=600&fit=crop',
        trailer_url: 'https://www.youtube.com/watch?v=mqqft2x_Aa4',
        video_url: 'https://www.youtube.com/watch?v=mqqft2x_Aa4',
        is_featured: false,
        category: 'movie'
      },
      {
        id: '3',
        title: 'Dogzilla',
        description: 'A tiny chihuahua with a big attitude takes on the city. Will the mailman survive?',
        year: 2020,
        runtime: 90,
        genre: 'Comedy',
        rating: 'PG',
        poster_url: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=400&h=600&fit=crop',
        trailer_url: 'https://www.youtube.com/watch?v=WLJJYdusfaY',
        video_url: 'https://www.youtube.com/watch?v=WLJJYdusfaY',
        is_featured: false,
        category: 'movie'
      },
      {
        id: '4',
        title: 'Howl’s Moving Doghouse',
        description: 'A magical adventure with a corgi and his enchanted doghouse. Lots of tail wags guaranteed.',
        year: 2023,
        runtime: 110,
        genre: 'Fantasy',
        rating: 'G',
        poster_url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=600&fit=crop',
        trailer_url: 'https://www.youtube.com/watch?v=8g18jFHCLXk',
        video_url: 'https://www.youtube.com/watch?v=8g18jFHCLXk',
        is_featured: false,
        category: 'movie'
      },
      {
        id: '5',
        title: 'Game of Bones',
        description: 'Who will sit on the Iron Fire Hydrant? A drama of epic proportions (and epic treats).',
        year: 2019,
        runtime: 60,
        genre: 'Drama',
        rating: 'PG',
        poster_url: 'https://images.unsplash.com/photo-1518715308788-3005759c61d4?w=400&h=600&fit=crop',
        trailer_url: 'https://www.youtube.com/watch?v=DotnJ7tTA34',
        video_url: 'https://www.youtube.com/watch?v=DotnJ7tTA34',
        is_featured: false,
        category: 'tv'
      },
      {
        id: '6',
        title: 'Puppy Academy',
        description: 'Follow a class of puppies as they learn to sit, stay, and save the world.',
        year: 2022,
        runtime: 30,
        genre: 'Family',
        rating: 'G',
        poster_url: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=600&fit=crop',
        trailer_url: 'https://www.youtube.com/watch?v=ndl1W4ltcmg',
        video_url: 'https://www.youtube.com/watch?v=ndl1W4ltcmg',
        is_featured: false,
        category: 'tv'
      }
    ]
    setMovies(mockMovies)
  }

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedMovie(null)
  }

  if (loading) {
    return <Loading />
  }

  const featuredMovie = movies.find(movie => movie.is_featured) || movies[0]
  const tvShows = movies.filter(movie => movie.category === 'tv')
  const actionMovies = movies.filter(movie => movie.genre === 'Action')
  const comedyMovies = movies.filter(movie => movie.genre === 'Comedy')
  const dramaMovies = movies.filter(movie => movie.genre === 'Drama')
  const fantasyMovies = movies.filter(movie => movie.genre === 'Fantasy')
  const familyMovies = movies.filter(movie => movie.genre === 'Family')

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100 text-gray-900 overflow-x-hidden font-sans">
      <Header />
      {featuredMovie && (
        <HeroSection 
          movie={featuredMovie} 
          onPlayClick={() => handleMovieClick(featuredMovie)}
        />
      )}
      <div className="relative z-10 -mt-32">
        <div className="space-y-12 px-4 md:px-12">
          <MovieRow 
            title="Trending on DoggieFlix" 
            movies={movies.slice(0, 6)} 
            onMovieClick={handleMovieClick}
          />
          <MovieRow 
            title="TV Shows" 
            movies={tvShows} 
            onMovieClick={handleMovieClick}
          />
          <MovieRow 
            title="Action Tails" 
            movies={actionMovies} 
            onMovieClick={handleMovieClick}
          />
          <MovieRow 
            title="Comedies" 
            movies={comedyMovies} 
            onMovieClick={handleMovieClick}
          />
          <MovieRow 
            title="Dramatic Dogs" 
            movies={dramaMovies} 
            onMovieClick={handleMovieClick}
          />
          <MovieRow 
            title="Fantasy Fur" 
            movies={fantasyMovies} 
            onMovieClick={handleMovieClick}
          />
          <MovieRow 
            title="Family Favorites" 
            movies={familyMovies} 
            onMovieClick={handleMovieClick}
          />
        </div>
      </div>
      <MovieModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        movie={selectedMovie}
      />
    </div>
  )
}

export default App