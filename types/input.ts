import { ChangeEventHandler, MouseEventHandler } from "react";

export interface InputProps {
    value: ChangeEventHandler<HTMLInputElement>;
    send : MouseEventHandler<HTMLButtonElement>
}
  
export interface Value {
    data : String
    date? : Number
}

export interface taskData {
    send: MouseEventHandler<HTMLInputElement>;
    text: string;
}

