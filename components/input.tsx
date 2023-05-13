import React, { ChangeEvent, ChangeEventHandler, FC } from "react";
import { InputProps } from "@/types/input";

const Input = (props: InputProps) => {
  const { value, send } = props;
  return (
    <div className="flex items-center justify-center gap-4">
      <input
        type="text"
        className="block max-w-[502rem] p-3  text-black border border-gray-300 rounded-lg focus:outline-none bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
        onChange={value}
      />
      <button 
      onClick={send}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3"
      >
      new task
      </button>
    </div>
  );
};

export default Input;
