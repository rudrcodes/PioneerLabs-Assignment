import { CategoryScale, LinearScale, PointElement, Chart, LineElement } from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

import { useEffect, useState } from "react";
import { BarChart } from "../BarChart";
import axios from "axios";

export const Graph = () => {
    // const [data, setData] = useState([]);

    const [countryData, setCountryData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
                // console.log(res)
                console.log(res.data.data)
                setCountryData(res?.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])


    return (
        <div className="flex justify-center items-center flex-col gap-2">
            <h3>Country Population Data</h3>
            <BarChart data={countryData} />

        </div>
    )
}








