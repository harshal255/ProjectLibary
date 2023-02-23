import React, { useState, useEffect } from 'react'

import Chart from 'react-apexcharts';

import axios from "axios";

import ChartContext from '../../../context/ChartContext';
import { useContext } from 'react';
const Pie1 = () => {
    let { setfilter } = useContext(ChartContext)

    const [myData, setMyData] = useState([]);
    const [myData2, setMyData2] = useState([]);
    const [isError, setIsError] = useState("");
    const [data, setData] = useState([]);

    const data01 = [
        {
            "languages": "Python",

        },
        {
            "languages": "JavaScript",

        },
        {
            "languages": "HTML",

        },
        {
            "languages": "PHP",

        },
        {
            "languages": "Android",

        },
        {
            "languages": "Flutter",

        },
        {
            "languages": "JAVA",

        },
        {
            "languages": "C/C++",

        },
        {
            "languages": "IOS",

        },
        {
            "languages": ".NET",

        },
        {
            "languages": "Node JS",

        },


    ];

    let first = "https://department-website.onrender.com/Project_2019-2020/?format=json"
    let second = "https://department-website.onrender.com/Project_2020-2021/?format=json"



    const res = axios.get(first);
    const res2 = axios.get(second);

    useEffect(() => {
        // getMyPostData();
        window.scrollTo(0, 0);

        axios.all([res, res2]).then(axios.spread((...responses) => {
            // console.log(responses)
            const responseOne = responses[0]
            const responseTwo = responses[1]
            const responseData = [...responseOne.data, ...responseTwo.data]

            setMyData(responseOne.data)
            setMyData2(responseTwo.data)
            setData(responseData)


        })).catch((error) => setIsError(error.message));
    }, []);

    const count_fre = (Language) => {
        let count = 0;
        data.map((datas) => {


            if (datas.Langauge.includes(Language)) {

                count += 1;
            }
        })
        return count

    }



    const chartdata = []
    // console.log(typeof chartdata);
    // eslint-disable-next-line array-callback-return
    data01.map((data01) => { chartdata.push({ 'Langauge': data01.languages, 'value': count_fre(data01.languages) }) })






    return (
        <>

            {isError !== "" && <h2>{isError}</h2>}

            <Chart type='pie' className="pie hover:cursor-pointer" series={chartdata.map((data) => data.value)}
                options={{
                    chart: {
                        type: 'pie',
                        width: '30%',
                        height: '30%',
                        responsive: [{
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: '100%'
                                },
                                legend: {
                                    position: 'bottom'
                                }
                            }
                        }]
                    },
                    labels: chartdata.map((data) => data.Langauge),
                    chart: {
                        events: {
                            dataPointSelection: (event, chartContext, config) => {
                                switch (config.w.config.labels[config.dataPointIndex]) {
                                    case 'Python':
                                        setfilter('Python');


                                        break;
                                    case 'JavaScript':
                                        setfilter('JavaScript');
                                        break;
                                    case 'HTML':
                                        setfilter('HTML');
                                        break;
                                    case 'PHP':
                                        setfilter('PHP');
                                        break;
                                    case 'Android':
                                        setfilter('Android');
                                        break;
                                    case 'Flutter':
                                        setfilter('Flutter');
                                        break;
                                    case 'JAVA':
                                        setfilter('JAVA');
                                        break;
                                    case 'C/C++':
                                        setfilter('C/C++');
                                        break;
                                    case 'IOS':
                                        setfilter('IOS');
                                        break;
                                    case '.NET':
                                        setfilter('.NET');
                                        break;
                                    case 'Node JS':
                                        setfilter('Node JS');
                                        break;
                                }
                            }
                        }
                    },
                }}
            ></Chart>



        </>
    )
}

export default Pie1