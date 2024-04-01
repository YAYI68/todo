import { useState } from "react";
import { useStateContext } from "../context/StateContext";

interface Todo {
  id: string;
  task: string;
}
const TaskForm = () => {
    const {  todoId, addTodo , editTodo, todo, deleteTodo } = useStateContext()
    const [text,setText] = useState("")
    

    // console.log({todoId})

    console.log({todo})

 
    
   
    

    const handleOnsubmit = (e: React.FormEvent<HTMLFormElement>)=>{
          e.preventDefault()
          
           if(todoId){
            editTodo(todoId,text)
           }
           else{
            addTodo(text)
           }
    }
  return (
    <form onSubmit={handleOnsubmit} className='h-full w-full relative p-4 flex flex-col justify-between'>
      <div className='flex flex-col gap-2'>
        <label htmlFor="">Task Name</label>
        <input defaultValue={todo?.task} type="text" className="w-full p-4 focus:outline-none border rounded-md" placeholder="write a task" onChange={(e)=>setText(e.target.value)} />
      </div>
      <div className="flex gap-4">
       {todoId?  <button onClick={()=>deleteTodo(todoId)} className="p-4 bg-[#AB3535] rounded-md w-[20%] text-white">Delete</button> : ""}
        <button className={`bg-[#3556AB]  ${todoId ? `w-[75%]`:'w-full'} p-4 rounded-md text-white`}>
            Save
        </button>
      </div>
    </form>
  )
}

export default TaskForm