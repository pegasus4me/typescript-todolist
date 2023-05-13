import { ChangeEventHandler, MouseEventHandler } from "react";

export interface InputProps {
    value: ChangeEventHandler<HTMLInputElement>;
    send : MouseEventHandler<HTMLButtonElement>
}
  
export interface Value {
    data : string
    date? : Number
}

export interface taskData {
    send: MouseEventHandler<HTMLInputElement>;
    text: string;
}

