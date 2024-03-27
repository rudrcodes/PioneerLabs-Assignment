import { BsThreeDotsVertical } from "react-icons/bs";


const UserBtn = () => {

    return (
        <div className="flex justify-center items-center text-white bg-gray-700 px-1.5 py-2.5 rounded-md text-sm gap-1.5">
            <div className="rounded-full bg-gray-600 w-9 h-9 flex justify-center items-center">
                <span className="text-xs">user</span>
            </div>
            <div className="flex flex-col gap-1">
                <div>Rudransh Aggarwal</div>
                <div className="text-xs">aggarwalrudransh@gmail.com</div>
            </div>
            <div>
                <BsThreeDotsVertical size={18} />
            </div>

        </div>
    )
}

export default UserBtn