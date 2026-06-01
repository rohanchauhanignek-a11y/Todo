function MainShimmer() {
  return (
    <div className="min-h-screen bg-[#140d0d] text-white animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-gray-700">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-32 rounded-2xl bg-neutral-800 border border-neutral-700 p-4"
          >
            <div className="h-5 w-24 bg-neutral-700 rounded mb-4 mx-auto"></div>
            <div className="h-8 w-16 bg-neutral-700 rounded mx-auto"></div>
          </div>
        ))}
      </div>
     <div className="flex flex-col items-center gap-4 py-6">
        {[1, 2, 3, 4, 5, 6].map((task) => (
          <div
            key={task}
            className="w-[50%] rounded-xl border border-neutral-700 bg-neutral-900 p-4"
          >
            <div className="h-5 w-32 bg-neutral-700 rounded mb-3"></div>
            <div className="h-4 w-3/4 bg-neutral-700 rounded"></div>
          </div>
        ))}
      </div>
      
      
     

     
      
    </div>
  );
}

export default MainShimmer;