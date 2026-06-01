function ErrorFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 text-center">
        <div className="text-red-500 text-6xl mb-4">⚠️</div>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Something went wrong
        </h1>

        <p className="text-gray-600 mb-6">
          An unexpected error occurred. Please try refreshing the page or come
          back later.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}

export default ErrorFallback;