import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdHomeFilled } from "react-icons/md";
import { CgOrganisation } from "react-icons/cg";
import { MdHistoryToggleOff } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import clsx from "clsx";
import { RxCross1 } from "react-icons/rx";
import UserBtn from "../userBtn/UserBtn";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setIsActive] = useState('')

    return (
        <div className={clsx("md:hidden h-full", isOpen )}>
            <button onClick={() => setIsOpen(!isOpen)} className={clsx(" p-3 ", `${isOpen && "hidden"}`)}>
                {!isOpen &&
                    <GiHamburgerMenu size={20} className="text-black" />
                }
            </button>
            <div className={isOpen ? "flex flex-col  py-3  bg-black h-full  w-[280px] text-white " : "hidden"}>

                <div className="bg-black h-full text-sm  px-5 flex justify-start flex-col   gap-7">
                    <div className={clsx(
                        "text-green-500 text-xl font-bold  flex justify-between items-center p-1",
                        `${isActive === "LOGO" && "bg-blue-400"}`
                    )}>LOGO
                        <button onClick={() => setIsOpen(!isOpen)} >
                            {isOpen &&
                                <RxCross1 size={20} className="text-white" />
                            }

                        </button>
                    </div>

                    <div className="flex justify-center items-center flex-col text-start ">
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

                        {/* <button className="bg-blue-400 w-full text-start flex items-center gap-2 m-1 text-bold"> </button> */}
                    </div>

                    <div className="bottom-32 absolute">
                        <UserBtn />
                    </div>
                </div >
            </div>
        </div >
    )
}

export default MobileNav