/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip } from "chart.js";
ChartJS.register(BarElement, Tooltip)
export const BarChart = ({ data }) => {
    useEffect(() => {
        // data.map((el) => {
        // console.log(el);
        // });
    }, [data]);
    const labelsArray = data.map((el) => el?.Nation)
    const labelsSet = [...new Set(labelsArray)]
    console.log(labelsSet);
    const labels = labelsSet
    console.log(data)
    // const labelsValue;
    // const labels = ["Easy", "Medium", "Hard"];
    const ChartData = {
        labels,
        datasets: [
            {
                label: "Population",
                backgroundColor: ["#f32f2f", "#874bc0", "#17f55a"],
                borderColor: "#000",
                borderWidth: 2,
                data: data.map((el) => {
                    return el.Population;
                }),
            },
        ],
    };
    return (
        <div>
            <div
                style={{
                    width: "90vw",
                    height: "60vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "#ffffff11",
                }}
            >
                <Bar data={ChartData} />
            </div>
        </div>
    );
};