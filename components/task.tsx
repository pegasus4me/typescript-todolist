import React, { MouseEventHandler } from "react";
import { taskData } from "@/types/input";

const Task = (props: taskData) => {
  const { send, text} = props;
  return (
    <div className="border border-gray-300 h-[6rem] bg-slate-100 rounded-md m-2 flex items-center shadow-md">
        <input type="radio" 
        onClick={send} 
        className="ml-5 w-5  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
        />
        <p className="font-medium text-slate-900 ml-7">{text}</p>
    </div>
  );
};


export default Task;
