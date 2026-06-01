import { useForm } from "react-hook-form";
import Button from "../components/UI/Button";
import addTask from "../utils/addTask";
import { useNavigate } from "react-router-dom";
import UIContext from "../contexts/uiContext";
import { useContext } from "react";
import TaskDataContext from "../contexts/TaskDataContext";
function FormPage() {
const Navigate = useNavigate();
const {value,setValue}:any = useContext(UIContext);
const {fetchData}:any = useContext(TaskDataContext);
  const {
    register,
    handleSubmit,
    formState: { errors , isSubmitting },
  } = useForm();
  const onSubmit = async (data: object) => {
  await addTask({...data, taskStatus: false});
  await fetchData();
  Navigate('/');
  setValue(false);
};

  return (
    <div className="bg-none h-screen flex mt-20 justify-center">
      <div className="bg-neutral-800 w-1/2 h-1/2 p-6 rounded-lg justify-center ">
        <form
          className="flex flex-col gap-4 a"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="title" className="text-white">
            Title
          </label>

          <input
            {...register("title", {
              required: "*Please Enter Title Title is required",
              maxLength:{
                value :40,
                message :"*Title is to Long"
              }
            })}
            type="text"
            className="border p-2 rounded bg-white text-black"
            placeholder="Enter Title..."
          />
          {errors.title && <p className="text-xs text-red-500">{errors.title.message}</p>}
          <label htmlFor="description">Description</label>

          <input
            {...register("description", {
              required: "Please Enter Description.Description is required",
            })}
            type="text"
            className="border p-2 rounded bg-white text-black"
            placeholder="Enter Description..."
          />
          {errors.description && <p className="text-xs text-red-500">{errors.description.message}</p>}
          <input
            type="submit"
            className="cursor-pointer bg-cyan-600 w-20 rounded-md " value={isSubmitting?"Submiting...":"Submit"}
            
          />
        </form>
      </div>
    </div>
  );
}

export default FormPage;
