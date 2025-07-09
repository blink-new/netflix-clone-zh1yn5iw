export function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4 border-4"></div>
        <h2 className="text-orange-600 text-2xl font-extrabold tracking-widest">DOGGIEFLIX</h2>
        <p className="text-orange-400 mt-2">Fetching the best dog movies...</p>
        <div className="mt-2 text-3xl">🐶</div>
      </div>
    </div>
  )
}
