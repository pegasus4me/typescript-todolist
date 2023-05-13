"use client";

import Image from "next/image";
import Input from "@/components/input";
import { useState, useEffect } from "react";
import { Value } from "@/types/input";
import TaskContainer from "@/components/taskContainer";
import Task from "@/components/task";

// type list = [string, number]

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  const [taskList, setTaskList] = useState<Value[]>([]);
  const [clicked, setClicked] = useState<boolean>(false)
  const sendVal = () => {

    if (inputValue !== "") {
      const date: Number = Date.now();

      const taskdata: Value = {
        data: inputValue,
        date: date,
      };
      setTaskList([...taskList, taskdata]);
    }
  };

  const deleteTaskt = () => {

  }

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

        {taskList.map((val) => {
            return <Task send={() => deleteTaskt } text={val.data} />
        })}  
        
        </TaskContainer>
      </div>
    </main>
  );
}
