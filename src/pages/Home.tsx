import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchTasks, markAsCompleted } from "../utils/taskSlice";
import { useDispatch } from "react-redux";
import store from "../utils/store";
import PendingTable from "../components/Tasks/PendingTable";
import CompletedTask from "../components/Tasks/CompletedTask"
type AppDispatch = typeof store.dispatch;


function Main() {
  const dispatch = useDispatch<AppDispatch>();
  const { pending, completed, status } = useSelector((state:any) => state.todos);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (status === "loading") return <p className="text-white p-4">Loading...</p>;
  if (status === "error") return <p className="text-red-500 p-4">Something went wrong!</p>;

  return (
    <div className="flex gap-6 p-6">
      
      <CompletedTask/>
      <PendingTable/>

    </div>
  );
}

export default Main;