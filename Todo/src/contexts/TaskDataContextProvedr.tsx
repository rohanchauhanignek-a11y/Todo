import { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import TaskDataContext from "./TaskDataContext";


function TaskDataProvider({ children }: { children: React.ReactNode }) {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const url = import.meta.env.VITE_TASK_URL;

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(url);
      setAllData(response.data);       
      setFilteredData(response.data);  
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  const all       = useMemo(() => allData.length, [allData]);
  const completed = useMemo(() => allData.filter((t: any) => t.taskStatus).length, [allData]);
  const pending   = useMemo(() => allData.filter((t: any) => !t.taskStatus).length, [allData]);
const [debouncedSearch, setDebouncedSearch] = useState("");
  const MenuItem = useMemo(() => [
    { item: "All",       value: "",    count: all },
    { item: "completed", value: true,  count: completed },
    { item: "pending",   value: false, count: pending },
  ], [all, completed, pending]);

  useEffect(() => { fetchData(); }, [fetchData]);

  return (
    <TaskDataContext.Provider value={{
      allData,
      setAllData,
      filteredData,       
      setFilteredData,    
      MenuItem,
      all, completed, pending,
      fetchData,
      debouncedSearch, setDebouncedSearch
      
    }}>
      {children}
    </TaskDataContext.Provider>
  );
}

export default TaskDataProvider;