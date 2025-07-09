import { PawPrint } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-300 shadow-lg">
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <span className="bg-white rounded-full p-2 shadow-md">
            <PawPrint className="w-7 h-7 text-orange-500" />
          </span>
          <h1 className="text-orange-700 text-2xl md:text-3xl font-extrabold tracking-tight drop-shadow-sm" style={{letterSpacing: '0.04em'}}>
            DOGGIEFLIX
          </h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-orange-900 hover:text-orange-700 font-semibold transition-colors">Home</a>
          <a href="#" className="text-orange-900 hover:text-orange-700 font-semibold transition-colors">TV Shows</a>
          <a href="#" className="text-orange-900 hover:text-orange-700 font-semibold transition-colors">Movies</a>
          <a href="#" className="text-orange-900 hover:text-orange-700 font-semibold transition-colors">Dog Stars</a>
          <a href="#" className="text-orange-900 hover:text-orange-700 font-semibold transition-colors">My List</a>
        </nav>
        <div className="hidden md:block text-orange-700 font-bold text-lg select-none">
          🐶 Streaming for dog lovers!
        </div>
      </div>
    </header>
  )
}
