import TaskDataContext from "../../contexts/TaskDataContext";
import { useContext } from "react";
import TaskOverViewCard from "./TaskOverViewCard";

function TaskOverView() {

  const { MenuItem,all,completed,pending}: any = useContext(TaskDataContext);
  
  return (
    <div className="flex align-middle m-auto mt-4 justify-items-center h-35 w-full">

      {MenuItem.map((item: any, index: number) => (
        <TaskOverViewCard
          key={index}
          task={item.item === "All"
            ? { item: "All", count: all }
            : item.item === "completed"
              ? { item: "completed", count: completed }
              : { item: "pending", count: pending }}
        />
      ))}

    </div>
  );
}

export default TaskOverView;