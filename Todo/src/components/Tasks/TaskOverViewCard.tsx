import React,{ useContext } from "react";
const TaskOverViewCard = React.memo(
  function TaskOverViewCard({ task }: any) {

  return (
    <div className="justify-items-center bg-neutral-800 w-full m-2 rounded-2xl hover:bg-neutral-700 hover:text-white">

      <h1 className="m-4">
        {task.item}
      </h1>

      <p>
        {task.count}
      </p>

    </div>
  );
}
)


export default TaskOverViewCard;