import React, { createContext, useContext, useState, ReactNode } from "react";
import { v4 as uuidv4 } from 'uuid';

interface Todo {
  id: string;
  task: string;
}

interface StateContextType {
  todoId: string | undefined;
  setTodoId: React.Dispatch<React.SetStateAction<string | undefined>>;
  addTodo: (data: string) => void;
  editTodo: (id: string, data: string) => void;
  deleteTodo: (id: string) => void;
  todos: Todo[];
  isCreateOrEdit: boolean;
  setIsCreateOrEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const StateContext = createContext<StateContextType>({} as StateContextType);

type StateContextProviderProps = {
  children: ReactNode;
}

export function StateContextProvider(props: StateContextProviderProps) {
  const { children } = props;
  const savedTodosJson = localStorage.getItem("todos");
  const savedTodos: Todo[] = savedTodosJson ? JSON.parse(savedTodosJson) : [];
  const [todos, setTodos] = useState<Todo[]>(savedTodos);
  const [todoId, setTodoId] = useState<string>();
  const [isCreateOrEdit, setIsCreateOrEdit] = useState(false);

  const addTodo = (data: string) => {
    const todo: Todo = {
      id: uuidv4(),
      task: data
    };
    setTodos((prev) => [...prev, todo]);
    localStorage.setItem("todos", JSON.stringify([...todos, todo]));
    setIsCreateOrEdit(false);
  }
  
  const editTodo = (id: string, data: string) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, task: data } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setIsCreateOrEdit(false);
  };

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setIsCreateOrEdit(false);
  };


  const value: StateContextType = {
    todoId,
    setTodoId,
    addTodo,
    editTodo,
    deleteTodo,
    todos,
    isCreateOrEdit,
    setIsCreateOrEdit,
  };

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  );
}

export function useStateContext() {
  const context = useContext(StateContext);
  if (context == undefined) {
    throw new Error("useStateContext must be within a App provider");
  }
  return context;
}
