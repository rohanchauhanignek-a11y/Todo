// Main.tsx
import { useState, useCallback, lazy, Suspense } from "react";
import TaskOverView from "../components/Tasks/TaskOverview";
import  Search from "../components/Tasks/Search"
import ShimmerTaskTable from "../components/UI/ShimmerTaskTable";
import { useContext } from "react";
import TaskDataContext from "../contexts/TaskDataContext";

const TaskTable = lazy(() => import("../components/Tasks/TaskTable"));

function Main() {
  const { debouncedSearch, setDebouncedSearch }:any = useContext(TaskDataContext);

  

  return (
    <>
      <TaskOverView />
      
      <div className="mt-6 p-4">
        <Suspense fallback={<ShimmerTaskTable />}>
          <TaskTable search={debouncedSearch} />
        </Suspense>
      </div>
    </>
  );
}
export default Main;