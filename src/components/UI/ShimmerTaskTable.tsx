function TaskShimmer() {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">
        ✅ Completed (Loading...)
      </h2>

      <div className="overflow-hidden rounded-md border border-gray-700">
        {/* Header */}
        <div className="grid grid-cols-3 bg-gray-800 p-4 font-semibold">
          <div>Title</div>
          <div>Description</div>
          <div>Action</div>
        </div>

        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-3 p-4 border-t border-gray-700"
          >
            <div className="h-4 w-24 bg-gray-700 rounded animate-pulse"></div>

            <div className="h-4 w-40 bg-gray-700 rounded animate-pulse"></div>

            <div className="flex gap-3">
              <div className="h-8 w-28 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-8 w-8 bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskShimmer;