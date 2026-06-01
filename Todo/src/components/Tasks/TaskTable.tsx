import TaskCard from "./TaskCard";
import fetchTasks from "../../utils/fetchTasks";
import React,{ useEffect, useContext, useCallback } from "react";
import TaskDataContext from "../../contexts/TaskDataContext";
import UIContext from "../../contexts/uiContext";

function TaskTable({ search }: any) {
  const { filteredData, setFilteredData }: any = useContext(TaskDataContext);
  const { filter }: any = useContext(UIContext);

  let url = import.meta.env.VITE_TASK_URL;
  if (filter.item !== "All") {
    url += `?taskStatus=${filter.value}`;
  }
  if (search) {
    url += filter.item !== "All"
      ? `&q=${search}`
      : `?q=${search}`;
  }
  const fetchData = useCallback(async () => {const result = await fetchTasks(url);
    setFilteredData(result);}, [url, filter, search])
  

 useEffect(() => {
  fetchData();
}, [fetchData]);

  return (
    <div className="grid grid-cols-1 gap-4 justify-items-center">
      {filteredData &&
        filteredData.map((item: any) => (
          <TaskCard key={item.id} task={item} />
        ))}
    </div>
  );
}

export default React.memo(TaskTable);