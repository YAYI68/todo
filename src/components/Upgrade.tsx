import Cup from "../assets/cup.png"
const Upgrade = () => {
  return (
    <div className='w-full bg-[#CDE53D] hidden lg:flex p-4 gap-4 relative items-center'>
        <div>
            <img src={Cup} alt="cup" />
        </div>
        <p className="text-[#071D55] font-medium">Go Pro Upgrade Now</p>
        <div className="absolute top-0 right-4 bg-[#071D55] h-[3rem] w-[3rem] flex justify-center items-center">
            <p className="text-[#F2C94C] ">$1</p>
        </div>
    </div>
  )
}

export default Upgrade