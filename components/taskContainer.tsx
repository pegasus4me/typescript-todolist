import React from "react";

const TaskContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className=" w-[80rem] border h-[70rem] border-dashed border-gray-400 rounded-lg shadow-md p-3">
    {children}
  </div>;
};

export default TaskContainer;
