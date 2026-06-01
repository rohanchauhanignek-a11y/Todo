import axios from "axios";

type Data = {
  taskStatus: boolean;
};

async function taskUpdate(id: number, taskStatus: boolean) {
  const url = import.meta.env.VITE_TASK_URL;

  try {
    const response = await axios.patch<Data>(
      `${url}/${id}`,
      {
        taskStatus: !taskStatus,
      }
    );
  

    return response.data;

  } catch (error) {
    console.error("Error:", error);
  }
  
  
}

export default taskUpdate;