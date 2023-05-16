"use client";

import Image from "next/image";
import Input from "@/components/input";
import { useState, useEffect } from "react";
import { Value } from "@/types/input";
import TaskContainer from "@/components/taskContainer";
import Task from "@/components/task";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  const [taskList, setTaskList] = useState<Value[]>([]);

  const sendVal = () => {
    if (inputValue !== "") {
      const date: number = Date.now();
      const taskdata: Value = {
        data: inputValue,
        date: date,
      };
      setTaskList([...taskList, taskdata]);
    }
  };

  const deleteTaskt = (id: number) => {
    const updatedTaskList = taskList.filter((task) => task.date !== id);
    setTaskList(updatedTaskList);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Input
          value={(e) => setInputValue(e.currentTarget.value)}
          send={() => sendVal()}
        />
      </div>

      <div className="mt-10">
        <TaskContainer>
          {taskList.length !== 0 ? (
            <div>
              {taskList.map((val) => {
                return (
                  <Task
                    send={() => deleteTaskt(val.date)}
                    text={val.data}
                  />
                );
              })}
            </div>
          ) : (
            <p className="text-center mt-[30rem] font-medium text-2xl text-slate-900 opacity-25">
              creer une nouvelle task
            </p>
          )}
        </TaskContainer>
      </div>
    </main>
  );
}
