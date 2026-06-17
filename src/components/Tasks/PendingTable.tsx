import { useSelector,useDispatch } from "react-redux";
import { markAsCompleted,removeTask } from "../../utils/taskSlice";
import taskUpdate from "../../utils/taskUpdate";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function PendingTable () {
    const { pending, completed, status } = useSelector((state:any) => state.todos);
    const dispatch = useDispatch();
    const url = import.meta.env.VITE_TASK_URL;
    const handleToggle = async (id: number, taskStatus: boolean) => {
  try {
    await taskUpdate(id, taskStatus);
    dispatch(markAsCompleted(id))
    
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
          ⏳ Pending ({pending.length})
        </h2>
        <table className="w-full text-sm text-white border border-neutral-700 rounded-lg overflow-hidden">
          <thead className="bg-neutral-800">
            <tr className="">
              <th className="p-3  flex justify-center">Title</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 flex justify-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {pending.map((task: any) => (
              <tr
                key={task.id}
                className="border-t border-neutral-700 hover:bg-neutral-700"
              >
                <td className="p-3 text-red-300">{task.title}</td>
                <td className="p-3 text-gray-400 text-xs">
                  {task.description}
                </td>
                <td className="p-3 flex justify-center gap-6">
                  <button
                    onClick={() => handleToggle(task.id, task.taskStatus)}
                    className="bg-red-300 hover:bg-green-600 text-white text-xs px-3 py-1 rounded-md cursor-pointer"
                  >
                    ✔ Mark as Completed
                  </button>
                  <button className = "text-red-500 flex items-center cursor-pointer" onClick={() => handleDelete(task.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
                </td>
                <td></td>
              </tr>
            ))}
            {pending.length === 0 && (
              <tr>
                <td colSpan={3} className="p-4 text-center text-gray-500">
                  No Task is found 
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
}
export default PendingTable