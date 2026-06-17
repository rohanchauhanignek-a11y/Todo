import { useSelector,useDispatch } from "react-redux";
import { markAsCompleted,markAsPending,removeTask} from "../../utils/taskSlice";
import taskUpdate from "../../utils/taskUpdate";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

    
function CompletedTask () {
    const { pending, completed, status } = useSelector((state:any) => state.todos);
    const dispatch = useDispatch();
    const url = import.meta.env.VITE_TASK_URL;
    const handleToggle = async (id: number, taskStatus: boolean) => {
  try {
    await taskUpdate(id, taskStatus);
    dispatch(markAsPending(id))
    
  } catch (err) {
    console.error(err);
  }
};
const handleDelete = async (id: number) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    dispatch(removeTask(id))
     
  } catch (err) {
    console.error("Error deleting data:", err);
  }
};
    return (
        <div className="flex-1">
        <h2 className="text-white text-lg font-semibold mb-3">
          ✅ Completed ({completed.length})
        </h2>
        <table className="w-full text-sm text-white border border-neutral-700 rounded-lg overflow-hidden">
          <thead className="bg-neutral-800">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left flex justify-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {completed.map((task:any) => (
              <tr key={task.id} className="border-t border-neutral-700 hover:bg-neutral-700">
                <td className="p-3 line-through text-green-400">{task.title}</td>
                <td className="p-3 text-gray-400 text-xs">{task.description}</td>
                <td className="p-3 flex justify-center gap-6">
                  <button
                    onClick={() => handleToggle(task.id, task.taskStatus)}
                    className="bg-green-600 hover:bg-red-300 text-white text-xs px-3 py-1 rounded-md cursor-pointer"
                  >
                    - Mark as Pending
                  </button>
                  <button className = "text-red-500 flex items-center cursor-pointer" onClick={() => handleDelete(task.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
                </td>
              </tr>
            ))}
            {completed.length === 0 && (
              <tr>
                <td colSpan={3} className="p-4 text-center text-gray-500">
                   No Task is found 
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
}
export default CompletedTask