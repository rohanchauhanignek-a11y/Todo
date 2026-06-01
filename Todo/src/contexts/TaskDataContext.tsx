// TaskDataContext.ts
import { createContext } from "react";
type Task = {
  id: number;
  title: string;
  description: string;
  taskStatus: boolean;
};

type TaskDataContextType = {

  allData: Task[];
  setAllData: any;
  filteredData: any;
  setFilteredData: any;
  debouncedSearch: string;
  setDebouncedSearch: any;

  MenuItem: any[];
  all: number;
  completed: number;
  pending: number;
  fetchData: () => Promise<void>;
};

const TaskDataContext = createContext<TaskDataContextType | null>(null);
export default TaskDataContext;