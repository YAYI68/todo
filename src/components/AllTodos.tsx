import { useState } from "react"
import Check from "../assets/check.svg"
import { useStateContext } from "../context/StateContext"

type TodoProps = {
    id:string,
    task: string
}

const Todo = (props:TodoProps) => {
    const {id,task} = props
    const { todoId, setTodoId, setIsCreateOrEdit, isCreateOrEdit} = useStateContext()
    const [toggle, setToggle] = useState(false)
   
   
    const handleOnClick = ()=>{
        setTodoId(id)
        setIsCreateOrEdit(true)
    }

    const handleCheck = ()=>{
        setTodoId(id)
        // setIsCreateOrEdit(!isCreateOrEdit)
        setToggle(!toggle)
    }
    return (
      <div className={`p-4 flex shadow-xl bg-white items-center justify-between rounded`}>
          <div className="flex items-center gap-4">
          <button onClick={handleCheck}  className={`w-[1.5rem] h-[1.5rem] border border-[#071D55] ${id===todoId && toggle ?  `bg-[#53DA69]`:""} rounded-[50%] flex items-center justify-center`}>
         {id===todoId && toggle ?<img src={Check} alt="Check" /> : "" } 
         </button>
         <p className={`font-medium text-[#071D55] ${id===todoId && toggle ? `line-through`:""} `}>{task}</p>
          </div>
         <button onClick={handleOnClick} className="p-2 border-[#071D55] border text-[#071D55] font-medium rounded">Edit</button>
      </div>
    )
  }

  

const AllTodos = () => {
    const { todos } =  useStateContext()
  return (
    <div className="p-4 bg-gray-100 h-full overflow-y-auto flex flex-col gap-4">
        {todos.length > 0 ?
        todos.map((todo,i)=>(
            <Todo key={i} id={todo.id} task={todo.task}/>
        ))
       
       : <p className="font-semibold text-[#071D55]">you dont have any task at the moment</p>
    }
      
    </div>
  )
}

export default AllTodos