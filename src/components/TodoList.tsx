import AddButton from "./AddButton"
import AllTodos from "./AllTodos"
import Upgrade from "./Upgrade"
import UserProfile from "./UserProfile"

const TodoList = () => {
  return (
    <div className='w-[20%] lg:w-[40%] h-full shadow-lg flex flex-col relative bg-yellow-400'>
       <UserProfile />
       <Upgrade/>
        <AllTodos />
        <AddButton />
    </div>
  )
}

export default TodoList