import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './card'

const CardsList = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
                // console.log(res.data.bpi)
                setData(Object.values(res.data.bpi))
                console.log(Object.values(res.data.bpi))
            } catch (error) {
                console.log(error)
            }

        }
        fetchData();
    }, [])
    return (
        <div className='flex justify-center items-center flex-wrap sm:gap-2 md:gap-1 flex-col'>
            <h1 className='poppins-light'>CryptoPrices</h1>
            <div className='flex justify-center items-center flex-wrap sm:gap-2 md:gap-1 w-full '>
                {data.length > 0 && (
                    data.map((el) => {
                        /*
                        code:"USD"
                        description:"United States Dollar"
                        rate:"68,979.828"
                        rate_float:68979.8277
                        symbol:"&#36;"
                        */
                        return <Card
                            key={el.code}
                            code={el.code}
                            desc={el.description}
                            rate_float={el.rate_float}
                            rate={el.rate}
                            symbol={el.symbol}
                        />

                    })
                )}
            </div>
        </div>
    )
}

export default CardsList