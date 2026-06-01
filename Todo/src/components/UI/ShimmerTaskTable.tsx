function ShimmerTaskTable() {
    return (
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
    );
  }
  
  export default ShimmerTaskTable;