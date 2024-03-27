/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const Card = ({
    code,
    desc,
    rate_float,
    rate,
    symbol }) => {
    const currencySymbol = 12;
    const price = 12;
    return (
        <div className="bg-gray-800 rounded-lg shadow-md p-6 max-w-sm mx-auto transform transition duration-300 ease-in-out hover:scale-105 hover:border-green-400 hover:border-4 w-full mt-4 ">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-xl font-bold text-gray-100">{desc}</h2>
                <div className="text-xl font-bold text-gray-200 flex items-center">
                    <span className="text-2xl mr-1"><span dangerouslySetInnerHTML={{ __html: symbol }} /></span>
                    <span>{rate}</span>
                </div>
            </div>
        </div>

    )
}

export default Card