import Avatar from "../assets/avatar.png"

const UserProfile = () => {
  return (
    <div className='p-4 bg-[#3556AB] h-[18%]'>
      <div className='flex gap-4'>
         <div className='h-[3rem] w-[3rem] rounded-[50%]'>
            <img src={Avatar} alt="user profile" />
         </div>
         <div className="flex flex-col w-[60%]">
             <p className="text-white">Hello, Jhon</p>
             <p className="italic text-[1.5rem] text-gray-400">What are  your plans for today?</p>
         </div>
      </div> 
    </div>
  )
}

export default UserProfile