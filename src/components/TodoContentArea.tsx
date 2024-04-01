import { useStateContext } from "../context/StateContext"
import TaskForm from "./TaskForm"

const TodoContentArea = () => {
    const { todoId, isCreateOrEdit} = useStateContext()
     
  return (
    <div className='w-[80%] lg:w-[60%] flex flex-col'>
       <div className="h-[18%] w-full flex items-center justify-center bg-[#3556AB] ">
         <p className="text-white font-semibold text-[1.5rem]">{isCreateOrEdit &&  todoId?  `Edit Task`:isCreateOrEdit && !todoId ? `Create Task`:`Task`}</p>
       </div>        
        <div className="w-full h-[82%] bg-gray-100 flex justify-center items-center">
            {isCreateOrEdit ? 
             <TaskForm />
             :<div className="p-4">
               <p className="text-[#3556AB] text-[1rem] font-semibold ">Create a new task or click on an existing one to view the detail</p>
             </div>
          }
         
        </div>
    </div>
  )
}

export default TodoContentArea