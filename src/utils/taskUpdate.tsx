type Data = {
  taskStatus: boolean;
};

async function taskUpdate(id: number, taskStatus: boolean) {
  const url = import.meta.env.VITE_TASK_URL;

  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        taskStatus: !taskStatus,
      }),
    });

    const data: Data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export default taskUpdate;