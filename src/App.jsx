function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-4xl mb-4 shadow-lg">
            🧑‍💻
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Najib Hossain
          </h1>
          
          <p className="text-gray-600 mb-6">Full Stack Developer</p>
          
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://github.com/NajibHossain49"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-md"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/md-najib-hossain"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              LinkedIn
            </a>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <p className="text-2xl mb-3">🌟</p>
            <p className="text-gray-700 font-medium mb-2">Show Your Support</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              If you like this project, give it a <span className="font-bold text-yellow-500">⭐</span> on GitHub!
            </p>
            <p className="text-gray-500 text-xs mt-3">
              Thank you to all the stargazers ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;