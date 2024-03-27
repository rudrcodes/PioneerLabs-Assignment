import { MdHomeFilled } from "react-icons/md";
import { CgOrganisation } from "react-icons/cg";
import { MdHistoryToggleOff } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { useState } from "react";
import clsx from "clsx";
import UserBtn from "../userBtn/UserBtn";

const DesktopNav = () => {
  const [isActive, setIsActive] = useState('')

  return (
    <div className="  text-white  h-screen w-[290px]  hidden md:block ">
      <div className="bg-[#000]  h-full  flex justify-start flex-col   gap-7 py-3">

        <div className={clsx(
          " text-3xl font-bold  text-green-500 px-5" ,
          `${isActive === "LOGO" && "bg-blue-400"}`
        )}>
          LOGO
        </div>

        <div className="flex justify-center items-center flex-col text-start px-5">
          <button className={clsx("w-full text-start flex items-center gap-2 m-1 text-bold", `${isActive === "Home" && "text-green-500"}`)}

            onClick={() => setIsActive('Home')}

          ><MdHomeFilled />
            Home</button>
          <button className={clsx("w-full text-start flex items-center gap-2 m-1 text-bold", `${isActive === "Organizations" && "text-green-500"}`)}
            onClick={() => setIsActive('Organizations')}

          ><CgOrganisation />
            Organizations</button>
          <button className={clsx("w-full text-start flex items-center gap-2 m-1 text-bold", `${isActive === "History" && "text-green-500"}`)}
            onClick={() => setIsActive('History')}

          ><MdHistoryToggleOff />
            History</button>
          <button className={clsx("w-full text-start flex items-center gap-2 m-1 text-bold", `${isActive === "Wallet" && "text-green-500"}`)}
            onClick={() => setIsActive('Wallet')}

          ><CiWallet />
            Wallet</button>
        </div>

        <div className="bottom-32 absolute px-1.5">
          <UserBtn />
        </div>

      </div >
    </div >
  )
}

export default DesktopNav