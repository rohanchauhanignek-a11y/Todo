import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import  taskUpdate  from "../../utils/taskUpdate";
import TaskDataContext from "../../contexts/TaskDataContext";
import { useContext } from "react";
const TaskCard = React.memo(function TaskCard({ task }: any) {
  const url = import.meta.env.VITE_TASK_URL;
  // if(true){
  //   throw new Error("An error occurred while rendering the TaskCard component.");
  // }
  const { fetchData }: any = useContext(TaskDataContext);
  const handleDelete = async (id: number) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    await fetchData();  
  } catch (err) {
    console.error("Error deleting data:", err);
  }
};
  const handleToggle = async (id: number, taskStatus: boolean) => {
  try {
    await taskUpdate(id, taskStatus);
    await fetchData();
  } catch (err) {
    console.error(err);
  }
};
  return (
    <div className="bg-none h-full w-1/2 border-[0.5px] border-gray-500 rounded-lg p-4 justify-between  hover:bg-neutral-700 hover:text-white flex">
      <div className="flex gap-4">
        <input type="checkbox" className="w-4 h-4 text-green-600 bg-neutral-secondary-medium border-default-medium rounded-xs focus:ring-green-500 dark:focus:ring-green-600 ring-offset-neutral-primary focus:ring-2 cursor-pointer" checked={task.taskStatus} onChange={() =>{ handleToggle(task.id, task.taskStatus);}}/>
        
        <div className="m-auto">
          <h1 className={task.taskStatus?`line-through text-green-500`:`text-red-300`}>{task.title}</h1>
          <p className="text-xs text-gray-400">{task.description}</p>
        </div>
      </div>
      <div
        className="text-red-500 flex items-center cursor-pointer"
        onClick={() => handleDelete(task.id)}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
    </div>
  );
});


export default TaskCard;
