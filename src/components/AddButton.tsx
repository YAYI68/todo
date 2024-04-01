import Plus from "../assets/plus.svg"
import { useStateContext } from "../context/StateContext"


const AddButton = () => {
    const {  setIsCreateOrEdit , setTodoId} = useStateContext()
    const handleAdd = ()=>{
        setIsCreateOrEdit(true)
        setTodoId("")
    }
  return (
    <button onClick={handleAdd} className="h-[4rem] w-[4rem] bg-[#123EB1] shadow-lg rounded-[50%] flex justify-center items-center absolute bottom-4 right-4">
        <img src={Plus} alt="Plus" />
    </button>
  )
}

export default AddButton