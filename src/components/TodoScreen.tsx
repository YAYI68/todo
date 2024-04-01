import React from "react"

type Props = {
    children: React.ReactNode
}
const TodoScreen = (props: Props) => {
    const { children } = props
  return (
    <div className='w-[80%] h-[90%] lg:w-[60%] bg-white flex '>
        {children}
    </div>
  )
}

export default TodoScreen