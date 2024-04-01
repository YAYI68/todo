import TodoContentArea from "./components/TodoContentArea"
import TodoList from "./components/TodoList"
import TodoScreen from "./components/TodoScreen"


function App() {

  return (
    <main className="bg-[#373E56] h-screen w-screen flex flex-col items-center justify-center">
      <TodoScreen>
        <TodoList /> 
        <TodoContentArea />
      </TodoScreen>
    </main>
  )
}

export default App
