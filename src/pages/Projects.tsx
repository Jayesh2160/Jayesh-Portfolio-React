export function Projects() {
    return (
      <div className="max-w-6xl mx-auto p-6 text-center space-y-6">
        <h1 className="text-4xl font-bold text-[#72f9cb] mb-6">My Projects</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Weather Site Card */}
          <div className="bg-[#1a2e35] rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition-transform">
            <h2 className="text-2xl font-semibold text-[#72f9cb] mb-2">Weather Site</h2>
            <p className="text-[#e6f0f1]">
              A web app built with React that uses the OpenWeatherMap API to display real-time weather updates based on user input.
            </p>
          </div>
  
          {/* Spotify Clone Card */}
          <div className="bg-[#1a2e35] rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition-transform">
            <h2 className="text-2xl font-semibold text-[#72f9cb] mb-2">Spotify Clone</h2>
            <p className="text-[#e6f0f1]">
              A front-end clone of Spotify built with React and Tailwind CSS featuring a clean layout and mock audio controls.
            </p>
          </div>
        </div>
      </div>
    );
  }
  