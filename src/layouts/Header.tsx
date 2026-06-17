import Button from "../components/UI/Button";
import {  useCallback,useContext } from "react";
import UIContext from "../contexts/uiContext";
import { useNavigate ,} from "react-router-dom";
import SearchBar from "../components/Tasks/Search";
import TaskDataContext from "../contexts/TaskDataContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, setSearch } from "../utils/taskSlice";
import store from "../utils/store";
type AppDispatch = typeof store.dispatch;
function Header() {
  const Navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { filter, setFilter,value,setValue}: any = useContext(UIContext);
  const { debouncedSearch, setDebouncedSearch }: any = useContext(TaskDataContext);
  const today = new Date();
  const search = useSelector((store:any) => store.todos.search);
  const handleSearch = useCallback((value: string) => {
    setDebouncedSearch(value);
  }, []);

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = weekdays[today.getDay()]; 

  const dayOfMonth = today.getDate();
  const month = today.getMonth() + 1; 
  const year = today.getFullYear();


  return (
    <div className="w-full bg-neutral-800 h-20 border-b-[0.5px] border-gray-600   items-center justify-between flex shadow-b-md px-4">
      <div className="task-filter ">
        {filter.item}
        <p className="text-xs text-gray-400 m-2">{`${dayName}, ${dayOfMonth}/${month}/${year}`}</p>
      </div>
      <div className="search-bar w-full">
        <SearchBar
          onSearch={(value: any) => {
            dispatch(setSearch(value));
            dispatch(fetchTasks(value))
            console.log(search)
          }}
        />
      </div>
      <div className="buttons w-40">
        <Button
          title={value ? "Task List" : "+ New task"}
          onClick={() => {
            Navigate(value ? `/` : "/formpage");
            setValue(!value);
          }}
        />
      </div>
    </div>
  );
}
export default Header;
